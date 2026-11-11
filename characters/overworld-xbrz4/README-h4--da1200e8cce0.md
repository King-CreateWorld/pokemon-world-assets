# H4 sources — characters/overworld-xbrz4

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

### sprite.woman_1.x4--619cc8a31d06.png

```json
{
  "key": "sprite.woman_1.x4",
  "file": "sprite.woman_1.x4--619cc8a31d06.png",
  "sha256": "619cc8a31d0648e0d4fbfb09ea952ae7ecd7ee7638b5a4ef7422d629ab4ddadd",
  "bytes": 20357,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "f24494ff924f5593d420cef3136bdc7ca75860866efd86332f2c29ed02d360bc",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 640,
      "height": 128,
      "frameWidth": 64,
      "frameHeight": 128,
      "frameCount": 10,
      "frameMap": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "footAnchor": {
        "x": 32,
        "y": 123
      },
      "alphaBounds": {
        "x": 0,
        "y": 48,
        "width": 64,
        "height": 76
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 48,
          "width": 64,
          "height": 76
        },
        {
          "x": 0,
          "y": 48,
          "width": 64,
          "height": 76
        },
        {
          "x": 8,
          "y": 48,
          "width": 52,
          "height": 76
        },
        {
          "x": 0,
          "y": 52,
          "width": 64,
          "height": 76
        },
        {
          "x": 0,
          "y": 52,
          "width": 64,
          "height": 76
        },
        {
          "x": 0,
          "y": 52,
          "width": 64,
          "height": 76
        },
        {
          "x": 0,
          "y": 52,
          "width": 64,
          "height": 76
        },
        {
          "x": 8,
          "y": 52,
          "width": 52,
          "height": 72
        },
        {
          "x": 8,
          "y": 52,
          "width": 52,
          "height": 72
        },
        {
          "x": 0,
          "y": 44,
          "width": 64,
          "height": 80
        }
      ],
      "logicalFrames": 10
    },
    "fallback": {
      "sourceScale": 1,
      "width": 160,
      "height": 32,
      "frameWidth": 16,
      "frameHeight": 32,
      "frameCount": 10,
      "frameMap": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "footAnchor": {
        "x": 8,
        "y": 30
      },
      "alphaBounds": {
        "x": 0,
        "y": 12,
        "width": 16,
        "height": 19
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 12,
          "width": 16,
          "height": 19
        },
        {
          "x": 0,
          "y": 12,
          "width": 16,
          "height": 19
        },
        {
          "x": 2,
          "y": 12,
          "width": 13,
          "height": 19
        },
        {
          "x": 0,
          "y": 13,
          "width": 16,
          "height": 19
        },
        {
          "x": 0,
          "y": 13,
          "width": 16,
          "height": 19
        },
        {
          "x": 0,
          "y": 13,
          "width": 16,
          "height": 19
        },
        {
          "x": 0,
          "y": 13,
          "width": 16,
          "height": 19
        },
        {
          "x": 2,
          "y": 13,
          "width": 13,
          "height": 18
        },
        {
          "x": 2,
          "y": 13,
          "width": 13,
          "height": 18
        },
        {
          "x": 0,
          "y": 11,
          "width": 16,
          "height": 20
        }
      ]
    }
  }
}
```

### sprite.fat_man.x4--770538c9d40d.png

```json
{
  "key": "sprite.fat_man.x4",
  "file": "sprite.fat_man.x4--770538c9d40d.png",
  "sha256": "770538c9d40d318eeaab6f4320f0c7f6956218ecc567f1dfa475dab0156c6026",
  "bytes": 19277,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "286e1459b1b007196e5555760e5d53684c5d3be3e4f001e672bb16e5e22cc281",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 576,
      "height": 128,
      "frameWidth": 64,
      "frameHeight": 128,
      "frameCount": 9,
      "frameMap": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      "footAnchor": {
        "x": 32,
        "y": 123
      },
      "alphaBounds": {
        "x": 0,
        "y": 44,
        "width": 64,
        "height": 80
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 44,
          "width": 64,
          "height": 80
        },
        {
          "x": 0,
          "y": 44,
          "width": 64,
          "height": 80
        },
        {
          "x": 8,
          "y": 44,
          "width": 48,
          "height": 80
        },
        {
          "x": 0,
          "y": 48,
          "width": 60,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 60,
          "height": 80
        },
        {
          "x": 0,
          "y": 48,
          "width": 64,
          "height": 80
        },
        {
          "x": 0,
          "y": 48,
          "width": 64,
          "height": 80
        },
        {
          "x": 8,
          "y": 48,
          "width": 48,
          "height": 76
        },
        {
          "x": 4,
          "y": 48,
          "width": 52,
          "height": 76
        }
      ],
      "logicalFrames": 9
    },
    "fallback": {
      "sourceScale": 1,
      "width": 144,
      "height": 32,
      "frameWidth": 16,
      "frameHeight": 32,
      "frameCount": 9,
      "frameMap": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      "footAnchor": {
        "x": 8,
        "y": 30
      },
      "alphaBounds": {
        "x": 0,
        "y": 11,
        "width": 16,
        "height": 20
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 11,
          "width": 16,
          "height": 20
        },
        {
          "x": 0,
          "y": 11,
          "width": 16,
          "height": 20
        },
        {
          "x": 2,
          "y": 11,
          "width": 12,
          "height": 20
        },
        {
          "x": 0,
          "y": 12,
          "width": 15,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 15,
          "height": 20
        },
        {
          "x": 0,
          "y": 12,
          "width": 16,
          "height": 20
        },
        {
          "x": 0,
          "y": 12,
          "width": 16,
          "height": 20
        },
        {
          "x": 2,
          "y": 12,
          "width": 12,
          "height": 19
        },
        {
          "x": 1,
          "y": 12,
          "width": 13,
          "height": 19
        }
      ]
    }
  }
}
```

### sprite.prof_oak.x4--3d7da451a2eb.png

```json
{
  "key": "sprite.prof_oak.x4",
  "file": "sprite.prof_oak.x4--3d7da451a2eb.png",
  "sha256": "3d7da451a2eb5f783a231673310bb715f72d935bc7436a2cde649712b9f07c71",
  "bytes": 18195,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "7e67d40ffaae5578cbf71ecca8fed364025e7eba9900fee075beffbf1eb6f2ab",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 576,
      "height": 128,
      "frameWidth": 64,
      "frameHeight": 128,
      "frameCount": 9,
      "frameMap": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      "footAnchor": {
        "x": 32,
        "y": 123
      },
      "alphaBounds": {
        "x": 4,
        "y": 44,
        "width": 56,
        "height": 80
      },
      "frameBounds": [
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 44,
          "width": 52,
          "height": 80
        },
        {
          "x": 0,
          "y": 48,
          "width": 60,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 60,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 52,
          "height": 76
        },
        {
          "x": 4,
          "y": 48,
          "width": 52,
          "height": 76
        }
      ],
      "logicalFrames": 9
    },
    "fallback": {
      "sourceScale": 1,
      "width": 144,
      "height": 32,
      "frameWidth": 16,
      "frameHeight": 32,
      "frameCount": 9,
      "frameMap": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      "footAnchor": {
        "x": 8,
        "y": 30
      },
      "alphaBounds": {
        "x": 1,
        "y": 11,
        "width": 14,
        "height": 20
      },
      "frameBounds": [
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 11,
          "width": 13,
          "height": 20
        },
        {
          "x": 0,
          "y": 12,
          "width": 15,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 15,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 13,
          "height": 19
        },
        {
          "x": 1,
          "y": 12,
          "width": 13,
          "height": 19
        }
      ]
    }
  }
}
```

### sprite.clerk.x4--2409240f5346.png

```json
{
  "key": "sprite.clerk.x4",
  "file": "sprite.clerk.x4--2409240f5346.png",
  "sha256": "2409240f5346c55dde832fcc3f63e0d57307067ba84bd078c1b9e20ca347a752",
  "bytes": 18974,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "cad0202f57bfdece316d1a36195e07b2e7e73b4a5d7f8904a66d2aee2b0ccbc2",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 576,
      "height": 128,
      "frameWidth": 64,
      "frameHeight": 128,
      "frameCount": 9,
      "frameMap": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      "footAnchor": {
        "x": 32,
        "y": 123
      },
      "alphaBounds": {
        "x": 4,
        "y": 44,
        "width": 56,
        "height": 80
      },
      "frameBounds": [
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 80
        },
        {
          "x": 8,
          "y": 44,
          "width": 52,
          "height": 80
        },
        {
          "x": 0,
          "y": 48,
          "width": 60,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 60,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 8,
          "y": 48,
          "width": 52,
          "height": 76
        },
        {
          "x": 8,
          "y": 48,
          "width": 52,
          "height": 76
        }
      ],
      "logicalFrames": 9
    },
    "fallback": {
      "sourceScale": 1,
      "width": 144,
      "height": 32,
      "frameWidth": 16,
      "frameHeight": 32,
      "frameCount": 9,
      "frameMap": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      "footAnchor": {
        "x": 8,
        "y": 30
      },
      "alphaBounds": {
        "x": 1,
        "y": 11,
        "width": 14,
        "height": 20
      },
      "frameBounds": [
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 20
        },
        {
          "x": 2,
          "y": 11,
          "width": 13,
          "height": 20
        },
        {
          "x": 0,
          "y": 12,
          "width": 15,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 15,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 2,
          "y": 12,
          "width": 13,
          "height": 19
        },
        {
          "x": 2,
          "y": 12,
          "width": 13,
          "height": 19
        }
      ]
    }
  }
}
```

### sprite.boy.x4--6d2ca561e4cf.png

```json
{
  "key": "sprite.boy.x4",
  "file": "sprite.boy.x4--6d2ca561e4cf.png",
  "sha256": "6d2ca561e4cf101e300b01eb27e01ae7b3cf38529a2b6d365076cf18782a4abc",
  "bytes": 19815,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "e509c6e236a2371917a38f4063ef0bb42c5ed6bf317f7d6686f2e153460fba4f",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 640,
      "height": 128,
      "frameWidth": 64,
      "frameHeight": 128,
      "frameCount": 10,
      "frameMap": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "footAnchor": {
        "x": 32,
        "y": 123
      },
      "alphaBounds": {
        "x": 4,
        "y": 48,
        "width": 56,
        "height": 76
      },
      "frameBounds": [
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 76
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 76
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 76
        },
        {
          "x": 4,
          "y": 52,
          "width": 56,
          "height": 76
        },
        {
          "x": 4,
          "y": 52,
          "width": 56,
          "height": 76
        },
        {
          "x": 4,
          "y": 52,
          "width": 56,
          "height": 76
        },
        {
          "x": 4,
          "y": 52,
          "width": 56,
          "height": 76
        },
        {
          "x": 4,
          "y": 52,
          "width": 56,
          "height": 72
        },
        {
          "x": 4,
          "y": 52,
          "width": 56,
          "height": 72
        },
        {
          "x": 0,
          "y": 44,
          "width": 60,
          "height": 80
        }
      ],
      "logicalFrames": 10
    },
    "fallback": {
      "sourceScale": 1,
      "width": 160,
      "height": 32,
      "frameWidth": 16,
      "frameHeight": 32,
      "frameCount": 10,
      "frameMap": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "footAnchor": {
        "x": 8,
        "y": 30
      },
      "alphaBounds": {
        "x": 1,
        "y": 12,
        "width": 14,
        "height": 19
      },
      "frameBounds": [
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 19
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 19
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 19
        },
        {
          "x": 1,
          "y": 13,
          "width": 14,
          "height": 19
        },
        {
          "x": 1,
          "y": 13,
          "width": 14,
          "height": 19
        },
        {
          "x": 1,
          "y": 13,
          "width": 14,
          "height": 19
        },
        {
          "x": 1,
          "y": 13,
          "width": 14,
          "height": 19
        },
        {
          "x": 1,
          "y": 13,
          "width": 14,
          "height": 18
        },
        {
          "x": 1,
          "y": 13,
          "width": 14,
          "height": 18
        },
        {
          "x": 0,
          "y": 11,
          "width": 15,
          "height": 20
        }
      ]
    }
  }
}
```

### sprite.mom.x4--d2f42eb7465b.png

```json
{
  "key": "sprite.mom.x4",
  "file": "sprite.mom.x4--d2f42eb7465b.png",
  "sha256": "d2f42eb7465b3aabdd973870f963685a080a1f72469584299d77a3c99a186c35",
  "bytes": 8167,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "84798e9d93e7cd8a40856a83d3cbcdd33675d6fe90a380df0dbd4d8be92cc7e4",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 192,
      "height": 128,
      "frameWidth": 64,
      "frameHeight": 128,
      "frameCount": 3,
      "frameMap": [
        0,
        1,
        2,
        0,
        0,
        1,
        1,
        2,
        2
      ],
      "footAnchor": {
        "x": 32,
        "y": 119
      },
      "alphaBounds": {
        "x": 0,
        "y": 44,
        "width": 64,
        "height": 76
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 44,
          "width": 64,
          "height": 76
        },
        {
          "x": 0,
          "y": 44,
          "width": 64,
          "height": 76
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 76
        }
      ],
      "logicalFrames": 3
    },
    "fallback": {
      "sourceScale": 1,
      "width": 48,
      "height": 32,
      "frameWidth": 16,
      "frameHeight": 32,
      "frameCount": 3,
      "frameMap": [
        0,
        1,
        2,
        0,
        0,
        1,
        1,
        2,
        2
      ],
      "footAnchor": {
        "x": 8,
        "y": 29
      },
      "alphaBounds": {
        "x": 0,
        "y": 11,
        "width": 16,
        "height": 19
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 11,
          "width": 16,
          "height": 19
        },
        {
          "x": 0,
          "y": 11,
          "width": 16,
          "height": 19
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 19
        }
      ]
    }
  }
}
```

### sprite.daisy.x4--5d642778cc05.png

```json
{
  "key": "sprite.daisy.x4",
  "file": "sprite.daisy.x4--5d642778cc05.png",
  "sha256": "5d642778cc054eb174d32ba1353a1becac1db1c32d96552ce27c33fe23a84de3",
  "bytes": 17099,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "6163cf20284c40cab649178559461e934ac93b8b60498112b117f13097f9f31f",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 576,
      "height": 128,
      "frameWidth": 64,
      "frameHeight": 128,
      "frameCount": 9,
      "frameMap": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      "footAnchor": {
        "x": 32,
        "y": 123
      },
      "alphaBounds": {
        "x": 4,
        "y": 48,
        "width": 56,
        "height": 76
      },
      "frameBounds": [
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 76
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 76
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 76
        },
        {
          "x": 4,
          "y": 52,
          "width": 56,
          "height": 76
        },
        {
          "x": 4,
          "y": 52,
          "width": 56,
          "height": 76
        },
        {
          "x": 4,
          "y": 52,
          "width": 56,
          "height": 76
        },
        {
          "x": 4,
          "y": 52,
          "width": 56,
          "height": 76
        },
        {
          "x": 4,
          "y": 52,
          "width": 60,
          "height": 72
        },
        {
          "x": 4,
          "y": 52,
          "width": 60,
          "height": 72
        }
      ],
      "logicalFrames": 9
    },
    "fallback": {
      "sourceScale": 1,
      "width": 144,
      "height": 32,
      "frameWidth": 16,
      "frameHeight": 32,
      "frameCount": 9,
      "frameMap": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      "footAnchor": {
        "x": 8,
        "y": 30
      },
      "alphaBounds": {
        "x": 1,
        "y": 12,
        "width": 14,
        "height": 19
      },
      "frameBounds": [
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 19
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 19
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 19
        },
        {
          "x": 1,
          "y": 13,
          "width": 14,
          "height": 19
        },
        {
          "x": 1,
          "y": 13,
          "width": 14,
          "height": 19
        },
        {
          "x": 1,
          "y": 13,
          "width": 14,
          "height": 19
        },
        {
          "x": 1,
          "y": 13,
          "width": 14,
          "height": 19
        },
        {
          "x": 1,
          "y": 13,
          "width": 15,
          "height": 18
        },
        {
          "x": 1,
          "y": 13,
          "width": 15,
          "height": 18
        }
      ]
    }
  }
}
```

### sprite.town_map.x4--e7e18255dff8.png

```json
{
  "key": "sprite.town_map.x4",
  "file": "sprite.town_map.x4--e7e18255dff8.png",
  "sha256": "e7e18255dff84e1fec685d0623b743a6170604e7bb69c9796937198a568e9d32",
  "bytes": 1707,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "539186e27c84b97c202bf359938b0e4dfb847ae110450c071e460ee645b1390c",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 128,
      "height": 64,
      "frameWidth": 128,
      "frameHeight": 64,
      "frameCount": 1,
      "frameMap": [
        0
      ],
      "footAnchor": {
        "x": 36,
        "y": 63
      },
      "alphaBounds": {
        "x": 12,
        "y": 4,
        "width": 52,
        "height": 60
      },
      "frameBounds": [
        {
          "x": 12,
          "y": 4,
          "width": 52,
          "height": 60
        }
      ],
      "logicalFrames": 1
    },
    "fallback": {
      "sourceScale": 1,
      "width": 32,
      "height": 16,
      "frameWidth": 32,
      "frameHeight": 16,
      "frameCount": 1,
      "frameMap": [
        0
      ],
      "footAnchor": {
        "x": 9,
        "y": 15
      },
      "alphaBounds": {
        "x": 3,
        "y": 1,
        "width": 13,
        "height": 15
      },
      "frameBounds": [
        {
          "x": 3,
          "y": 1,
          "width": 13,
          "height": 15
        }
      ]
    }
  }
}
```

### sprite.scientist.x4--5297a00a208a.png

```json
{
  "key": "sprite.scientist.x4",
  "file": "sprite.scientist.x4--5297a00a208a.png",
  "sha256": "5297a00a208a4fd5e36f5ed0c58e97e9e29850c258273bbda66d2bd824947af5",
  "bytes": 21910,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "aec93a8c5ad4fc7ea13c56b5785da6b96a427967c86f55d189cbd71f5ddee892",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 640,
      "height": 128,
      "frameWidth": 64,
      "frameHeight": 128,
      "frameCount": 10,
      "frameMap": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "footAnchor": {
        "x": 32,
        "y": 123
      },
      "alphaBounds": {
        "x": 4,
        "y": 44,
        "width": 56,
        "height": 80
      },
      "frameBounds": [
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 80
        },
        {
          "x": 8,
          "y": 44,
          "width": 48,
          "height": 80
        },
        {
          "x": 0,
          "y": 48,
          "width": 60,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 60,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 8,
          "y": 48,
          "width": 48,
          "height": 76
        },
        {
          "x": 8,
          "y": 48,
          "width": 48,
          "height": 76
        },
        {
          "x": 0,
          "y": 40,
          "width": 60,
          "height": 84
        }
      ],
      "logicalFrames": 10
    },
    "fallback": {
      "sourceScale": 1,
      "width": 160,
      "height": 32,
      "frameWidth": 16,
      "frameHeight": 32,
      "frameCount": 10,
      "frameMap": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ],
      "footAnchor": {
        "x": 8,
        "y": 30
      },
      "alphaBounds": {
        "x": 1,
        "y": 11,
        "width": 14,
        "height": 20
      },
      "frameBounds": [
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 20
        },
        {
          "x": 2,
          "y": 11,
          "width": 12,
          "height": 20
        },
        {
          "x": 0,
          "y": 12,
          "width": 15,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 15,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 2,
          "y": 12,
          "width": 12,
          "height": 19
        },
        {
          "x": 2,
          "y": 12,
          "width": 12,
          "height": 19
        },
        {
          "x": 0,
          "y": 10,
          "width": 15,
          "height": 21
        }
      ]
    }
  }
}
```

### sprite.worker_f.x4--f3ef19bc1f05.png

```json
{
  "key": "sprite.worker_f.x4",
  "file": "sprite.worker_f.x4--f3ef19bc1f05.png",
  "sha256": "f3ef19bc1f05c2b59923ec0cbfee1dd7889ae95c105043e75d90202738553cdc",
  "bytes": 17440,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "8ca72ae077a5636e68d91ae7e1d74ea74d5577ab36f55dba0cda7a904222f327",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 640,
      "height": 128,
      "frameWidth": 64,
      "frameHeight": 128,
      "frameCount": 10,
      "frameMap": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      "footAnchor": {
        "x": 32,
        "y": 123
      },
      "alphaBounds": {
        "x": 4,
        "y": 44,
        "width": 56,
        "height": 80
      },
      "frameBounds": [
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 76
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 76
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        }
      ],
      "logicalFrames": 10
    },
    "fallback": {
      "sourceScale": 1,
      "width": 160,
      "height": 32,
      "frameWidth": 16,
      "frameHeight": 32,
      "frameCount": 10,
      "frameMap": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      "footAnchor": {
        "x": 8,
        "y": 30
      },
      "alphaBounds": {
        "x": 1,
        "y": 11,
        "width": 14,
        "height": 20
      },
      "frameBounds": [
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 19
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 19
        },
        {
          "x": 0,
          "y": 0,
          "width": 0,
          "height": 0
        }
      ]
    }
  }
}
```

### sprite.item_ball.x4--1184c25da88c.png

```json
{
  "key": "sprite.item_ball.x4",
  "file": "sprite.item_ball.x4--1184c25da88c.png",
  "sha256": "1184c25da88cd171d5a49d35badf96e648e6f3fe3130194e43c22b4d06c6a851",
  "bytes": 1450,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "2b0ee8437536c0f20961e43a0180d3184e26c724aa2ee0d9e886bb783cb6edc1",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 64,
      "height": 64,
      "frameWidth": 64,
      "frameHeight": 64,
      "frameCount": 1,
      "frameMap": [
        0
      ],
      "footAnchor": {
        "x": 32,
        "y": 59
      },
      "alphaBounds": {
        "x": 12,
        "y": 20,
        "width": 40,
        "height": 40
      },
      "frameBounds": [
        {
          "x": 12,
          "y": 20,
          "width": 40,
          "height": 40
        }
      ],
      "logicalFrames": 1
    },
    "fallback": {
      "sourceScale": 1,
      "width": 16,
      "height": 16,
      "frameWidth": 16,
      "frameHeight": 16,
      "frameCount": 1,
      "frameMap": [
        0
      ],
      "footAnchor": {
        "x": 8,
        "y": 14
      },
      "alphaBounds": {
        "x": 3,
        "y": 5,
        "width": 10,
        "height": 10
      },
      "frameBounds": [
        {
          "x": 3,
          "y": 5,
          "width": 10,
          "height": 10
        }
      ]
    }
  }
}
```

### sprite.blue.x4--d65ccfba41a6.png

```json
{
  "key": "sprite.blue.x4",
  "file": "sprite.blue.x4--d65ccfba41a6.png",
  "sha256": "d65ccfba41a6840b86bcd5a86e001be7adcaa376968e24dacbef0c90d32ae33e",
  "bytes": 16690,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "9b22cb85e2f3b2ae94364ff9a4b7ed2ee8fe7a1c301a194683e3fd8ed4c4cd5e",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 576,
      "height": 128,
      "frameWidth": 64,
      "frameHeight": 128,
      "frameCount": 9,
      "frameMap": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      "footAnchor": {
        "x": 28,
        "y": 123
      },
      "alphaBounds": {
        "x": 0,
        "y": 44,
        "width": 60,
        "height": 80
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 44,
          "width": 60,
          "height": 80
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 80
        },
        {
          "x": 0,
          "y": 44,
          "width": 56,
          "height": 80
        },
        {
          "x": 0,
          "y": 48,
          "width": 60,
          "height": 80
        },
        {
          "x": 0,
          "y": 48,
          "width": 64,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 0,
          "y": 48,
          "width": 56,
          "height": 76
        },
        {
          "x": 0,
          "y": 48,
          "width": 56,
          "height": 76
        }
      ],
      "logicalFrames": 9
    },
    "fallback": {
      "sourceScale": 1,
      "width": 144,
      "height": 32,
      "frameWidth": 16,
      "frameHeight": 32,
      "frameCount": 9,
      "frameMap": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      "footAnchor": {
        "x": 7,
        "y": 30
      },
      "alphaBounds": {
        "x": 0,
        "y": 11,
        "width": 15,
        "height": 20
      },
      "frameBounds": [
        {
          "x": 0,
          "y": 11,
          "width": 15,
          "height": 20
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 20
        },
        {
          "x": 0,
          "y": 11,
          "width": 14,
          "height": 20
        },
        {
          "x": 0,
          "y": 12,
          "width": 15,
          "height": 20
        },
        {
          "x": 0,
          "y": 12,
          "width": 16,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 0,
          "y": 12,
          "width": 14,
          "height": 19
        },
        {
          "x": 0,
          "y": 12,
          "width": 14,
          "height": 19
        }
      ]
    }
  }
}
```

### sprite.pokedex.x4--ded11b23c51c.png

```json
{
  "key": "sprite.pokedex.x4",
  "file": "sprite.pokedex.x4--ded11b23c51c.png",
  "sha256": "ded11b23c51c3d49b62a054d3e413fa8586a6bc7f15cbe19fcdb63074a8020d5",
  "bytes": 1375,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "071bed8d81e25cfa3e71a1af352dd3d1eb6af73e941dc1cffecb9d6cfcc5f49d",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 64,
      "height": 64,
      "frameWidth": 64,
      "frameHeight": 64,
      "frameCount": 1,
      "frameMap": [
        0
      ],
      "footAnchor": {
        "x": 32,
        "y": 59
      },
      "alphaBounds": {
        "x": 4,
        "y": 16,
        "width": 56,
        "height": 44
      },
      "frameBounds": [
        {
          "x": 4,
          "y": 16,
          "width": 56,
          "height": 44
        }
      ],
      "logicalFrames": 1
    },
    "fallback": {
      "sourceScale": 1,
      "width": 16,
      "height": 16,
      "frameWidth": 16,
      "frameHeight": 16,
      "frameCount": 1,
      "frameMap": [
        0
      ],
      "footAnchor": {
        "x": 8,
        "y": 14
      },
      "alphaBounds": {
        "x": 1,
        "y": 4,
        "width": 14,
        "height": 11
      },
      "frameBounds": [
        {
          "x": 1,
          "y": 4,
          "width": 14,
          "height": 11
        }
      ]
    }
  }
}
```

### effect.story-exclamation.x4--f08d83bbaf31.png

```json
{
  "key": "effect.story-exclamation.x4",
  "file": "effect.story-exclamation.x4--f08d83bbaf31.png",
  "sha256": "f08d83bbaf31b61fd190275ab2bca686d8e5e988c3905b5a6afe358de389bc32",
  "bytes": 594,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "19ac4ecd9479a316d9feaeb022efbc91369ed1001b2e39f6c2213cfd7df9b5fa",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 64,
      "height": 64,
      "frameWidth": 64,
      "frameHeight": 64,
      "frameCount": 1,
      "frameMap": null,
      "footAnchor": {
        "x": 32,
        "y": 47
      },
      "alphaBounds": {
        "x": 24,
        "y": 0,
        "width": 16,
        "height": 48
      },
      "frameBounds": [
        {
          "x": 24,
          "y": 0,
          "width": 16,
          "height": 48
        }
      ]
    },
    "fallback": {
      "sourceScale": 1,
      "width": 16,
      "height": 16,
      "frameWidth": 16,
      "frameHeight": 16,
      "frameCount": 1,
      "frameMap": null,
      "footAnchor": {
        "x": 8,
        "y": 11
      },
      "alphaBounds": {
        "x": 6,
        "y": 0,
        "width": 4,
        "height": 12
      },
      "frameBounds": [
        {
          "x": 6,
          "y": 0,
          "width": 4,
          "height": 12
        }
      ]
    }
  }
}
```

### effect.story-exclamation-anim.x4--0c9917aa04c8.png

```json
{
  "key": "effect.story-exclamation-anim.x4",
  "file": "effect.story-exclamation-anim.x4--0c9917aa04c8.png",
  "sha256": "0c9917aa04c8a16e92ef597a717185186832ce848c95c7c09ca683e2a4c9db96",
  "bytes": 2573,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "64dc7f8b10d8279c7cd2c41080647b2dcd6d81d77feeed190a34394a2e925f98",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 192,
      "height": 64,
      "frameWidth": 64,
      "frameHeight": 64,
      "frameCount": 3,
      "frameMap": null,
      "footAnchor": {
        "x": 32,
        "y": 47
      },
      "alphaBounds": {
        "x": 24,
        "y": 0,
        "width": 16,
        "height": 48
      },
      "frameBounds": [
        {
          "x": 24,
          "y": 0,
          "width": 16,
          "height": 48
        },
        {
          "x": 8,
          "y": 20,
          "width": 48,
          "height": 40
        },
        {
          "x": 4,
          "y": 4,
          "width": 56,
          "height": 56
        }
      ]
    },
    "fallback": {
      "sourceScale": 1,
      "width": 48,
      "height": 16,
      "frameWidth": 16,
      "frameHeight": 16,
      "frameCount": 3,
      "frameMap": null,
      "footAnchor": {
        "x": 8,
        "y": 11
      },
      "alphaBounds": {
        "x": 6,
        "y": 0,
        "width": 4,
        "height": 12
      },
      "frameBounds": [
        {
          "x": 6,
          "y": 0,
          "width": 4,
          "height": 12
        },
        {
          "x": 2,
          "y": 5,
          "width": 12,
          "height": 10
        },
        {
          "x": 1,
          "y": 1,
          "width": 14,
          "height": 14
        }
      ]
    }
  }
}
```

### character.may.normal.x4--5c5a69f34320.png

```json
{
  "key": "character.may.normal.x4",
  "file": "character.may.normal.x4--5c5a69f34320.png",
  "sha256": "5c5a69f343205797d37d98bd962c99a3add5ce99d00e99c2e7106ada7e8e1c09",
  "bytes": 40495,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "9fc1e463f8d581459da84aa33722a6fbc5005987c9259f16aee08623cfcb0556",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 1152,
      "height": 128,
      "frameWidth": 64,
      "frameHeight": 128,
      "frameCount": 18,
      "frameMap": null,
      "footAnchor": {
        "x": 32,
        "y": 123
      },
      "alphaBounds": {
        "x": 4,
        "y": 44,
        "width": 56,
        "height": 80
      },
      "frameBounds": [
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 80
        },
        {
          "x": 8,
          "y": 44,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 8,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 8,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 76
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 76
        },
        {
          "x": 0,
          "y": 48,
          "width": 56,
          "height": 76
        },
        {
          "x": 0,
          "y": 48,
          "width": 64,
          "height": 76
        },
        {
          "x": 0,
          "y": 48,
          "width": 64,
          "height": 76
        },
        {
          "x": 0,
          "y": 48,
          "width": 64,
          "height": 80
        },
        {
          "x": 0,
          "y": 48,
          "width": 64,
          "height": 80
        },
        {
          "x": 0,
          "y": 52,
          "width": 56,
          "height": 76
        },
        {
          "x": 0,
          "y": 52,
          "width": 56,
          "height": 76
        }
      ]
    },
    "fallback": {
      "sourceScale": 1,
      "width": 288,
      "height": 32,
      "frameWidth": 16,
      "frameHeight": 32,
      "frameCount": 18,
      "frameMap": null,
      "footAnchor": {
        "x": 8,
        "y": 30
      },
      "alphaBounds": {
        "x": 1,
        "y": 11,
        "width": 14,
        "height": 20
      },
      "frameBounds": [
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 20
        },
        {
          "x": 2,
          "y": 11,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 2,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 2,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 19
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 19
        },
        {
          "x": 0,
          "y": 12,
          "width": 14,
          "height": 19
        },
        {
          "x": 0,
          "y": 12,
          "width": 16,
          "height": 19
        },
        {
          "x": 0,
          "y": 12,
          "width": 16,
          "height": 19
        },
        {
          "x": 0,
          "y": 12,
          "width": 16,
          "height": 20
        },
        {
          "x": 0,
          "y": 12,
          "width": 16,
          "height": 20
        },
        {
          "x": 0,
          "y": 13,
          "width": 14,
          "height": 19
        },
        {
          "x": 0,
          "y": 13,
          "width": 14,
          "height": 19
        }
      ]
    }
  }
}
```

### character.brendan.normal.x4--c66f4bf1e5d4.png

```json
{
  "key": "character.brendan.normal.x4",
  "file": "character.brendan.normal.x4--c66f4bf1e5d4.png",
  "sha256": "c66f4bf1e5d41ada94e4d47fb7476733b88d86d1ed5313658a4be618fff77c79",
  "bytes": 33598,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "a6bd25b78904f02ea725c2b267dd673eb8c3559a1b238aeb76801de2c4f060e8",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 1152,
      "height": 128,
      "frameWidth": 64,
      "frameHeight": 128,
      "frameCount": 18,
      "frameMap": null,
      "footAnchor": {
        "x": 32,
        "y": 123
      },
      "alphaBounds": {
        "x": 4,
        "y": 40,
        "width": 56,
        "height": 84
      },
      "frameBounds": [
        {
          "x": 4,
          "y": 40,
          "width": 56,
          "height": 84
        },
        {
          "x": 4,
          "y": 40,
          "width": 56,
          "height": 84
        },
        {
          "x": 8,
          "y": 40,
          "width": 56,
          "height": 84
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 84
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 84
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 84
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 84
        },
        {
          "x": 8,
          "y": 44,
          "width": 56,
          "height": 84
        },
        {
          "x": 8,
          "y": 44,
          "width": 56,
          "height": 84
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 76
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 76
        },
        {
          "x": 0,
          "y": 44,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 60,
          "height": 76
        },
        {
          "x": 0,
          "y": 48,
          "width": 60,
          "height": 76
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 0,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 0,
          "y": 48,
          "width": 56,
          "height": 80
        }
      ]
    },
    "fallback": {
      "sourceScale": 1,
      "width": 288,
      "height": 32,
      "frameWidth": 16,
      "frameHeight": 32,
      "frameCount": 18,
      "frameMap": null,
      "footAnchor": {
        "x": 8,
        "y": 30
      },
      "alphaBounds": {
        "x": 1,
        "y": 10,
        "width": 14,
        "height": 21
      },
      "frameBounds": [
        {
          "x": 1,
          "y": 10,
          "width": 14,
          "height": 21
        },
        {
          "x": 1,
          "y": 10,
          "width": 14,
          "height": 21
        },
        {
          "x": 2,
          "y": 10,
          "width": 14,
          "height": 21
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 21
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 21
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 21
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 21
        },
        {
          "x": 2,
          "y": 11,
          "width": 14,
          "height": 21
        },
        {
          "x": 2,
          "y": 11,
          "width": 14,
          "height": 21
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 19
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 19
        },
        {
          "x": 0,
          "y": 11,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 15,
          "height": 19
        },
        {
          "x": 0,
          "y": 12,
          "width": 15,
          "height": 19
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 0,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 0,
          "y": 12,
          "width": 14,
          "height": 20
        }
      ]
    }
  }
}
```

### character.emerald_may.walking.x4--75ac0510f3e5.png

```json
{
  "key": "character.emerald_may.walking.x4",
  "file": "character.emerald_may.walking.x4--75ac0510f3e5.png",
  "sha256": "75ac0510f3e58b2dadda439f0589352eb4ba065ee0db8e2624467e522fe28241",
  "bytes": 21026,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "7f185cda9854f7812545c306795b454dc750be440e582974518ba8a63c9b7e87",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 576,
      "height": 128,
      "frameWidth": 64,
      "frameHeight": 128,
      "frameCount": 9,
      "frameMap": null,
      "footAnchor": {
        "x": 32,
        "y": 123
      },
      "alphaBounds": {
        "x": 4,
        "y": 44,
        "width": 56,
        "height": 80
      },
      "frameBounds": [
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 80
        },
        {
          "x": 8,
          "y": 44,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 4,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 8,
          "y": 48,
          "width": 56,
          "height": 80
        },
        {
          "x": 8,
          "y": 48,
          "width": 56,
          "height": 80
        }
      ]
    },
    "fallback": {
      "sourceScale": 1,
      "width": 144,
      "height": 32,
      "frameWidth": 16,
      "frameHeight": 32,
      "frameCount": 9,
      "frameMap": null,
      "footAnchor": {
        "x": 8,
        "y": 30
      },
      "alphaBounds": {
        "x": 1,
        "y": 11,
        "width": 14,
        "height": 20
      },
      "frameBounds": [
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 20
        },
        {
          "x": 2,
          "y": 11,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 1,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 2,
          "y": 12,
          "width": 14,
          "height": 20
        },
        {
          "x": 2,
          "y": 12,
          "width": 14,
          "height": 20
        }
      ]
    }
  }
}
```

### character.emerald_brendan.walking.x4--85ed4be4c653.png

```json
{
  "key": "character.emerald_brendan.walking.x4",
  "file": "character.emerald_brendan.walking.x4--85ed4be4c653.png",
  "sha256": "85ed4be4c6530fcdf5fd999ca5ed5431d4790387a20768b24b6e01cb2e2d1c02",
  "bytes": 19542,
  "mime": "image/png",
  "source": "Derived offline, frame-isolated xBRZ4 from existing smoothPipeline shader; palette-0 restored where catalog specifies.",
  "derivation": {
    "sourceSha256": "f33ec07a5fd17f4422455f8bc55cd3d3522fa65c3bf740ecbdc00da705eaa0d1",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 576,
      "height": 128,
      "frameWidth": 64,
      "frameHeight": 128,
      "frameCount": 9,
      "frameMap": null,
      "footAnchor": {
        "x": 32,
        "y": 123
      },
      "alphaBounds": {
        "x": 4,
        "y": 40,
        "width": 56,
        "height": 84
      },
      "frameBounds": [
        {
          "x": 4,
          "y": 40,
          "width": 56,
          "height": 84
        },
        {
          "x": 4,
          "y": 40,
          "width": 56,
          "height": 84
        },
        {
          "x": 8,
          "y": 40,
          "width": 56,
          "height": 84
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 84
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 84
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 84
        },
        {
          "x": 4,
          "y": 44,
          "width": 56,
          "height": 84
        },
        {
          "x": 8,
          "y": 44,
          "width": 56,
          "height": 84
        },
        {
          "x": 8,
          "y": 44,
          "width": 56,
          "height": 84
        }
      ]
    },
    "fallback": {
      "sourceScale": 1,
      "width": 144,
      "height": 32,
      "frameWidth": 16,
      "frameHeight": 32,
      "frameCount": 9,
      "frameMap": null,
      "footAnchor": {
        "x": 8,
        "y": 30
      },
      "alphaBounds": {
        "x": 1,
        "y": 10,
        "width": 14,
        "height": 21
      },
      "frameBounds": [
        {
          "x": 1,
          "y": 10,
          "width": 14,
          "height": 21
        },
        {
          "x": 1,
          "y": 10,
          "width": 14,
          "height": 21
        },
        {
          "x": 2,
          "y": 10,
          "width": 14,
          "height": 21
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 21
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 21
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 21
        },
        {
          "x": 1,
          "y": 11,
          "width": 14,
          "height": 21
        },
        {
          "x": 2,
          "y": 11,
          "width": 14,
          "height": 21
        },
        {
          "x": 2,
          "y": 11,
          "width": 14,
          "height": 21
        }
      ]
    }
  }
}
```

### draft-default-0--7d91c2a8acdf.png

```json
{
  "key": "character.draft.66e35d75afb98a298a68d6db9170e969a012950209de59991fb80e1d01255c2b.x4",
  "file": "draft-default-0--7d91c2a8acdf.png",
  "sha256": "7d91c2a8acdf78f2058a09e741b5a403fe5ad62057511413b00d31cffbcae026",
  "bytes": 22772,
  "mime": "image/png",
  "source": "Default fixture only, not current user draft. Existing final composite and 4/5 downscale first; frame-isolated offline xBRZ4 second.",
  "derivation": {
    "sourceSha256": "bf8d263aa934360af450fb19e71ad526618002b715d10d3c16a500845f21e5f0",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 1656,
      "height": 180,
      "frameWidth": 184,
      "frameHeight": 180,
      "frameCount": 9,
      "frameMap": null,
      "footAnchor": {
        "x": 92,
        "y": 139
      },
      "alphaBounds": {
        "x": 64,
        "y": 60,
        "width": 56,
        "height": 80
      },
      "frameBounds": [
        {
          "x": 64,
          "y": 60,
          "width": 56,
          "height": 80
        },
        {
          "x": 64,
          "y": 60,
          "width": 56,
          "height": 80
        },
        {
          "x": 68,
          "y": 60,
          "width": 52,
          "height": 80
        },
        {
          "x": 64,
          "y": 56,
          "width": 56,
          "height": 88
        },
        {
          "x": 64,
          "y": 56,
          "width": 56,
          "height": 88
        },
        {
          "x": 64,
          "y": 56,
          "width": 56,
          "height": 88
        },
        {
          "x": 64,
          "y": 56,
          "width": 56,
          "height": 88
        },
        {
          "x": 68,
          "y": 56,
          "width": 52,
          "height": 84
        },
        {
          "x": 68,
          "y": 56,
          "width": 52,
          "height": 84
        }
      ]
    },
    "fallback": {
      "sourceScale": 1,
      "width": 414,
      "height": 45,
      "frameWidth": 46,
      "frameHeight": 45,
      "frameCount": 9,
      "frameMap": null,
      "footAnchor": {
        "x": 23,
        "y": 34
      },
      "alphaBounds": {
        "x": 16,
        "y": 15,
        "width": 14,
        "height": 20
      },
      "frameBounds": [
        {
          "x": 16,
          "y": 15,
          "width": 14,
          "height": 20
        },
        {
          "x": 16,
          "y": 15,
          "width": 14,
          "height": 20
        },
        {
          "x": 17,
          "y": 15,
          "width": 13,
          "height": 20
        },
        {
          "x": 16,
          "y": 14,
          "width": 14,
          "height": 22
        },
        {
          "x": 16,
          "y": 14,
          "width": 14,
          "height": 22
        },
        {
          "x": 16,
          "y": 14,
          "width": 14,
          "height": 22
        },
        {
          "x": 16,
          "y": 14,
          "width": 14,
          "height": 22
        },
        {
          "x": 17,
          "y": 14,
          "width": 13,
          "height": 21
        },
        {
          "x": 17,
          "y": 14,
          "width": 13,
          "height": 21
        }
      ]
    }
  },
  "appearanceSignature": "66e35d75afb98a298a68d6db9170e969a012950209de59991fb80e1d01255c2b",
  "fixture": {
    "schemaVersion": 1,
    "name": "",
    "region": "kanto",
    "gender": 0,
    "skin": 0,
    "slots": {
      "HAT": {
        "item": -1,
        "color": 0,
        "variant": 0
      },
      "HAIR": {
        "item": 6,
        "color": 0,
        "variant": 0
      },
      "EYES": {
        "item": 2,
        "color": 0,
        "variant": 0
      },
      "FACIAL_HAIR": {
        "item": -1,
        "color": 0,
        "variant": 0
      },
      "BACK": {
        "item": -1,
        "color": 0,
        "variant": 0
      },
      "TOP": {
        "item": 2,
        "color": 0,
        "variant": 0
      },
      "GLOVES": {
        "item": -1,
        "color": 0,
        "variant": 0
      },
      "FOOTWEAR": {
        "item": 0,
        "color": 0,
        "variant": 0
      },
      "LEGGINGS": {
        "item": 0,
        "color": 0,
        "variant": 0
      },
      "BIKE": {
        "item": 0,
        "color": 0,
        "variant": 0
      }
    }
  },
  "coverage": "Only this exact default fixture, not arbitrary user draft",
  "signatureInput": "[1,0,0,[[\"BACK\",-1,0,0],[\"BIKE\",0,0,0],[\"EYES\",2,0,0],[\"FACIAL_HAIR\",-1,0,0],[\"FOOTWEAR\",0,0,0],[\"GLOVES\",-1,0,0],[\"HAIR\",6,0,0],[\"HAT\",-1,0,0],[\"LEGGINGS\",0,0,0],[\"TOP\",2,0,0]]]"
}
```

### draft-default-1--2d1e7ef59a20.png

```json
{
  "key": "character.draft.dd98b70d8b76be3a4623b996e3432ec5d6cb6164e33c244fb8105ca046beca4f.x4",
  "file": "draft-default-1--2d1e7ef59a20.png",
  "sha256": "2d1e7ef59a206a6c9d05403306813eb1e815ac70e110afc61050f9f6a732c403",
  "bytes": 24511,
  "mime": "image/png",
  "source": "Default fixture only, not current user draft. Existing final composite and 4/5 downscale first; frame-isolated offline xBRZ4 second.",
  "derivation": {
    "sourceSha256": "baf7bd00f36a9d4cb1977d825c4ba3e981cd18a12ff455a4d203800af3515c0f",
    "shaderSha256": "15d9cd0bcac3a7b2d054c198847f7528efe19111b8c80b884fc1dca4c7f9acfa",
    "filter": "same smoothPipeline GLSL rules, isolated frames, fixed scale 4",
    "binaryAlpha": "source nearest4 mask preserved exactly; transparent RGB zero",
    "converterSha256": "6ada1bf80670944a93b486c803fd887bc1fa52099b0f3b65dd24e07225bc2808",
    "alphaAdaptation": "Realtime shader outputs opaque alpha; offline output restores exact source mask. Transparent neighbor RGB is replaced with current sample RGB to avoid black/gray contamination."
  },
  "metadata": {
    "remote": {
      "sourceScale": 4,
      "width": 1656,
      "height": 180,
      "frameWidth": 184,
      "frameHeight": 180,
      "frameCount": 9,
      "frameMap": null,
      "footAnchor": {
        "x": 92,
        "y": 139
      },
      "alphaBounds": {
        "x": 64,
        "y": 52,
        "width": 56,
        "height": 88
      },
      "frameBounds": [
        {
          "x": 64,
          "y": 52,
          "width": 56,
          "height": 88
        },
        {
          "x": 64,
          "y": 52,
          "width": 56,
          "height": 88
        },
        {
          "x": 68,
          "y": 52,
          "width": 52,
          "height": 88
        },
        {
          "x": 64,
          "y": 48,
          "width": 56,
          "height": 96
        },
        {
          "x": 64,
          "y": 48,
          "width": 56,
          "height": 96
        },
        {
          "x": 64,
          "y": 48,
          "width": 56,
          "height": 96
        },
        {
          "x": 64,
          "y": 48,
          "width": 56,
          "height": 96
        },
        {
          "x": 68,
          "y": 48,
          "width": 52,
          "height": 92
        },
        {
          "x": 68,
          "y": 48,
          "width": 52,
          "height": 92
        }
      ]
    },
    "fallback": {
      "sourceScale": 1,
      "width": 414,
      "height": 45,
      "frameWidth": 46,
      "frameHeight": 45,
      "frameCount": 9,
      "frameMap": null,
      "footAnchor": {
        "x": 23,
        "y": 34
      },
      "alphaBounds": {
        "x": 16,
        "y": 13,
        "width": 14,
        "height": 22
      },
      "frameBounds": [
        {
          "x": 16,
          "y": 13,
          "width": 14,
          "height": 22
        },
        {
          "x": 16,
          "y": 13,
          "width": 14,
          "height": 22
        },
        {
          "x": 17,
          "y": 13,
          "width": 13,
          "height": 22
        },
        {
          "x": 16,
          "y": 12,
          "width": 14,
          "height": 24
        },
        {
          "x": 16,
          "y": 12,
          "width": 14,
          "height": 24
        },
        {
          "x": 16,
          "y": 12,
          "width": 14,
          "height": 24
        },
        {
          "x": 16,
          "y": 12,
          "width": 14,
          "height": 24
        },
        {
          "x": 17,
          "y": 12,
          "width": 13,
          "height": 23
        },
        {
          "x": 17,
          "y": 12,
          "width": 13,
          "height": 23
        }
      ]
    }
  },
  "appearanceSignature": "dd98b70d8b76be3a4623b996e3432ec5d6cb6164e33c244fb8105ca046beca4f",
  "fixture": {
    "schemaVersion": 1,
    "name": "",
    "region": "kanto",
    "gender": 1,
    "skin": 0,
    "slots": {
      "HAT": {
        "item": -1,
        "color": 0,
        "variant": 0
      },
      "HAIR": {
        "item": 4,
        "color": 0,
        "variant": 0
      },
      "EYES": {
        "item": 2,
        "color": 0,
        "variant": 0
      },
      "FACIAL_HAIR": {
        "item": -1,
        "color": 0,
        "variant": 0
      },
      "BACK": {
        "item": -1,
        "color": 0,
        "variant": 0
      },
      "TOP": {
        "item": 2,
        "color": 0,
        "variant": 0
      },
      "GLOVES": {
        "item": -1,
        "color": 0,
        "variant": 0
      },
      "FOOTWEAR": {
        "item": 0,
        "color": 0,
        "variant": 0
      },
      "LEGGINGS": {
        "item": 0,
        "color": 0,
        "variant": 0
      },
      "BIKE": {
        "item": 0,
        "color": 0,
        "variant": 0
      }
    }
  },
  "coverage": "Only this exact default fixture, not arbitrary user draft",
  "signatureInput": "[1,1,0,[[\"BACK\",-1,0,0],[\"BIKE\",0,0,0],[\"EYES\",2,0,0],[\"FACIAL_HAIR\",-1,0,0],[\"FOOTWEAR\",0,0,0],[\"GLOVES\",-1,0,0],[\"HAIR\",4,0,0],[\"HAT\",-1,0,0],[\"LEGGINGS\",0,0,0],[\"TOP\",2,0,0]]]"
}
```

