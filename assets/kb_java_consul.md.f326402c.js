import{_ as s,o as a,c as n,U as l}from"./chunks/framework.587922bd.js";const d=JSON.parse('{"title":"Consul","description":"","frontmatter":{},"headers":[],"relativePath":"kb/java/consul.md","filePath":"kb/java/consul.md","lastUpdated":1688981524000}'),e={name:"kb/java/consul.md"},o=l(`<h1 id="consul" tabindex="-1">Consul <a class="header-anchor" href="#consul" aria-label="Permalink to &quot;Consul&quot;">​</a></h1><h2 id="安装部署" tabindex="-1">安装部署 <a class="header-anchor" href="#安装部署" aria-label="Permalink to &quot;安装部署&quot;">​</a></h2><h3 id="macos" tabindex="-1">MacOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;MacOS&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tap</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hashicorp/tap</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">hashicorp/tap/consul</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 启动服务</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">services</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">consul</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 停止</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">services</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">consul</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重启服务</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">services</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">consul</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,4),p=[o];function t(r,c,i,C,y,u){return a(),n("div",null,p)}const h=s(e,[["render",t]]);export{d as __pageData,h as default};
