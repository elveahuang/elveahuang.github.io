import{_ as s,o as i,c as a,R as n}from"./chunks/framework.-OIHAGSN.js";const y=JSON.parse('{"title":"Windows","description":"","frontmatter":{},"headers":[],"relativePath":"kb/windows/index.md","filePath":"kb/windows/index.md","lastUpdated":1701052458000}'),t={name:"kb/windows/index.md"},l=n(`<h1 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h1><h2 id="下载地址" tabindex="-1">下载地址 <a class="header-anchor" href="#下载地址" aria-label="Permalink to &quot;下载地址&quot;">​</a></h2><p><a href="https://www.microsoft.com/en-us/software-download/windows10ISO" target="_blank" rel="noreferrer">Windows 10</a></p><p><a href="https://www.microsoft.com/en-us/software-download/windows11" target="_blank" rel="noreferrer">Windows 11</a></p><h2 id="镜像" tabindex="-1">镜像 <a class="header-anchor" href="#镜像" aria-label="Permalink to &quot;镜像&quot;">​</a></h2><p><a href="https://github.com/ntdevlabs/tiny11builder" target="_blank" rel="noreferrer">Tiny 11</a></p><h2 id="快捷键" tabindex="-1">快捷键 <a class="header-anchor" href="#快捷键" aria-label="Permalink to &quot;快捷键&quot;">​</a></h2><p><a href="https://zhuanlan.zhihu.com/p/460274555" target="_blank" rel="noreferrer">Tiny 11</a></p><h5 id="虚拟桌面" tabindex="-1">虚拟桌面 <a class="header-anchor" href="#虚拟桌面" aria-label="Permalink to &quot;虚拟桌面&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">操作</th><th style="text-align:center;">快捷键</th><th style="text-align:right;">备注</th></tr></thead><tbody><tr><td style="text-align:left;">打开任务视图</td><td style="text-align:center;">Win + Tab</td><td style="text-align:right;"></td></tr><tr><td style="text-align:left;">添加虚拟桌面</td><td style="text-align:center;">Win + Ctrl + D</td><td style="text-align:right;"></td></tr><tr><td style="text-align:left;">在右侧创建的虚拟桌面之间切换</td><td style="text-align:center;">Win + Ctrl + 右箭头</td><td style="text-align:right;"></td></tr><tr><td style="text-align:left;">在左侧创建的虚拟桌面之间切换</td><td style="text-align:center;">Win + Ctrl + 左箭头</td><td style="text-align:right;"></td></tr><tr><td style="text-align:left;">关闭您正在使用的虚拟桌面</td><td style="text-align:center;">Win + Ctrl + F4</td><td style="text-align:right;"></td></tr></tbody></table><h2 id="安装系统时使用本地账号" tabindex="-1">安装系统时使用本地账号 <a class="header-anchor" href="#安装系统时使用本地账号" aria-label="Permalink to &quot;安装系统时使用本地账号&quot;">​</a></h2><p>在联网界面，同时按住 Shift+F10，打开任务管理。</p><p>找到 Network Connection Flow/网络链接流，结束该进程。</p><h2 id="清除共享用户信息" tabindex="-1">清除共享用户信息 <a class="header-anchor" href="#清除共享用户信息" aria-label="Permalink to &quot;清除共享用户信息&quot;">​</a></h2><p>命令行</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 清除所有</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">net</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //@</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 清除指定链接</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">net</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\\\</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">192.168.0.250</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /del</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> //@</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>手工</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 方法一</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">控制面板-&gt;用户账户-&gt;凭据管理器-&gt;管理Windows凭据</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 方法二</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CMD-&gt;control</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> userpasswords2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">用户管理</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">高级</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">管理密码</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="家庭版安装hyper-v" tabindex="-1">家庭版安装Hyper-V <a class="header-anchor" href="#家庭版安装hyper-v" aria-label="Permalink to &quot;家庭版安装Hyper-V&quot;">​</a></h2><p><a href="https://learn.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v" target="_blank" rel="noreferrer">https://learn.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v</a></p><p>保存以下内容到hyperv.cmd，然后右键以管理员身份运行即可</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pushd </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%~dp0&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> %SystemRoot%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ervicing</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\P</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ackages</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Hyper-V</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.mum</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">hyper-v.txt</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /f %%i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;findstr /i . hyper-v.txt 2^&gt;nul&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> dism</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /online</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /norestart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /add-package:&quot;%SystemRoot%\\servicing\\Packages\\%%i&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">del</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hyper-v.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Dism</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /online</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /enable-feature</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /featurename:Microsoft-Hyper-V-All</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /LimitAccess</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /ALL</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="命令行断开防火墙端口" tabindex="-1">命令行断开防火墙端口 <a class="header-anchor" href="#命令行断开防火墙端口" aria-label="Permalink to &quot;命令行断开防火墙端口&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> advfirewall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name=HTTP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dir=in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action=allow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> protocol=TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> localport=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> advfirewall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name=HTTPS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dir=in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action=allow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> protocol=TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> localport=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">443</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> advfirewall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name=WSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dir=in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action=allow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> protocol=TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> localport=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">22</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> advfirewall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name=MySQL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dir=in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action=allow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> protocol=TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> localport=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3306</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> advfirewall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name=RabbitMQ</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dir=in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action=allow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> protocol=TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> localport=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5672</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> advfirewall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name=RabbitMQ</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dir=in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action=allow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> protocol=TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> localport=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15672</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netsh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> advfirewall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name=Redis</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dir=in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> action=allow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> protocol=TCP</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> localport=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6379</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="远程桌面服务" tabindex="-1">远程桌面服务 <a class="header-anchor" href="#远程桌面服务" aria-label="Permalink to &quot;远程桌面服务&quot;">​</a></h2><p><a href="https://learn.microsoft.com/zh-cn/windows-server/remote/remote-desktop-services/welcome-to-rds" target="_blank" rel="noreferrer">https://learn.microsoft.com/zh-cn/windows-server/remote/remote-desktop-services/welcome-to-rds</a></p>`,26),e=[l];function h(p,k,r,d,F,o){return i(),a("div",null,e)}const c=s(t,[["render",h]]);export{y as __pageData,c as default};
