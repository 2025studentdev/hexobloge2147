---
title: 成功复现程序员笑话
date: 2026-08-30 17:18:41
---
“在我本地能跑啊。”
“跟我的CI/CD说去吧！”

我今天写React遇到了这样一个问题。

本地执行 `npm run build`，一切正常，没有任何报错。代码推送到仓库，Cloudflare Pages 自动构建，几分钟后收到构建失败的通知。错误日志指向生成 `/index.html` 时抛出了 `TypeError: content.trim is not a function`。

检查 `src/pages/index.astro` 文件，发现使用了 Vite 的 `import.meta.glob` 来读取 Markdown 文件：

```astro
const modules = import.meta.glob('/src/static-info/*.md', { as: 'raw' });
const content = await modules[path]();
messages.push({ date: dateStr, content: content.trim() });
```

本地环境跑了很多年，Vite 版本较旧，`as: 'raw'` 依然能返回文件内容的字符串，所以 `.trim()` 正常工作。但 Cloudflare Pages 使用的构建环境更新，Vite 版本已经弃用了 `as: 'raw'`。构建日志里有一行警告：

```
[WARN] [vite] The glob option "as" has been deprecated in favour of "query".
Please update `as: 'raw'` to `query: '?raw', import: 'default'`.
```

警告讲得很清楚。新版 Vite 中，`as: 'raw'` 的返回值不再是纯字符串，而是一个对象（比如 `{ default: '...' }`），于是 `content` 变成非字符串类型，`.trim()` 自然报错。

修改方法按照警告提示来：

```astro
const modules = import.meta.glob('/src/static-info/*.md', {
  query: '?raw',
  import: 'default'
});
```

改完之后，本地重新 `npm run build`，警告消失，构建通过。提交代码，再次触发 Cloudflare Pages 部署，这次成功完成。

这件事的根源并不复杂：本地与云端的依赖版本不一致。构建日志里的警告不是摆设，它直接指出了问题所在。下次再遇到类似情况，先看版本，再看警告，最后再跟 CI/CD 说那句话也不迟。

(AI生成)