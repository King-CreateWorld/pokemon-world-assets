# H4 sources — battle/scenes/bw-3d/indoor

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

### batt_bg05--8bf98b3c2b17.glb

```json
{
  "key": "battle3d.indoor/batt_bg05.glb",
  "file": "batt_bg05--8bf98b3c2b17.glb",
  "sha256": "8bf98b3c2b1744d01711d1c0c06db411bfeae95c0e6f240283df4794b4cb9bde",
  "bytes": 153948,
  "mime": "model/gltf-binary",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "indoor/batt_bg05.glb",
    "upstreamInputSha256": "8bf98b3c2b1744d01711d1c0c06db411bfeae95c0e6f240283df4794b4cb9bde",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_brush05a--bf726c07c68f.png

```json
{
  "key": "battle3d.indoor/batt_brush05a.png",
  "file": "batt_brush05a--bf726c07c68f.png",
  "sha256": "bf726c07c68f8d72e0616e55c3a3f7e4f92e1062b8cd831b878f33e3b8ca57c4",
  "bytes": 3890,
  "mime": "image/png",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "indoor/batt_brush05a.png",
    "upstreamInputSha256": "bf726c07c68f8d72e0616e55c3a3f7e4f92e1062b8cd831b878f33e3b8ca57c4",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_brush05b--9db4ae3380cd.png

```json
{
  "key": "battle3d.indoor/batt_brush05b.png",
  "file": "batt_brush05b--9db4ae3380cd.png",
  "sha256": "9db4ae3380cdd846537639fb5d52735ddb488e795527ad7e49f0ba21b886292a",
  "bytes": 7381,
  "mime": "image/png",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "indoor/batt_brush05b.png",
    "upstreamInputSha256": "9db4ae3380cdd846537639fb5d52735ddb488e795527ad7e49f0ba21b886292a",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_brush05c--80b4bd870806.png

```json
{
  "key": "battle3d.indoor/batt_brush05c.png",
  "file": "batt_brush05c--80b4bd870806.png",
  "sha256": "80b4bd870806d798d5d32b8d9af2d0975e3d145c56c8bb8348ba9ad68cfa6276",
  "bytes": 6707,
  "mime": "image/png",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "indoor/batt_brush05c.png",
    "upstreamInputSha256": "80b4bd870806d798d5d32b8d9af2d0975e3d145c56c8bb8348ba9ad68cfa6276",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_field05--219963c2f3b6.png

```json
{
  "key": "battle3d.indoor/batt_field05.png",
  "file": "batt_field05--219963c2f3b6.png",
  "sha256": "219963c2f3b643dfd842d87452dd591ca96a3aa6713e0f9a794d780c53397dd6",
  "bytes": 2428,
  "mime": "image/png",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "indoor/batt_field05.png",
    "upstreamInputSha256": "219963c2f3b643dfd842d87452dd591ca96a3aa6713e0f9a794d780c53397dd6",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_sky05--f3a52e56411d.png

```json
{
  "key": "battle3d.indoor/batt_sky05.png",
  "file": "batt_sky05--f3a52e56411d.png",
  "sha256": "f3a52e56411d47a11f876efafcefd862c25bd9a878dfc4cad80f8e31f6796248",
  "bytes": 3849,
  "mime": "image/png",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "indoor/batt_sky05.png",
    "upstreamInputSha256": "f3a52e56411d47a11f876efafcefd862c25bd9a878dfc4cad80f8e31f6796248",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_stage04--f45fcba9c154.glb

```json
{
  "key": "battle3d.indoor/batt_stage04.glb",
  "file": "batt_stage04--f45fcba9c154.glb",
  "sha256": "f45fcba9c154acb9125b0d872b91cb50300c07c773b2371beb6b94ec7484f45b",
  "bytes": 5848,
  "mime": "model/gltf-binary",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "indoor/batt_stage04.glb",
    "upstreamInputSha256": "f45fcba9c154acb9125b0d872b91cb50300c07c773b2371beb6b94ec7484f45b",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_stage04--c3709762155b.png

```json
{
  "key": "battle3d.indoor/batt_stage04.png",
  "file": "batt_stage04--c3709762155b.png",
  "sha256": "c3709762155b7cc3b3352aab14a222dcf45eff6fab1cd5255b87aba89ca34d56",
  "bytes": 797,
  "mime": "image/png",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "indoor/batt_stage04.png",
    "upstreamInputSha256": "c3709762155b7cc3b3352aab14a222dcf45eff6fab1cd5255b87aba89ca34d56",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

