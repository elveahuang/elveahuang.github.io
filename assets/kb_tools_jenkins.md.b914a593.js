import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.8f76c11e.js";const b=JSON.parse('{"title":"Jenkins","description":"","frontmatter":{},"headers":[],"relativePath":"kb/tools/jenkins.md","filePath":"kb/tools/jenkins.md","lastUpdated":1693669298000}'),p={name:"kb/tools/jenkins.md"},o=l(`<h1 id="jenkins" tabindex="-1">Jenkins <a class="header-anchor" href="#jenkins" aria-label="Permalink to &quot;Jenkins&quot;">​</a></h1><h2 id="安装部署" tabindex="-1">安装部署 <a class="header-anchor" href="#安装部署" aria-label="Permalink to &quot;安装部署&quot;">​</a></h2><h3 id="rhel" tabindex="-1">RHEL <a class="header-anchor" href="#rhel" aria-label="Permalink to &quot;RHEL&quot;">​</a></h3><p>安装</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 镜像</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">wget</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-O</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/yum.repos.d/jenkins.repo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://pkg.jenkins.io/redhat-stable/jenkins.repo</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">rpm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fontconfig</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">java-17-openjdk.x86_64</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">java-17-openjdk-devel.x86_64</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">java-17-openjdk-headless.x86_64</span></span>
<span class="line"><span style="color:#B392F0;">yum</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-y</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jenkins</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 镜像</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">wget</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-O</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/yum.repos.d/jenkins.repo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://pkg.jenkins.io/redhat-stable/jenkins.repo</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">rpm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fontconfig</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">java-17-openjdk.x86_64</span><span style="color:#24292E;"> </span><span style="color:#032F62;">java-17-openjdk-devel.x86_64</span><span style="color:#24292E;"> </span><span style="color:#032F62;">java-17-openjdk-headless.x86_64</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jenkins</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 新建数据目录和日志目录 </span></span>
<span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/data/app/data/jenkins</span></span>
<span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/data/app/build</span></span>
<span class="line"><span style="color:#6A737D;"># 赋予目录权限</span></span>
<span class="line"><span style="color:#B392F0;">chown</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-R</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jenkins.jenkins</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/data/app/data/jenkins</span></span>
<span class="line"><span style="color:#B392F0;">chown</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-R</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jenkins.jenkins</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/data/app/build</span></span>
<span class="line"><span style="color:#6A737D;"># 开启自启动</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jenkins</span></span>
<span class="line"><span style="color:#6A737D;"># 打开配置文件</span></span>
<span class="line"><span style="color:#B392F0;">vi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/usr/lib/systemd/system/jenkins.service</span></span>
<span class="line"><span style="color:#6A737D;"># 修改下面变量，其他网上介绍的方式都无效</span></span>
<span class="line"><span style="color:#E1E4E8;">Environment</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;JENKINS_PORT=8888&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">Environment</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;JENKINS_HOME=/data/app/data/jenkins&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">WorkingDirectory</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">/data/app/data/jenkins</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 新建数据目录和日志目录 </span></span>
<span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/data/app/data/jenkins</span></span>
<span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/data/app/build</span></span>
<span class="line"><span style="color:#6A737D;"># 赋予目录权限</span></span>
<span class="line"><span style="color:#6F42C1;">chown</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-R</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jenkins.jenkins</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/data/app/data/jenkins</span></span>
<span class="line"><span style="color:#6F42C1;">chown</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-R</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jenkins.jenkins</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/data/app/build</span></span>
<span class="line"><span style="color:#6A737D;"># 开启自启动</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jenkins</span></span>
<span class="line"><span style="color:#6A737D;"># 打开配置文件</span></span>
<span class="line"><span style="color:#6F42C1;">vi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/usr/lib/systemd/system/jenkins.service</span></span>
<span class="line"><span style="color:#6A737D;"># 修改下面变量，其他网上介绍的方式都无效</span></span>
<span class="line"><span style="color:#24292E;">Environment</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;JENKINS_PORT=8888&quot;</span></span>
<span class="line"><span style="color:#24292E;">Environment</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;JENKINS_HOME=/data/app/data/jenkins&quot;</span></span>
<span class="line"><span style="color:#24292E;">WorkingDirectory</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">/data/app/data/jenkins</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>系统服务</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">enable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jenkins</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">disable</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jenkins</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">start</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jenkins</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">stop</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jenkins</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">restart</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jenkins</span></span>
<span class="line"><span style="color:#B392F0;">sudo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">status</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">jenkins</span></span>
<span class="line"><span style="color:#B392F0;">systemctl</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">daemon-reload</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jenkins</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">disable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jenkins</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jenkins</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">stop</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jenkins</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">restart</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jenkins</span></span>
<span class="line"><span style="color:#6F42C1;">sudo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">status</span><span style="color:#24292E;"> </span><span style="color:#032F62;">jenkins</span></span>
<span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">daemon-reload</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,8),e=[o];function t(c,r,y,E,i,F){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{b as __pageData,u as default};
