// scripts/build-time.js
hexo.extend.filter.register('after_generate', function () {
    const fs = require('fs');
    const path = require('path');
    const now = new Date();
    // 格式：2026年08月05日 13:21:40
    const pad = n => String(n).padStart(2, '0');
    const Y = now.getFullYear();
    const M = pad(now.getMonth() + 1);
    const D = pad(now.getDate());
    const h = pad(now.getHours());
    const m = pad(now.getMinutes());
    const s = pad(now.getSeconds());
    const timeStr = `${Y}年${M}月${D}日 ${h}:${m}:${s}`;
    const jsContent = `window.BUILD_TIME = '${timeStr}';`;
    const filePath = path.join(hexo.public_dir, 'js', 'build-time.js');
    // 确保目录存在
    if (!fs.existsSync(path.dirname(filePath))) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }
    fs.writeFileSync(filePath, jsContent);
});