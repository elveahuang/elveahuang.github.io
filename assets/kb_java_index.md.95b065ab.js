import{_ as a,o as s,c as n,U as l}from"./chunks/framework.587922bd.js";const y=JSON.parse('{"title":"Java","description":"","frontmatter":{},"headers":[],"relativePath":"kb/java/index.md","filePath":"kb/java/index.md","lastUpdated":1688981524000}'),e={name:"kb/java/index.md"},p=l(`<h1 id="java" tabindex="-1">Java <a class="header-anchor" href="#java" aria-label="Permalink to &quot;Java&quot;">​</a></h1><h2 id="jdk" tabindex="-1">JDK <a class="header-anchor" href="#jdk" aria-label="Permalink to &quot;JDK&quot;">​</a></h2><h3 id="macos" tabindex="-1">MacOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;MacOS&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前安装目录</span></span>
<span class="line"><span style="color:#FFCB6B;">/usr/libexec/java_home</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="服务器排查" tabindex="-1">服务器排查 <a class="header-anchor" href="#服务器排查" aria-label="Permalink to &quot;服务器排查&quot;">​</a></h2><h3 id="cpu" tabindex="-1">CPU <a class="header-anchor" href="#cpu" aria-label="Permalink to &quot;CPU&quot;">​</a></h3><p><a href="https://www.cnblogs.com/zuidongfeng/p/10019262.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/zuidongfeng/p/10019262.html</a></p><h3 id="查看进程" tabindex="-1">查看进程 <a class="header-anchor" href="#查看进程" aria-label="Permalink to &quot;查看进程&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#FFCB6B;">top</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#FFCB6B;">ps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ef</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">java</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看进程中最耗cpu的子线程</span></span>
<span class="line"><span style="color:#FFCB6B;">top</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-p</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxxx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-H</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 将最耗cpu的线程id转换为16进制输出</span></span>
<span class="line"><span style="color:#82AAFF;">printf</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%x \\n</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxxx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查询具体出现问题的代码位置</span></span>
<span class="line"><span style="color:#FFCB6B;">jstack</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxxx</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xxxx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-A</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,9),o=[p];function t(r,c,i,d,b,h){return s(),n("div",null,o)}const u=a(e,[["render",t]]);export{y as __pageData,u as default};
