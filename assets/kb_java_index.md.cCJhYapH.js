import{_ as a,c as i,a0 as n,o as e}from"./chunks/framework.D5XSuxOt.js";const o=JSON.parse('{"title":"Java","description":"","frontmatter":{},"headers":[],"relativePath":"kb/java/index.md","filePath":"kb/java/index.md","lastUpdated":1736577353000}'),l={name:"kb/java/index.md"};function p(t,s,h,r,k,d){return e(),i("div",null,s[0]||(s[0]=[n(`<h1 id="java" tabindex="-1">Java <a class="header-anchor" href="#java" aria-label="Permalink to &quot;Java&quot;">​</a></h1><h2 id="jdk" tabindex="-1">JDK <a class="header-anchor" href="#jdk" aria-label="Permalink to &quot;JDK&quot;">​</a></h2><h3 id="macos" tabindex="-1">MacOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;MacOS&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看当前安装目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/usr/libexec/java_home</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="服务器排查" tabindex="-1">服务器排查 <a class="header-anchor" href="#服务器排查" aria-label="Permalink to &quot;服务器排查&quot;">​</a></h2><h3 id="cpu" tabindex="-1">CPU <a class="header-anchor" href="#cpu" aria-label="Permalink to &quot;CPU&quot;">​</a></h3><p><a href="https://www.cnblogs.com/zuidongfeng/p/10019262.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/zuidongfeng/p/10019262.html</a></p><h3 id="查看进程" tabindex="-1">查看进程 <a class="header-anchor" href="#查看进程" aria-label="Permalink to &quot;查看进程&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">top</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> java</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看进程中最耗cpu的子线程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">top</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxxx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -H</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 将最耗cpu的线程id转换为16进制输出</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">printf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;%x \\n&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxxx</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查询具体出现问题的代码位置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">jstack</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxxx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xxxx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 30</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,9)]))}const b=a(l,[["render",p]]);export{o as __pageData,b as default};