# H4 sources — battle/scenes/bw-3d/converted

Existing asset commit: `9cd5e7e39083ed78343ff470e48bca2af0f3c279` in `King-CreateWorld/pokemon-world-assets`. This README is an append-only supplement; it does not replace or alter those files.

## Rights / licensing

Copyright remains with the original rights holders (Nintendo/Game Freak and respective MOD/font authors). Source attribution is not a redistribution grant. License status: **NOASSERTION**. Non-commercial personal application use does not change the public visibility of the asset repository. No blanket MIT/art license is asserted.

## Source references

# 关都 H4 视觉资源说明

只追加，固定提交使用。与游戏逻辑/账号/存档无关。

- BW静态96px：https://github.com/one-om-jha/PokemonBlack.git，核查本地版本 `02800dab6d6e3cdb6d048af0a0d5ade2df14e823`，`sprites/pokemon/`（具体正背/闪光子路径见原构建器）。当前PNG为原项目构建器解码后无损PNG产物，保持本地H3构建产物字节，不宣称PNG编码与上游原文件相同。逐像素、锚点及输入SHA见本地H1审计。
- 高清队伍图标：fei，Self Made Poke Head Portrait 0.1；https://forums.pokemmo.com/index.php?/topic/151781-mod%E7%B2%BE%E7%81%B5%E5%A4%B4%E5%83%8F/ 。`sprites/monstericons/NNN-0.png` 原字节。
- 3D：PokemonWhite `/a/0/1/1`，成员号及SHA和apicula版本见scene-provenance.json；不包含ROM。
- FireRed训练家：本地原源码/ROM解码的64px立绘。
- xBRZ4：本地1x图集，经现有smoothPipeline规则离线逐帧4倍；透明alpha仅0/255，参数、原SHA、输出SHA见专用清单。不是AI生成，不冒充原版高清图。
- 字体：原battle.ttf及本次实际对白语料子集；子集参数与SHA见字体派生记录。

Pokémon相关美术权利归原权利人（Nintendo/Game Freak等）；MOD作品权利归作者。此应用用途为非商业个人运行；本素材仓库本身公开。注明来源及非商业用途不等于取得开放再分发许可，许可状态NOASSERTION；不附加MIT等虚假美术许可。


Exact scene provenance: `references/kanto-h4/scene-provenance--f60cf2bb069d.json` at the asset commit. Final normalized runtime index: `references/kanto-h4/runtime-assets-final--8256d4c4320d.json` in this supplemental publication; its row commit fields remain the original asset commit.

## Files in this directory

### batt_bg02a--02302480b542.glb

```json
{
  "key": "battle3d.converted/batt_bg02a.glb",
  "file": "batt_bg02a--02302480b542.glb",
  "sha256": "02302480b542b94db6876dd514428bf5955bc95d30a7ee9d3a0615abc95f0202",
  "bytes": 129324,
  "mime": "model/gltf-binary",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "converted/batt_bg02a.glb",
    "upstreamInputSha256": "02302480b542b94db6876dd514428bf5955bc95d30a7ee9d3a0615abc95f0202",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_brush02a--5ae6de4ac5eb.png

```json
{
  "key": "battle3d.converted/batt_brush02a.png",
  "file": "batt_brush02a--5ae6de4ac5eb.png",
  "sha256": "5ae6de4ac5ebb58d269b52b4ea764ed3e3c2a53448d5694a2a96de84b8bec5fd",
  "bytes": 4879,
  "mime": "image/png",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "converted/batt_brush02a.png",
    "upstreamInputSha256": "5ae6de4ac5ebb58d269b52b4ea764ed3e3c2a53448d5694a2a96de84b8bec5fd",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_brush02b--a2886c635b5e.png

```json
{
  "key": "battle3d.converted/batt_brush02b.png",
  "file": "batt_brush02b--a2886c635b5e.png",
  "sha256": "a2886c635b5e2a4c50b4148a761168280e4c0546591f0b8cf5d70e74e342f1d6",
  "bytes": 3458,
  "mime": "image/png",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "converted/batt_brush02b.png",
    "upstreamInputSha256": "a2886c635b5e2a4c50b4148a761168280e4c0546591f0b8cf5d70e74e342f1d6",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_brush02c--f2a9cc48d94f.png

```json
{
  "key": "battle3d.converted/batt_brush02c.png",
  "file": "batt_brush02c--f2a9cc48d94f.png",
  "sha256": "f2a9cc48d94fb737caa9f8d05d3a5831ceb2d8f102b8611829781c364c63039f",
  "bytes": 4959,
  "mime": "image/png",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "converted/batt_brush02c.png",
    "upstreamInputSha256": "f2a9cc48d94fb737caa9f8d05d3a5831ceb2d8f102b8611829781c364c63039f",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_brush02d--1906d400d2c6.png

```json
{
  "key": "battle3d.converted/batt_brush02d.png",
  "file": "batt_brush02d--1906d400d2c6.png",
  "sha256": "1906d400d2c612ea3d1fb6be0f8ab487c576ab3a44e00f153e504bf8a8ac8b07",
  "bytes": 4011,
  "mime": "image/png",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "converted/batt_brush02d.png",
    "upstreamInputSha256": "1906d400d2c612ea3d1fb6be0f8ab487c576ab3a44e00f153e504bf8a8ac8b07",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_field02a--ef63addce494.png

```json
{
  "key": "battle3d.converted/batt_field02a.png",
  "file": "batt_field02a--ef63addce494.png",
  "sha256": "ef63addce4948987d6a818101cefd7c9e3b27dd6e40328b2b6712301d48b2470",
  "bytes": 2669,
  "mime": "image/png",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "converted/batt_field02a.png",
    "upstreamInputSha256": "ef63addce4948987d6a818101cefd7c9e3b27dd6e40328b2b6712301d48b2470",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_sky02a--fcbbe0728925.png

```json
{
  "key": "battle3d.converted/batt_sky02a.png",
  "file": "batt_sky02a--fcbbe0728925.png",
  "sha256": "fcbbe0728925dfbe9c839a1dff67483dbb8ad4835e764ce7facbd0a85ee416ef",
  "bytes": 1574,
  "mime": "image/png",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "converted/batt_sky02a.png",
    "upstreamInputSha256": "fcbbe0728925dfbe9c839a1dff67483dbb8ad4835e764ce7facbd0a85ee416ef",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_stage02a--a83bec49c5b3.glb

```json
{
  "key": "battle3d.converted/batt_stage02a.glb",
  "file": "batt_stage02a--a83bec49c5b3.glb",
  "sha256": "a83bec49c5b3af00a481b56404bedc4d7edd70af835a4eb6af8991832a1a28e6",
  "bytes": 7320,
  "mime": "model/gltf-binary",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "converted/batt_stage02a.glb",
    "upstreamInputSha256": "a83bec49c5b3af00a481b56404bedc4d7edd70af835a4eb6af8991832a1a28e6",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_stage02a--96ce9168603f.png

```json
{
  "key": "battle3d.converted/batt_stage02a.png",
  "file": "batt_stage02a--96ce9168603f.png",
  "sha256": "96ce9168603f3066c32d5796ba93027fe51eb2bb0f38d386395e453fa79b41c1",
  "bytes": 711,
  "mime": "image/png",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "converted/batt_stage02a.png",
    "upstreamInputSha256": "96ce9168603f3066c32d5796ba93027fe51eb2bb0f38d386395e453fa79b41c1",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

