# H4 sources — battle/scenes/bw-3d/night-final

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

### batt_bg02d--09b8afd90cea.glb

```json
{
  "key": "battle3d.night-final/batt_bg02d.glb",
  "file": "batt_bg02d--09b8afd90cea.glb",
  "sha256": "09b8afd90ceaacfc97c70fbc4e5912309bc0e564f1fd45108a70403bf416f9e4",
  "bytes": 129344,
  "mime": "model/gltf-binary",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "night-final/batt_bg02d.glb",
    "upstreamInputSha256": "09b8afd90ceaacfc97c70fbc4e5912309bc0e564f1fd45108a70403bf416f9e4",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_brush02m--e5f7b6b567ff.png

```json
{
  "key": "battle3d.night-final/batt_brush02m.png",
  "file": "batt_brush02m--e5f7b6b567ff.png",
  "sha256": "e5f7b6b567ff11e12f7462fb5bf99550a2997ddcc86721f42314ee83017c9203",
  "bytes": 3854,
  "mime": "image/png",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "night-final/batt_brush02m.png",
    "upstreamInputSha256": "e5f7b6b567ff11e12f7462fb5bf99550a2997ddcc86721f42314ee83017c9203",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_brush02n--40300dbbb814.png

```json
{
  "key": "battle3d.night-final/batt_brush02n.png",
  "file": "batt_brush02n--40300dbbb814.png",
  "sha256": "40300dbbb814a41243603950f40a84844c3568b9b6a33e4224a3483a7591d2f0",
  "bytes": 4004,
  "mime": "image/png",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "night-final/batt_brush02n.png",
    "upstreamInputSha256": "40300dbbb814a41243603950f40a84844c3568b9b6a33e4224a3483a7591d2f0",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_brush02o--3970805ac522.png

```json
{
  "key": "battle3d.night-final/batt_brush02o.png",
  "file": "batt_brush02o--3970805ac522.png",
  "sha256": "3970805ac522a5a2ca8e0372ffd6ea6765c2fc02675845de71a42ea1e3f427ec",
  "bytes": 4983,
  "mime": "image/png",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "night-final/batt_brush02o.png",
    "upstreamInputSha256": "3970805ac522a5a2ca8e0372ffd6ea6765c2fc02675845de71a42ea1e3f427ec",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_brush02p--8fd3944e354d.png

```json
{
  "key": "battle3d.night-final/batt_brush02p.png",
  "file": "batt_brush02p--8fd3944e354d.png",
  "sha256": "8fd3944e354db2a96259e0bcad18c6b7882cd61491883dc0f354f899e1d5698f",
  "bytes": 4279,
  "mime": "image/png",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "night-final/batt_brush02p.png",
    "upstreamInputSha256": "8fd3944e354db2a96259e0bcad18c6b7882cd61491883dc0f354f899e1d5698f",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_field02d--25d9a2361d5c.png

```json
{
  "key": "battle3d.night-final/batt_field02d.png",
  "file": "batt_field02d--25d9a2361d5c.png",
  "sha256": "25d9a2361d5ca4d5d41f31532adf4b69c8cf10c6666a1f03490761911572b452",
  "bytes": 2130,
  "mime": "image/png",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "night-final/batt_field02d.png",
    "upstreamInputSha256": "25d9a2361d5ca4d5d41f31532adf4b69c8cf10c6666a1f03490761911572b452",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

### batt_sky02d--db8939310972.png

```json
{
  "key": "battle3d.night-final/batt_sky02d.png",
  "file": "batt_sky02d--db8939310972.png",
  "sha256": "db8939310972c43d066af967c22ced7307856cb3d3d600724e92aa2dbf879d72",
  "bytes": 1872,
  "mime": "image/png",
  "source": "Original decoded ROM scene; full member hashes/apicula provenance in battle3d/source.json",
  "derivation": {
    "romMemberContainer": "/a/0/1/1",
    "apiculaCommit": "3d4e91e14045392a49c89e86dab8cb936225588c",
    "inputScenePath": "night-final/batt_sky02d.png",
    "upstreamInputSha256": "db8939310972c43d066af967c22ced7307856cb3d3d600724e92aa2dbf879d72",
    "provenanceFile": "references/kanto-h4/scene-provenance--f60cf2bb069d.json",
    "note": "Input byte SHA is provenance, not a claim that final converted/re-encoded output bytes are identical. Output SHA is listed above."
  }
}
```

