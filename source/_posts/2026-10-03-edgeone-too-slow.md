---
title: 感觉EdgeOne接入是真的慢
date: 2026-10-03 13:34:22
---
感觉 EdgeOne 接入是真的慢。

Cloudflare Pages 绑域名非常快，基本上添加完之后等着就行了。EdgeOne 就不一样了：设置完项目之后，不仅要 TXT 验证，还要慢慢等它生成部署；添加完 CNAME 之后，还得自己把证书、IPv6、强制 HTTPS 打开，然后进度条又要转半天。

太慢了。

不过部署后延迟比 Cloudflare 稍微低一点，也许这算是一个优势吧。