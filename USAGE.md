# 素材接入与检查说明

## 找图片

从 [根目录 README](README.md) 或分类目录查看名称、用途和状态。

- **人物图集候选（30 张）**：[Ruby](characters/ruby/)、[Emerald](characters/emerald/)、[Ruby／Sapphire 同外观别名](characters/ruby-sapphire-aliases/)；逐件上游仓库、固定提交和原路径见 [首批来源索引](assets.json)。
- **静态背图候选（498 张）**：[普通](pokemon/candidates/back/normal/default-static/)、[闪光](pokemon/candidates/back/shiny/default-static/)；来源和哈希见 [#1 两张](pokemon/candidates/back/README-dex-00001.md) 与 [其余 496 张](pokemon/candidates/back/static-back-historical-249-sources.json)。
- **已索引原件（1,053 张）**：见 [首批索引中的 5 张原件](assets.json)、[精灵／道具](pokemon-assets.json)、[历史人物／场景](historical-assets.json)、[历史上传参考](reference-assets.json)。

## 三种状态分开

1. 已备份：远端实体与 SHA256 核对一致。
2. 候选已预览：不表示原项目曾使用，也不表示已接入游戏。
3. 已接入：必须另外有应用消费者和实际效果验证。

## 接入规则

- 使用我们仓库的固定提交链接：`https://raw.githubusercontent.com/King-CreateWorld/pokemon-world-assets/<commit>/<path>`，不要用上游作者链接作为运行地址。
- 不把图集整张当人物；按源格、透明规则、镜像和帧时序组合。
- 不改原图字节；名称变动保留旧路径映射。
- **当前索引覆盖 1,581 张图片：1,053 张已索引原件 + 30 张人物图集候选 + 498 张静态背图候选。** 另有 37 张隔离原件未公开。索引覆盖当前公库图片，不代表全部历史素材已找齐。 候选不作原项目原件，也不代表当前游戏形态、性别或运行映射已经确认。账号、数据库、源码和会话不在此公库。
- 上传与远端校验成功后才清理本地下载缓存；原始归档和验收证据保留。

历史人物和场景条目见 `historical-assets.json`；图像归档与运行接入分开。
