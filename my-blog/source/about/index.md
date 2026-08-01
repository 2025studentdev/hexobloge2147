---
title: 关于
date: 2026-08-01 15:00:00
---


{% raw %}
<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=JetBrains+Mono:wght@400;700&display=swap');
#e2147{--fg:#fff;--dim:#777;--line:#1d1d1d;--mono:'JetBrains Mono',ui-monospace,monospace;--disp:'Archivo Black',sans-serif;position:relative;overflow:hidden;background:#000;color:var(--fg);font-family:var(--mono);font-size:14px;line-height:1.5;width:100vw;margin-left:calc(50% - 50vw);scroll-margin-top:70px}
#e2147 *,#e2147 *::before,#e2147 *::after{box-sizing:border-box;margin:0;padding:0}
#e2147 ::selection{background:var(--fg);color:#000}
#e2147 a{color:inherit;text-decoration:none}
#e2147 h2,#e2147 h3,#e2147 h4{border:0;background:none}
#e2147 h2::before,#e2147 h2::after,#e2147 h3::before,#e2147 h3::after,#e2147 h4::before,#e2147 h4::after{content:none}
#e2147::before{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,transparent 0 79px,#0f0f0f 79px 80px),repeating-linear-gradient(90deg,transparent 0 79px,#0f0f0f 79px 80px)}
#e2147 .scan{position:absolute;left:0;right:0;top:-25%;height:25%;z-index:3;pointer-events:none;background:linear-gradient(180deg,transparent,rgba(255,255,255,.05),transparent);animation:escan 11s linear infinite}
@keyframes escan{to{transform:translateY(520%)}}
#e2147 .bar{position:fixed;top:0;left:0;right:0;height:2px;background:var(--fg);transform:scaleX(0);transform-origin:0 0;z-index:9999}
@supports(animation-timeline:scroll()){#e2147 .bar{animation:egrow linear both;animation-timeline:scroll(root)}}
@keyframes egrow{to{transform:scaleX(1)}}
#e2147 .in{position:relative;z-index:1;max-width:1160px;margin:0 auto;padding:0 24px}
#e2147 .k{font-size:12px;color:var(--dim);letter-spacing:.08em}
#e2147 .o{color:transparent;-webkit-text-stroke:2px var(--fg)}
#e2147 .cur{animation:e-blink 1s steps(2) infinite}
@keyframes e-blink{50%{opacity:.1}}
#e2147 .top{position:relative;z-index:1;display:flex;justify-content:space-between;align-items:center;padding:16px 24px;border-bottom:1px solid var(--line);font-size:11px;letter-spacing:.18em;text-transform:uppercase}
#e2147 .dot{width:7px;height:7px;background:var(--fg);border-radius:50%;display:inline-block;margin-right:9px;vertical-align:1px;animation:e-blink 1.6s steps(2) infinite}
#e2147 .boot{position:relative;min-height:78vh;min-height:78svh;display:flex;flex-direction:column;justify-content:center;padding:64px 0}
#e2147 .h1{font-family:var(--disp);font-weight:400;font-size:clamp(4rem,15vw,11.5rem);line-height:.86;text-transform:uppercase;letter-spacing:-.01em;margin:26px 0 30px}
#e2147 .g{position:relative;display:inline-block}
#e2147 .g::before,#e2147 .g::after{content:attr(data-t);position:absolute;inset:0;opacity:0}
#e2147 .h1:hover .g::before{opacity:1;animation:e-gl1 .32s steps(2) infinite}
#e2147 .h1:hover .g::after{opacity:1;color:var(--dim);animation:e-gl2 .32s steps(2) infinite}
@keyframes e-gl1{0%{clip-path:inset(8% 0 62% 0);transform:translate(-7px,-2px)}50%{clip-path:inset(52% 0 18% 0);transform:translate(6px,2px)}100%{clip-path:inset(28% 0 44% 0);transform:translate(-4px,1px)}}
@keyframes e-gl2{0%{clip-path:inset(62% 0 8% 0);transform:translate(6px,1px)}50%{clip-path:inset(14% 0 66% 0);transform:translate(-6px,-1px)}100%{clip-path:inset(44% 0 30% 0);transform:translate(4px,-2px)}}
#e2147 .type{font-size:clamp(.78rem,1.8vw,1rem);width:39ch;max-width:100%;white-space:nowrap;overflow:hidden;border-right:.55em solid var(--fg);animation:e-type 2.8s steps(39) .6s both,e-caret .8s steps(2) infinite}
@keyframes e-type{from{width:0}}
@keyframes e-caret{50%{border-color:transparent}}
#e2147 .specs{display:flex;margin-top:56px;border-block:1px solid var(--line)}
#e2147 .specs div{flex:1;padding:22px 18px;border-left:1px solid var(--line);transition:.25s}
#e2147 .specs div:first-child{border-left:0;padding-left:0}
#e2147 .specs div:hover{background:var(--fg);color:#000}
#e2147 .specs div:hover span{color:#444}
#e2147 .specs b{font-family:var(--disp);font-weight:400;font-size:clamp(1.5rem,3.6vw,2.5rem);display:block;margin-bottom:6px}
#e2147 .specs span{font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--dim);transition:.25s}
#e2147 .cue{position:absolute;bottom:26px;display:flex;align-items:center;gap:14px;font-size:10px;letter-spacing:.34em;color:var(--dim)}
#e2147 .cue i{width:64px;height:1px;background:#2a2a2a;overflow:hidden;position:relative}
#e2147 .cue i::after{content:"";position:absolute;inset:0;background:var(--fg);animation:e-slide 1.8s cubic-bezier(.7,0,.3,1) infinite}
@keyframes e-slide{from{transform:translateX(-101%)}to{transform:translateX(101%)}}
#e2147 .tick{border-block:1px solid var(--line);overflow:hidden;display:flex}
#e2147 .tick:hover .tg{animation-play-state:paused}
#e2147 .tg{display:flex;gap:56px;padding:16px 0 16px 56px;width:max-content;flex-shrink:0;font-family:var(--disp);font-size:clamp(1.1rem,2.6vw,1.8rem);text-transform:uppercase;white-space:nowrap;animation:e-mq 24s linear infinite}
#e2147 .tg span:nth-child(even){color:transparent;-webkit-text-stroke:1px var(--dim)}
@keyframes e-mq{to{transform:translateX(-100%)}}
#e2147 .sh{display:flex;align-items:center;gap:18px;margin:110px 0 44px;font-size:11px;letter-spacing:.3em;text-transform:uppercase;color:var(--dim)}
#e2147 .sh::after{content:"";flex:1;height:1px;background:var(--line)}
#e2147 .sh b{color:var(--fg)}
#e2147 .h2{font-family:var(--disp);font-weight:400;font-size:clamp(1.9rem,5vw,3.8rem);line-height:1.12;text-transform:uppercase;max-width:22ch}
#e2147 .lead{margin-top:30px;max-width:62ch;line-height:1.9;font-size:13px;color:var(--dim)}
#e2147 .row{display:grid;grid-template-columns:72px 1.1fr 1.4fr 40px;gap:20px;align-items:center;padding:26px 10px;border-top:1px solid var(--line);transition:.22s;cursor:crosshair}
#e2147 .row:last-of-type{border-bottom:1px solid var(--line)}
#e2147 .row:hover{background:var(--fg);color:#000}
#e2147 .row:hover .k{color:#555}
#e2147 .row h3{font-family:var(--disp);font-weight:400;font-size:clamp(1.2rem,2.8vw,2rem);text-transform:uppercase;transition:transform .22s}
#e2147 .row:hover h3{transform:translateX(14px)}
#e2147 .row p{font-size:12px;color:var(--dim);transition:.22s}
#e2147 .row:hover p{color:#333}
#e2147 .ar{font-size:22px;opacity:0;transform:translateX(-10px);transition:.22s}
#e2147 .row:hover .ar{opacity:1;transform:none}
#e2147 details{border-top:1px solid var(--line)}
#e2147 details:last-of-type{border-bottom:1px solid var(--line)}
#e2147 summary{display:grid;grid-template-columns:72px 1fr auto auto;gap:20px;align-items:center;list-style:none;cursor:pointer;padding:22px 10px;font-size:13px;transition:.2s}
#e2147 summary::-webkit-details-marker{display:none}
#e2147 summary:hover{background:#0d0d0d;padding-left:22px}
#e2147 details[open] summary{background:#111}
#e2147 .ttl{font-weight:700;letter-spacing:.06em;text-transform:uppercase}
#e2147 .meta{font-size:11px;color:var(--dim);letter-spacing:.14em}
#e2147 .pm{font-size:18px;transition:transform .3s}
#e2147 details[open] .pm{transform:rotate(45deg)}
#e2147 .bd{padding:0 10px 26px 102px;max-width:74ch;color:var(--dim);font-size:13px;line-height:1.9}
#e2147 .end{border-top:1px solid var(--line);margin-top:120px}
#e2147 .mail{font-family:var(--disp);font-size:clamp(1.9rem,7vw,5.4rem);text-transform:uppercase;display:inline-block;position:relative;line-height:1;transition:.25s;cursor:default}
#e2147 .mail::after{content:"";position:absolute;left:0;bottom:-10px;height:4px;width:100%;background:var(--fg);transform:scaleX(0);transform-origin:100% 0;transition:transform .45s cubic-bezier(.7,0,.3,1)}
#e2147 .mail:hover{color:transparent;-webkit-text-stroke:1.5px var(--fg)}
#e2147 .mail:hover::after{transform:scaleX(1);transform-origin:0 0}
#e2147 .chan{margin-top:34px;font-size:12px}
#e2147 .legal{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-top:96px;padding:22px 0 30px;border-top:1px solid var(--line);font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--dim)}
#e2147 .legal a{color:var(--fg)}
#e2147 .legal a:hover{background:var(--fg);color:#000}
@supports(animation-timeline:view()){#e2147 .rv{animation:erise linear both;animation-timeline:view();animation-range:entry 0% entry 42%}}
@keyframes erise{from{opacity:0;transform:translateY(46px)}}
@media(max-width:760px){
#e2147 .row{grid-template-columns:52px 1fr 32px}
#e2147 .row p{grid-column:2/4;grid-row:2}
#e2147 .ar{display:none}
#e2147 .specs{flex-wrap:wrap}
#e2147 .specs div{flex:1 1 50%;border-left:0;padding-left:0}
#e2147 summary{grid-template-columns:52px 1fr auto}
#e2147 .meta{display:none}
#e2147 .bd{padding-left:10px}
}
@media(prefers-reduced-motion:reduce){#e2147 *,#e2147 *::before,#e2147 *::after{animation:none!important;transition:none!important}}
</style>
<div id="e2147">
<div class="bar"></div>
<div class="scan"></div>
<div class="top"><span><i class="dot"></i>e2147dev // sys.online</span><span class="k">hexo://about</span></div>
<div class="in">
<section class="boot">
<p class="k">&gt; boot :: identity resolved — e2147dev ......... [OK]</p>
<h2 class="h1"><span class="g" data-t="E2147">E2147</span><br><span class="o">DEV</span><span class="cur">_</span></h2>
<p class="type">&gt; build fast. ship faster. sleep never.</p>
<div class="specs">
<div><b>480K+</b><span>lines shipped</span></div>
<div><b>99.99</b><span>uptime %</span></div>
<div><b>12ms</b><span>cold latency</span></div>
<div><b>0</b><span>js on this page</span></div>
</div>
<p class="cue">SCROLL<i></i></p>
</section>
</div>
<div class="tick">
<div class="tg"><span>e2147dev</span><span>systems online</span><span>zero js</span><span>pure css</span><span>60 fps</span><span>no dependencies</span></div>
<div class="tg" aria-hidden="true"><span>e2147dev</span><span>systems online</span><span>zero js</span><span>pure css</span><span>60 fps</span><span>no dependencies</span></div>
</div>
<div class="in">
<section>
<p class="sh rv"><b>00</b> manifesto</p>
<h3 class="h2 rv">No frameworks. No bloat. <span class="o">No excuses.</span></h3>
<p class="lead rv">e2147dev is a one-node build system: a developer obsessed with the space between silicon and pixels. Every byte accounted for, every frame earned, every page fast enough to feel like reflex.</p>
</section>
<section>
<p class="sh rv"><b>01</b> systems</p>
<div class="row rv"><span class="k">S/01</span><h3>Core</h3><p>rust · c · wasm — memory-safe engines, compilers, runtimes</p><span class="ar">→</span></div>
<div class="row rv"><span class="k">S/02</span><h3>Interfaces</h3><p>css-first ui · zero js · 60fps or nothing</p><span class="ar">→</span></div>
<div class="row rv"><span class="k">S/03</span><h3>Infra</h3><p>linux · containers · edge — cold starts under 12ms</p><span class="ar">→</span></div>
<div class="row rv"><span class="k">S/04</span><h3>Automation</h3><p>pipelines that never sleep, deploys that never roll back</p><span class="ar">→</span></div>
<div class="row rv"><span class="k">S/05</span><h3>Security</h3><p>threat models, not vibes</p><span class="ar">→</span></div>
</section>
<section>
<p class="sh rv"><b>02</b> log</p>
<details class="rv"><summary><span class="k">L/047</span><span class="ttl">Mono</span><span class="meta">2026 // design-system</span><span class="pm">+</span></summary>
<p class="bd">A monochrome design system in 4kb of hand-rolled CSS. Zero dependencies, zero colors, zero compromise. Ships with a terminal theme and a conscience.</p></details>
<details class="rv"><summary><span class="k">L/032</span><span class="ttl">Flux</span><span class="meta">2025 // static-engine</span><span class="pm">+</span></summary>
<p class="bd">Static site engine with a 4kb runtime. Builds this page in 80ms and apologizes for the delay.</p></details>
<details class="rv"><summary><span class="k">L/018</span><span class="ttl">Grid</span><span class="meta">2025 // tui</span><span class="pm">+</span></summary>
<p class="bd">A terminal dashboard that watches your fleet like a hawk. ASCII only, as the ancients intended.</p></details>
<details class="rv"><summary><span class="k">L/004</span><span class="ttl">Null</span><span class="meta">2024 // gc-lab</span><span class="pm">+</span></summary>
<p class="bd">Garbage collector experiments: mark, sweep, and the occasional existential crisis.</p></details>
</section>
<section class="end">
<p class="sh rv"><b>03</b> signal</p>
<p class="mail rv">@e2147dev<span class="cur">_</span></p>
<p class="k chan rv">&gt; channel open — all frequencies monitored</p>
<div class="legal">
<span>© 2026 e2147dev</span>
<span>0 js · 1 html · 1 css</span>
<a href="#e2147">reboot ↑</a>
</div>
</section>
</div>
</div>
{% endraw %}
