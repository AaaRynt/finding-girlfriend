你现在在一个已经初始化好的前端项目里工作，技术栈已经确定：

- Vite
- React
- TypeScript
- Tailwind CSS
- lucide-react

请基于当前项目，制作一个静态单页页面，主题是：

《Finding Girlfriend》
一个刚毕业的科技园区理工男大学生的“找女朋友方法 / 社交系统重构指南”。

页面文案已经在根目录的 `README.md` 中，请读取 `README.md` 的内容，将其改造成适合前端页面展示的结构化内容。不要只是把 markdown 原样渲染出来，而是要根据内容拆分成多个 section、卡片、代码块、数据面板、行动清单和结尾区域。

素材图片已经在 `public/` 目录下，当前有这些图片：

- `Hero图.png`
- `工位图.png`
- `通勤:城市图.png`
- `Ending图.png`

请优先把这些图片整理到：

- `public/images/hero.png`
- `public/images/desk.png`
- `public/images/commute-city.png`
- `public/images/ending.png`

如果当前文件系统允许重命名，请重命名并更新引用路径。如果不方便重命名，就直接使用现有文件名，但代码里必须保证路径正确。注意 `通勤:城市图.png` 里的冒号在 Windows 文件系统不兼容，最好处理掉。

页面必须是纯静态单页，不要添加后端、数据库、登录、表单、路由、状态管理，也不要引入额外依赖。不要使用 shadcn/ui，不要使用 Framer Motion。只使用 React、TypeScript、Tailwind CSS 和 lucide-react。

整体视觉风格必须接近 Atom One Dark / One Dark Pro，不要做赛博朋克霓虹，不要做紫粉蓝 AI 网页，不要做情感营销号。风格关键词：

- One Dark Pro
- dark editor interface
- terminal panel
- developer dashboard
- cinematic realism
- East Asian tech park
- low saturation
- restrained humor
- cold but readable
- programmer documentation style

请使用下面的 One Dark Pro 色板作为主要视觉系统：

```ts
const oneDark = {
  background: '#282c34',
  panel: '#21252b',
  panelAlt: '#1e2227',
  border: '#3e4451',
  chalky: '#e5c07b',
  coral: '#e06c75',
  dark: '#5c6370',
  error: '#f44747',
  fountainBlue: '#56b6c2',
  green: '#98c379',
  invalid: '#ffffff',
  lightDark: '#7f848e',
  lightWhite: '#abb2bf',
  malibu: '#61afef',
  purple: '#c678dd',
  whiskey: '#d19a66',
  deepRed: '#be5046',
}
```
