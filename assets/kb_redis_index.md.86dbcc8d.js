import{_ as s,o as a,c as n,O as e}from"./chunks/framework.3639b6a9.js";const b=JSON.parse('{"title":"Redis","description":"","frontmatter":{},"headers":[],"relativePath":"kb/redis/index.md","filePath":"kb/redis/index.md","lastUpdated":1686560784000}'),l={name:"kb/redis/index.md"},p=e(`<h1 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-label="Permalink to &quot;Redis&quot;">​</a></h1><h2 id="命令行" tabindex="-1">命令行 <a class="header-anchor" href="#命令行" aria-label="Permalink to &quot;命令行&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">keys</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ACTIVITY_CACHE:1009779799457271810</span></span>
<span class="line"><span style="color:#FFCB6B;">keys</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ACTIVITY_CACHE:1009098904945434626</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">del</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ACTIVITY_CACHE::1009098904945434626</span></span>
<span class="line"><span style="color:#FFCB6B;">del</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ACTIVITY_CRITERIA_CACHE::1009098904945434626</span></span>
<span class="line"><span style="color:#FFCB6B;">del</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ACTIVITY_CRITERIA_RULE_CACHE::1009098904945434626</span></span>
<span class="line"><span style="color:#FFCB6B;">del</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ACTIVITY_STATISTICS_CACHE::1009098904945434626</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,3),r=[p];function o(t,c,i,C,d,_){return a(),n("div",null,r)}const m=s(l,[["render",o]]);export{b as __pageData,m as default};