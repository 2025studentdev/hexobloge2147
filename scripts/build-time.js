// scripts/build-time.js
process.env.TZ = 'Asia/Shanghai';

hexo.extend.filter.register('after_render:html', function (html, data) {
    const now = new Date();
    const pad = n => String(n).padStart(2, '0');
    const Y = now.getFullYear();
    const M = pad(now.getMonth() + 1);
    const D = pad(now.getDate());
    const h = pad(now.getHours());
    const m = pad(now.getMinutes());
    const s = pad(now.getSeconds());
    const timeStr = `${Y}年${M}月${D}日 ${h}:${m}:${s}`;

    const buildHtml = `<span style="display:block;text-align:center;font-size:0.85rem;opacity:0.7;margin-top:6px;">构建时间：${timeStr}</span>`;

    // 在 </body> 前插入，直接放到 .footer-other 里面
    return html.replace(
        /(<div class="footer-other">[\s\S]*?)(?=<\/div>)/,
        (match, group) => group + buildHtml
    );
});