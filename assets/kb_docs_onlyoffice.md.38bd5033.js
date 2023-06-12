import{_ as s,o as n,c as a,O as l}from"./chunks/framework.3639b6a9.js";const f=JSON.parse('{"title":"OnlyOffice","description":"","frontmatter":{},"headers":[],"relativePath":"kb/docs/onlyoffice.md","filePath":"kb/docs/onlyoffice.md","lastUpdated":1686560784000}'),o={name:"kb/docs/onlyoffice.md"},e=l(`<h1 id="onlyoffice" tabindex="-1">OnlyOffice <a class="header-anchor" href="#onlyoffice" aria-label="Permalink to &quot;OnlyOffice&quot;">​</a></h1><h2 id="安装部署" tabindex="-1">安装部署 <a class="header-anchor" href="#安装部署" aria-label="Permalink to &quot;安装部署&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">onlyoffice/communityserver</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">9780</span><span style="color:#C3E88D;">:80</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--network</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">onlyoffice/communityserver</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看容器</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ps</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 进入容器</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-it</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">c60f49f6caa7</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/bin/bash</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 停止容器</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#C3E88D;">f4a335fe3e3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重启容器</span></span>
<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#C3E88D;">f4a335fe3e3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,3),p=[e];function c(t,r,i,C,y,A){return n(),a("div",null,p)}const d=s(o,[["render",c]]);export{f as __pageData,d as default};