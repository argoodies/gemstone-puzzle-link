# gemstone-puzzle-link

擦宝石模拟器 · 宝石磨き · **Gemstone Puzzle** 的营销 / 隐私 / 支持主页（中英日切换）。

- 线上：**https://gemstone-puzzle-link.fly.dev**
- 页面：`index`（简介）· `privacy`（隐私政策，数据不收集）· `support`（联系 / FAQ）
- 语言：顶部下拉切换 中文 / English / 日本語（`public/i18n.js`）
- 风格：黑底蓝宝石，复用 app 图标
- 部署：静态站 → nginx Docker → Fly（`.github/workflows/fly.yml`，推 `public/**` 即自动部署；需 Secret `FLY_API_TOKEN`）

游戏本体仓库：`argoodies/gemstone-puzzle`。
