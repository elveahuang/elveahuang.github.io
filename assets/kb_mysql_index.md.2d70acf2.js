import{_ as s,o as a,c as n,U as l}from"./chunks/framework.587922bd.js";const m=JSON.parse('{"title":"MySQL","description":"","frontmatter":{},"headers":[],"relativePath":"kb/mysql/index.md","filePath":"kb/mysql/index.md","lastUpdated":1688983389000}'),o={name:"kb/mysql/index.md"},p=l(`<h1 id="mysql" tabindex="-1">MySQL <a class="header-anchor" href="#mysql" aria-label="Permalink to &quot;MySQL&quot;">​</a></h1><h2 id="下载地址" tabindex="-1">下载地址 <a class="header-anchor" href="#下载地址" aria-label="Permalink to &quot;下载地址&quot;">​</a></h2><blockquote><p>阿里云镜像</p></blockquote><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># MySQL Community Server</span></span>
<span class="line"><span style="color:#FFCB6B;">https://mirrors.aliyun.com/mysql/Downloads/MySQL-8.0/mysql-8.0.33-macos13-arm64.dmg</span></span>
<span class="line"><span style="color:#FFCB6B;">https://mirrors.aliyun.com/mysql/Downloads/MySQL-8.0/mysql-8.0.33-macos13-x86_64.dmg</span></span>
<span class="line"><span style="color:#FFCB6B;">https://mirrors.aliyun.com/mysql/Downloads/MySQL-8.0/mysql-8.0.33-winx64.zip</span></span>
<span class="line"><span style="color:#FFCB6B;">https://mirrors.aliyun.com/mysql/Downloads/MySQL-8.0/mysql-8.0.33-1.el7.x86_64.rpm-bundle.tar</span></span>
<span class="line"><span style="color:#FFCB6B;">https://mirrors.aliyun.com/mysql/Downloads/MySQL-8.0/mysql-8.0.33-1.el8.x86_64.rpm-bundle.tar</span></span>
<span class="line"><span style="color:#FFCB6B;">https://mirrors.aliyun.com/mysql/Downloads/MySQL-8.0/mysql-8.0.33-1.el9.x86_64.rpm-bundle.tar</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># MySQL WorkBench</span></span>
<span class="line"><span style="color:#FFCB6B;">https://mirrors.aliyun.com/mysql/Downloads/MySQLGUITools/mysql-workbench-community-8.0.33-macos-x86_64.dmg</span></span>
<span class="line"><span style="color:#FFCB6B;">https://mirrors.aliyun.com/mysql/Downloads/MySQLGUITools/mysql-workbench-community-8.0.33-winx64.msi</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="创建用户" tabindex="-1">创建用户 <a class="header-anchor" href="#创建用户" aria-label="Permalink to &quot;创建用户&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 创建用户-外网</span></span>
<span class="line"><span style="color:#FFCB6B;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">USER</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">IDENTIFIED</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BY</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">DFox@007@2022</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 创建用户-内网</span></span>
<span class="line"><span style="color:#FFCB6B;">CREATE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">USER</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">lms</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">192.168.%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">IDENTIFIED</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BY</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">DFox@007</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="修改密码" tabindex="-1">修改密码 <a class="header-anchor" href="#修改密码" aria-label="Permalink to &quot;修改密码&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">USER</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">IDENTIFIED</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BY</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Root@123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">USER</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">192.168.%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">IDENTIFIED</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">BY</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Root@123456</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="授权" tabindex="-1">授权 <a class="header-anchor" href="#授权" aria-label="Permalink to &quot;授权&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 授权</span></span>
<span class="line"><span style="color:#FFCB6B;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ALL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PRIVILEGES</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ON</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TO</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">192.168.%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">WITH</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">OPTION</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ALL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">PRIVILEGES</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ON</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TO</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">WITH</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">GRANT</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">OPTION</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 刷新权限</span></span>
<span class="line"><span style="color:#FFCB6B;">flush</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">privileges</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,10),e=[p];function r(t,c,y,D,i,C){return a(),n("div",null,e)}const A=s(o,[["render",r]]);export{m as __pageData,A as default};