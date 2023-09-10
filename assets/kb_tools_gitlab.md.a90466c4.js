import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.8f76c11e.js";const E=JSON.parse('{"title":"Gitlab","description":"","frontmatter":{},"headers":[],"relativePath":"kb/tools/gitlab.md","filePath":"kb/tools/gitlab.md","lastUpdated":1694354148000}'),e={name:"kb/tools/gitlab.md"},p=n(`<h1 id="gitlab" tabindex="-1">Gitlab <a class="header-anchor" href="#gitlab" aria-label="Permalink to &quot;Gitlab&quot;">​</a></h1><h2 id="prometheus" tabindex="-1">Prometheus <a class="header-anchor" href="#prometheus" aria-label="Permalink to &quot;Prometheus&quot;">​</a></h2><h5 id="_1-禁用" tabindex="-1">1. 禁用 <a class="header-anchor" href="#_1-禁用" aria-label="Permalink to &quot;1. 禁用&quot;">​</a></h5><blockquote><p>端口跟Kafka默认端口有冲突</p></blockquote><p>打开配置文件</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/gitlab/gitlab.rb</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/gitlab/gitlab.rb</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改配置文件，直接禁用</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#B392F0;">prometheus[</span><span style="color:#B392F0;">&#39;enable&#39;</span><span style="color:#B392F0;">]</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#B392F0;">alertmanager[</span><span style="color:#B392F0;">&#39;enable&#39;</span><span style="color:#B392F0;">]</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6F42C1;">prometheus[</span><span style="color:#6F42C1;">&#39;enable&#39;</span><span style="color:#6F42C1;">]</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6F42C1;">alertmanager[</span><span style="color:#6F42C1;">&#39;enable&#39;</span><span style="color:#6F42C1;">]</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>重启Gitlab</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gitlab-ctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gitlab-ctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">reconfigure</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gitlab-ctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gitlab-ctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gitlab-ctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">reconfigure</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gitlab-ctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,10),o=[p];function t(r,c,i,d,y,b){return a(),l("div",null,o)}const h=s(e,[["render",t]]);export{E as __pageData,h as default};
