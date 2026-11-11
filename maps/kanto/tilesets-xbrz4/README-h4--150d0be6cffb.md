# H4 sources — maps/kanto/tilesets-xbrz4

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

### tileset.ts-2d4b04-2d4b1c.bottom.x4--c1da5fda1489.png

```json
{
  "key": "tileset.ts-2d4b04-2d4b1c.bottom.x4",
  "file": "tileset.ts-2d4b04-2d4b1c.bottom.x4--c1da5fda1489.png",
  "sha256": "c1da5fda14895a720b8581d0585e8169986a5dcd814d26bcdf1304676fc018e6",
  "bytes": 126944,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "53b19595ef8b4c464f7ca7375d1a549c00b9f57c36caf566351c4db47cbbdffa",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 2304,
      "height": 360,
      "frameWidth": 72,
      "frameHeight": 72,
      "frameCount": 160,
      "frameMap": null,
      "footAnchor": {
        "x": 36,
        "y": 71
      },
      "alphaBounds": {
        "x": 0,
        "y": 0,
        "width": 72,
        "height": 72
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        }
      ],
      "tileSize": 64,
      "margin": 4,
      "spacing": 8,
      "columns": 32,
      "logicalFrames": 129
    },
    "fallback": {
      "sourceScale": 1,
      "width": 576,
      "height": 90,
      "frameWidth": 18,
      "frameHeight": 18,
      "frameCount": 160,
      "frameMap": null,
      "footAnchor": {
        "x": 9,
        "y": 17
      },
      "alphaBounds": {
        "x": 0,
        "y": 0,
        "width": 18,
        "height": 18
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        }
      ],
      "tileSize": 16,
      "margin": 1,
      "spacing": 2
    }
  }
}
```

### tileset.ts-2d4b04-2d4b1c.top.x4--0d923ceb4187.png

```json
{
  "key": "tileset.ts-2d4b04-2d4b1c.top.x4",
  "file": "tileset.ts-2d4b04-2d4b1c.top.x4--0d923ceb4187.png",
  "sha256": "0d923ceb4187802f6ff856478c7ad2b59e661824f196517496b560d96e94e316",
  "bytes": 29887,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "9693cdb33649bf2240449803173514bbe3334cb50f8322da979b2b8ebc5ddb6a",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 2304,
      "height": 144,
      "frameWidth": 72,
      "frameHeight": 72,
      "frameCount": 64,
      "frameMap": null,
      "footAnchor": {
        "x": 36,
        "y": 71
      },
      "alphaBounds": {
        "x": 0,
        "y": 0,
        "width": 72,
        "height": 72
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 36,
          "width": 72,
          "height": 36
        },
        {
          "x": 0,
          "y": 36,
          "width": 72,
          "height": 36
        },
        {
          "x": 0,
          "y": 36,
          "width": 72,
          "height": 36
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 12,
          "y": 44,
          "width": 48,
          "height": 28
        },
        {
          "x": 8,
          "y": 0,
          "width": 64,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 36,
          "width": 72,
          "height": 36
        },
        {
          "x": 0,
          "y": 36,
          "width": 72,
          "height": 36
        },
        {
          "x": 0,
          "y": 36,
          "width": 72,
          "height": 36
        },
        {
          "x": 0,
          "y": 36,
          "width": 72,
          "height": 36
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 20,
          "y": 16,
          "width": 52,
          "height": 56
        },
        {
          "x": 0,
          "y": 16,
          "width": 52,
          "height": 56
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        }
      ],
      "tileSize": 64,
      "margin": 4,
      "spacing": 8,
      "columns": 32,
      "logicalFrames": 35
    },
    "fallback": {
      "sourceScale": 1,
      "width": 576,
      "height": 36,
      "frameWidth": 18,
      "frameHeight": 18,
      "frameCount": 64,
      "frameMap": null,
      "footAnchor": {
        "x": 9,
        "y": 17
      },
      "alphaBounds": {
        "x": 0,
        "y": 0,
        "width": 18,
        "height": 18
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 9,
          "width": 18,
          "height": 9
        },
        {
          "x": 0,
          "y": 9,
          "width": 18,
          "height": 9
        },
        {
          "x": 0,
          "y": 9,
          "width": 18,
          "height": 9
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 3,
          "y": 11,
          "width": 12,
          "height": 7
        },
        {
          "x": 2,
          "y": 0,
          "width": 16,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 9,
          "width": 18,
          "height": 9
        },
        {
          "x": 0,
          "y": 9,
          "width": 18,
          "height": 9
        },
        {
          "x": 0,
          "y": 9,
          "width": 18,
          "height": 9
        },
        {
          "x": 0,
          "y": 9,
          "width": 18,
          "height": 9
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 5,
          "y": 4,
          "width": 13,
          "height": 14
        },
        {
          "x": 0,
          "y": 4,
          "width": 13,
          "height": 14
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        }
      ],
      "tileSize": 16,
      "margin": 1,
      "spacing": 2
    }
  }
}
```

### tileset.ts-2d4c24-2d4ce4.bottom.x4--80549773a5e9.png

```json
{
  "key": "tileset.ts-2d4c24-2d4ce4.bottom.x4",
  "file": "tileset.ts-2d4c24-2d4ce4.bottom.x4--80549773a5e9.png",
  "sha256": "80549773a5e9206d2d0466bd4080e9291240433401475d15ab9c589a499e5e61",
  "bytes": 64484,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "0283d0cf73085ccdd09169f453dc64f9dacf2e559f771ba6afa8fb8b0c572e02",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 2304,
      "height": 216,
      "frameWidth": 72,
      "frameHeight": 72,
      "frameCount": 96,
      "frameMap": null,
      "footAnchor": {
        "x": 36,
        "y": 71
      },
      "alphaBounds": {
        "x": 0,
        "y": 0,
        "width": 72,
        "height": 72
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        }
      ],
      "tileSize": 64,
      "margin": 4,
      "spacing": 8,
      "columns": 32,
      "logicalFrames": 89
    },
    "fallback": {
      "sourceScale": 1,
      "width": 576,
      "height": 54,
      "frameWidth": 18,
      "frameHeight": 18,
      "frameCount": 96,
      "frameMap": null,
      "footAnchor": {
        "x": 9,
        "y": 17
      },
      "alphaBounds": {
        "x": 0,
        "y": 0,
        "width": 18,
        "height": 18
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        }
      ],
      "tileSize": 16,
      "margin": 1,
      "spacing": 2
    }
  }
}
```

### tileset.ts-2d4c24-2d4ce4.top.x4--8e485329935a.png

```json
{
  "key": "tileset.ts-2d4c24-2d4ce4.top.x4",
  "file": "tileset.ts-2d4c24-2d4ce4.top.x4--8e485329935a.png",
  "sha256": "8e485329935a32e0288b9f805a6079d7950d231b0d9c4013401af13b23a257c8",
  "bytes": 7457,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "3127c39d503b373b133f7917485677dab6187d477cec76ab131f5b36f340314b",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 2304,
      "height": 72,
      "frameWidth": 72,
      "frameHeight": 72,
      "frameCount": 32,
      "frameMap": null,
      "footAnchor": {
        "x": 36,
        "y": 71
      },
      "alphaBounds": {
        "x": 0,
        "y": 0,
        "width": 72,
        "height": 72
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 20,
          "width": 72,
          "height": 52
        },
        {
          "x": 0,
          "y": 20,
          "width": 72,
          "height": 52
        },
        {
          "x": 0,
          "y": 56,
          "width": 72,
          "height": 16
        },
        {
          "x": 52,
          "y": 36,
          "width": 20,
          "height": 36
        },
        {
          "x": 0,
          "y": 32,
          "width": 72,
          "height": 40
        },
        {
          "x": 0,
          "y": 36,
          "width": 20,
          "height": 36
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        }
      ],
      "tileSize": 64,
      "margin": 4,
      "spacing": 8,
      "columns": 32,
      "logicalFrames": 7
    },
    "fallback": {
      "sourceScale": 1,
      "width": 576,
      "height": 18,
      "frameWidth": 18,
      "frameHeight": 18,
      "frameCount": 32,
      "frameMap": null,
      "footAnchor": {
        "x": 9,
        "y": 17
      },
      "alphaBounds": {
        "x": 0,
        "y": 0,
        "width": 18,
        "height": 18
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 5,
          "width": 18,
          "height": 13
        },
        {
          "x": 0,
          "y": 5,
          "width": 18,
          "height": 13
        },
        {
          "x": 0,
          "y": 14,
          "width": 18,
          "height": 4
        },
        {
          "x": 13,
          "y": 9,
          "width": 5,
          "height": 9
        },
        {
          "x": 0,
          "y": 8,
          "width": 18,
          "height": 10
        },
        {
          "x": 0,
          "y": 9,
          "width": 5,
          "height": 9
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        }
      ],
      "tileSize": 16,
      "margin": 1,
      "spacing": 2
    }
  }
}
```

### tileset.ts-2d4c24-2d4ef4.bottom.x4--54eb2065b107.png

```json
{
  "key": "tileset.ts-2d4c24-2d4ef4.bottom.x4",
  "file": "tileset.ts-2d4c24-2d4ef4.bottom.x4--54eb2065b107.png",
  "sha256": "54eb2065b107e7529d72abb9b45f398e990ef161f2cc55929d757fbb9f082ca0",
  "bytes": 37437,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "9a3be52598689e064d5f54d720b10862a4586ac0e8ae42a22891d299af29ee08",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 2304,
      "height": 144,
      "frameWidth": 72,
      "frameHeight": 72,
      "frameCount": 64,
      "frameMap": null,
      "footAnchor": {
        "x": 36,
        "y": 71
      },
      "alphaBounds": {
        "x": 0,
        "y": 0,
        "width": 72,
        "height": 72
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        }
      ],
      "tileSize": 64,
      "margin": 4,
      "spacing": 8,
      "columns": 32,
      "logicalFrames": 54
    },
    "fallback": {
      "sourceScale": 1,
      "width": 576,
      "height": 36,
      "frameWidth": 18,
      "frameHeight": 18,
      "frameCount": 64,
      "frameMap": null,
      "footAnchor": {
        "x": 9,
        "y": 17
      },
      "alphaBounds": {
        "x": 0,
        "y": 0,
        "width": 18,
        "height": 18
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        }
      ],
      "tileSize": 16,
      "margin": 1,
      "spacing": 2
    }
  }
}
```

### tileset.ts-2d4c24-2d4ef4.top.x4--5e57ccd509fa.png

```json
{
  "key": "tileset.ts-2d4c24-2d4ef4.top.x4",
  "file": "tileset.ts-2d4c24-2d4ef4.top.x4--5e57ccd509fa.png",
  "sha256": "5e57ccd509fa3dd5323a2ddd30830d6884f70dcc8f8a0c8acb8dbca9d6dc674c",
  "bytes": 6435,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "359a95ec49e43589e3dbaad63da9825fd612250e8f202739ae3750fe676262fa",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 2304,
      "height": 72,
      "frameWidth": 72,
      "frameHeight": 72,
      "frameCount": 32,
      "frameMap": null,
      "footAnchor": {
        "x": 36,
        "y": 71
      },
      "alphaBounds": {
        "x": 0,
        "y": 20,
        "width": 72,
        "height": 52
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 20,
          "width": 72,
          "height": 52
        },
        {
          "x": 0,
          "y": 20,
          "width": 72,
          "height": 52
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        }
      ],
      "tileSize": 64,
      "margin": 4,
      "spacing": 8,
      "columns": 32,
      "logicalFrames": 3
    },
    "fallback": {
      "sourceScale": 1,
      "width": 576,
      "height": 18,
      "frameWidth": 18,
      "frameHeight": 18,
      "frameCount": 32,
      "frameMap": null,
      "footAnchor": {
        "x": 9,
        "y": 17
      },
      "alphaBounds": {
        "x": 0,
        "y": 5,
        "width": 18,
        "height": 13
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 5,
          "width": 18,
          "height": 13
        },
        {
          "x": 0,
          "y": 5,
          "width": 18,
          "height": 13
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        }
      ],
      "tileSize": 16,
      "margin": 1,
      "spacing": 2
    }
  }
}
```

### tileset.ts-2d4c24-2d4cfc.bottom.x4--efcd59e9e08e.png

```json
{
  "key": "tileset.ts-2d4c24-2d4cfc.bottom.x4",
  "file": "tileset.ts-2d4c24-2d4cfc.bottom.x4--efcd59e9e08e.png",
  "sha256": "efcd59e9e08ec881f90d42a614d77a16b1f9b46e2fc58a59fc50464d2ab87e68",
  "bytes": 53798,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "b397f1562e000672080c06925c2d040c8722622d8d866db9482ac5fff94bd173",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 2304,
      "height": 144,
      "frameWidth": 72,
      "frameHeight": 72,
      "frameCount": 64,
      "frameMap": null,
      "footAnchor": {
        "x": 36,
        "y": 71
      },
      "alphaBounds": {
        "x": 0,
        "y": 0,
        "width": 72,
        "height": 72
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        }
      ],
      "tileSize": 64,
      "margin": 4,
      "spacing": 8,
      "columns": 32,
      "logicalFrames": 55
    },
    "fallback": {
      "sourceScale": 1,
      "width": 576,
      "height": 36,
      "frameWidth": 18,
      "frameHeight": 18,
      "frameCount": 64,
      "frameMap": null,
      "footAnchor": {
        "x": 9,
        "y": 17
      },
      "alphaBounds": {
        "x": 0,
        "y": 0,
        "width": 18,
        "height": 18
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        }
      ],
      "tileSize": 16,
      "margin": 1,
      "spacing": 2
    }
  }
}
```

### tileset.ts-2d4c24-2d4cfc.top.x4--7690e97f8379.png

```json
{
  "key": "tileset.ts-2d4c24-2d4cfc.top.x4",
  "file": "tileset.ts-2d4c24-2d4cfc.top.x4--7690e97f8379.png",
  "sha256": "7690e97f83791da059b87792dc4b4a11ed5985d139bdbabbde9d0611bfe4c907",
  "bytes": 7826,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "01d3e0bb45daae3665775b39ec690dc1d1873a741b560bfe6179e3f6c2660dfb",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 2304,
      "height": 72,
      "frameWidth": 72,
      "frameHeight": 72,
      "frameCount": 32,
      "frameMap": null,
      "footAnchor": {
        "x": 44,
        "y": 71
      },
      "alphaBounds": {
        "x": 16,
        "y": 40,
        "width": 56,
        "height": 32
      },
      "frameBounds": [
        {
          "x": 16,
          "y": 40,
          "width": 56,
          "height": 32
        },
        {
          "x": 0,
          "y": 40,
          "width": 56,
          "height": 32
        },
        {
          "x": 0,
          "y": 40,
          "width": 72,
          "height": 32
        },
        {
          "x": 0,
          "y": 40,
          "width": 72,
          "height": 32
        },
        {
          "x": 0,
          "y": 40,
          "width": 72,
          "height": 32
        },
        {
          "x": 0,
          "y": 20,
          "width": 72,
          "height": 52
        },
        {
          "x": 0,
          "y": 20,
          "width": 72,
          "height": 52
        },
        {
          "x": 0,
          "y": 0,
          "width": 72,
          "height": 72
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        }
      ],
      "tileSize": 64,
      "margin": 4,
      "spacing": 8,
      "columns": 32,
      "logicalFrames": 8
    },
    "fallback": {
      "sourceScale": 1,
      "width": 576,
      "height": 18,
      "frameWidth": 18,
      "frameHeight": 18,
      "frameCount": 32,
      "frameMap": null,
      "footAnchor": {
        "x": 11,
        "y": 17
      },
      "alphaBounds": {
        "x": 4,
        "y": 10,
        "width": 14,
        "height": 8
      },
      "frameBounds": [
        {
          "x": 4,
          "y": 10,
          "width": 14,
          "height": 8
        },
        {
          "x": 0,
          "y": 10,
          "width": 14,
          "height": 8
        },
        {
          "x": 0,
          "y": 10,
          "width": 18,
          "height": 8
        },
        {
          "x": 0,
          "y": 10,
          "width": 18,
          "height": 8
        },
        {
          "x": 0,
          "y": 10,
          "width": 18,
          "height": 8
        },
        {
          "x": 0,
          "y": 5,
          "width": 18,
          "height": 13
        },
        {
          "x": 0,
          "y": 5,
          "width": 18,
          "height": 13
        },
        {
          "x": 0,
          "y": 0,
          "width": 18,
          "height": 18
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        }
      ],
      "tileSize": 16,
      "margin": 1,
      "spacing": 2
    }
  }
}
```

