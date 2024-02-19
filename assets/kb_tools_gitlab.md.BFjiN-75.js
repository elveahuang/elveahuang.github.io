import{_ as s,c as a,o as i,a2 as e}from"./chunks/framework.yzSPJLIe.js";const u=JSON.parse('{"title":"Gitlab","description":"","frontmatter":{},"headers":[],"relativePath":"kb/tools/gitlab.md","filePath":"kb/tools/gitlab.md","lastUpdated":1708308449000}'),l={name:"kb/tools/gitlab.md"},n=e(`<h1 id="gitlab" tabindex="-1">Gitlab <a class="header-anchor" href="#gitlab" aria-label="Permalink to &quot;Gitlab&quot;">​</a></h1><h2 id="prometheus" tabindex="-1">Prometheus <a class="header-anchor" href="#prometheus" aria-label="Permalink to &quot;Prometheus&quot;">​</a></h2><h5 id="_1-禁用" tabindex="-1">1. 禁用 <a class="header-anchor" href="#_1-禁用" aria-label="Permalink to &quot;1. 禁用&quot;">​</a></h5><blockquote><p>端口跟Kafka默认端口有冲突</p></blockquote><p>打开配置文件</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vi /etc/gitlab/gitlab.rb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改配置文件，直接禁用</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">prometheus[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;enable&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alertmanager[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;enable&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>重启Gitlab</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gitlab-ctl stop</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gitlab-ctl reconfigure</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gitlab-ctl start</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,10),t=[n];function p(h,r,d,o,k,c){return i(),a("div",null,t)}const g=s(l,[["render",p]]);export{u as __pageData,g as default};
