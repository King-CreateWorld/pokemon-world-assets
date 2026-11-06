// React 化的分层创角渲染器，移植自 reference-code/creation-frame-renderer.js
// （同源固定版本，SHA256 已验）。仅渲染已解码的「creation-eligible」部件；
// 对超出 padding 的 UV 采样明确拒绝（返回 native-atlas-neighbor-required），绝不臆造图集邻接帧。
import type { CreationManifest, CreationPalette, PaletteColor } from './creationTypes';
import type { CharacterDraft } from './characterDraft';

export interface DrawOk {
  ok: true;
  view: number;
  frame: number;
  layers: number;
}
export interface DrawBlocked {
  ok: false;
  reason: 'native-atlas-neighbor-required';
  references: { slot?: string; frame: number; delta: [number, number] }[];
}
export type DrawResult = DrawOk | DrawBlocked;

export interface CreationRenderer {
  draw: (canvas: HTMLCanvasElement, draft: CharacterDraft, view: number, frame: number) => Promise<DrawResult>;
  dispose: () => void;
  manifest: CreationManifest;
  palette: CreationPalette;
  framesForView: (view: number) => number[];
}

const BASE = '/native-character/v1/';

// 分层绘制顺序（与参考渲染器一致）；按上衣 flags 决定是否覆盖鞋/裤
function layerOrder(items: CreationManifest['items'], topItem: number): string[] {
  const top = items.find((i) => i.slot === 'TOP' && i.id === topItem);
  return ['FOOTWEAR', 'LEGGINGS', 'TOP', 'BACK', 'FACIAL_HAIR', 'EYES', 'HAIR', 'HAT', 'GLOVES'].filter(
    (s) => !(s === 'FOOTWEAR' && ((top?.flags ?? 0) & 4096)) && !(s === 'LEGGINGS' && ((top?.flags ?? 0) & 2048)),
  );
}

export async function loadCreationRenderer(
  { signal }: { signal?: AbortSignal } = {},
  base: string = BASE,
): Promise<CreationRenderer> {
  const [manifest, palette] = await Promise.all([
    fetch(base + 'creation-animation.json', { signal }).then((r) => {
      if (!r.ok) throw new Error(`creation-animation.json:${r.status}`);
      return r.json() as Promise<CreationManifest>;
    }),
    fetch(base + 'palette.json', { signal }).then((r) => {
      if (!r.ok) throw new Error(`palette.json:${r.status}`);
      return r.json() as Promise<CreationPalette>;
    }),
  ]);

  // Exact source-derived fresh-atlas samples, separate from original uncertainty flags.
  const supplement = await fetch(base + 'fresh-atlas-v1/manifest.json', { signal }).then(r => {
    if (!r.ok) throw new Error('atlas supplement HTTP ' + r.status);
    return r.json();
  });
  if (supplement.sourceSha256 !== (manifest as any).sourceSha256) throw new Error('atlas source mismatch');
  const resolved = new Map<string, any>();
  for (const entry of supplement.rows) {
    if (!/^[a-f0-9]{64}\.png$/.test(entry.path) || entry.sha256 !== entry.path.slice(0,64)) throw new Error('invalid atlas path');
    const key = JSON.stringify(entry.key);
    if (resolved.has(key)) throw new Error('duplicate atlas key');
    resolved.set(key, entry);
  }
  const sampled = (row: any) => {
    if (row.withinVerifiedPadding) return null;
    const entry = resolved.get(JSON.stringify([row.slot,row.id,row.variant ?? 0,row.view,row.frame,row.channel]));
    if (!entry) return null;
    if (JSON.stringify(entry.sourceRegionDelta) !== JSON.stringify(row.sourceRegionDelta) || entry.width !== row.width || entry.height !== row.height) throw new Error('atlas descriptor mismatch');
    return entry;
  };
  const decoded = new Map<string, ImageBitmap>();
  let disposed = false;
  const dispose = () => {
    disposed = true;
    for (const b of decoded.values()) b.close();
    decoded.clear();
  };

  // 每个 view 拥有 base 行的帧集合（用于帧范围/钳制）
  const framesByView = new Map<number, Set<number>>();
  for (const r of manifest.rows) {
    if (r.channel === undefined || r.channel === null) {
      if (r.base === null) continue;
      if (!framesByView.has(r.view)) framesByView.set(r.view, new Set());
      framesByView.get(r.view)!.add(r.frame);
    }
  }
  const framesForView = (view: number): number[] =>
    Array.from(framesByView.get(view) ?? []).sort((a, b) => a - b);

  async function ensure(path: string, width: number, height: number, expectedHash?: string): Promise<ImageBitmap> {
    signal?.throwIfAborted();
    const hit = decoded.get(path);
    if (hit) return hit;
    const resp = await fetch(base + path, { signal });
    if (!resp.ok) throw new Error(`resource HTTP ${resp.status} ${path}`);
    const blob = await resp.blob();
    if (expectedHash) {
      const digest = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', await blob.arrayBuffer()))).map(n=>n.toString(16).padStart(2,'0')).join('');
      if (digest !== expectedHash) throw new Error('atlas hash mismatch');
    }
    const bmp = await createImageBitmap(blob);
    if (signal?.aborted) {
      bmp.close();
      signal.throwIfAborted();
    }
    if (disposed) {
      bmp.close();
      throw new Error('renderer disposed');
    }
    if (bmp.width !== width || bmp.height !== height) {
      bmp.close();
      throw new Error(`size mismatch ${path}`);
    }
    decoded.set(path, bmp);
    return bmp;
  }

  async function draw(canvas: HTMLCanvasElement, draft: CharacterDraft, view: number, frame: number): Promise<DrawResult> {
    if (disposed) throw new Error('renderer disposed');
    if (![0, 1, 2].includes(view) || !Number.isInteger(frame)) throw new Error('invalid mode');
    const eligible = manifest.genders[String(draft.gender)];
    if (!eligible) throw new Error('invalid gender');
    for (const slot of manifest.visibleSlots) {
      if (!eligible[slot].includes(draft.slots[slot as keyof typeof draft.slots]?.item)) throw new Error(`ineligible ${slot}`);
    }

    const order = layerOrder(manifest.items, draft.slots.TOP.item);
    const rows = manifest.rows.filter((r) => r.view === view && r.frame === frame);
    const baseRow = rows.find((r) => r.base === draft.skin);
    if (!baseRow?.length) throw new Error('missing base');

    interface PlanEntry {
      row: (typeof manifest.rows)[number];
      tint: PaletteColor['tintRGB'] | null;
    }
    const plan: PlanEntry[] = [];
    const channelGroups = [
      [3, 5, 4],
      [0, 2, 1],
      [6, 8, 7],
    ];
    for (let phase = 0; phase < 3; phase++) {
      if (phase === 1) plan.push({ row: baseRow, tint: null });
      for (const slot of order) {
        for (const ch of channelGroups[phase]) {
          for (const row of rows.filter((r) => r.slot === slot && r.id === draft.slots[slot as keyof typeof draft.slots].item && r.channel === ch && r.length)) {
            const tint = [2, 5, 8].includes(ch) ? null : (palette.colors.find((c) => c.id === draft.slots[slot as keyof typeof draft.slots].color)?.tintRGB ?? null);
            if (![2, 5, 8].includes(ch) && !tint) throw new Error('invalid tint');
            plan.push({ row, tint });
          }
        }
      }
    }

    const uncertain = plan.filter((p) => !p.row.withinVerifiedPadding && !sampled(p.row));
    if (uncertain.length) {
      // 真实缺帧（层 sourceRegionDelta 超出已验证 padding，需原生图集邻接像素）：
      // 明确稳定拒绝，且【不清空可见画布】——保留上一有效帧，交由上层做稳定的缺帧提示，
      // 避免「清屏 + 黄字遮罩」随动画逐帧交替造成闪烁。
      return {
        ok: false,
        reason: 'native-atlas-neighbor-required',
        references: uncertain.map((p) => ({ slot: p.row.slot, frame: p.row.frame, delta: p.row.sourceRegionDelta })),
      };
    }

    for (const { row } of plan) {
      const entry = sampled(row);
      await ensure(entry ? 'fresh-atlas-v1/' + entry.path : row.path, row.width, row.height, entry?.sha256);
    }
    if (disposed) throw new Error('renderer disposed');

    // 直接合成到「调用方提供的离屏画布」：本函数绝不触碰可见画布。
    // 由调用方在 await 返回后校验代际/草稿/模式一致，再同步 blit 到可见画布，
    // 从而杜绝旧任务迟到覆盖新帧（时序竞态）。blocked 分支已在上方提前返回，不会清屏。
    canvas.width = baseRow.width;
    canvas.height = baseRow.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('no 2d context');
    for (const { row, tint } of plan) {
      const c = document.createElement('canvas');
      c.width = row.width;
      c.height = row.height;
      const x = c.getContext('2d');
      if (!x) continue;
      const entry = sampled(row);
      x.drawImage(decoded.get(entry ? 'fresh-atlas-v1/' + entry.path : row.path)!, entry ? 0 : -row.sourceRegionDelta[0], entry ? 0 : -row.sourceRegionDelta[1]);
      if (tint) {
        const px = x.getImageData(0, 0, c.width, c.height);
        for (let i = 0; i < px.data.length; i += 4) {
          for (let k = 0; k < 3; k++) px.data[i + k] = Math.round((px.data[i + k] * tint[k]) / 255);
        }
        x.putImageData(px, 0, 0);
      }
      ctx.drawImage(c, 0, 0);
    }
    return { ok: true, view, frame, layers: plan.length };
  }

  return { draw, dispose, manifest, palette, framesForView };
}
