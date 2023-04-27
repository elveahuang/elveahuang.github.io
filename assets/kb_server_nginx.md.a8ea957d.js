import{_ as s,c as n,o as a,O as l}from"./chunks/framework.0d343703.js";const A=JSON.parse('{"title":"Nginx","description":"","frontmatter":{},"headers":[],"relativePath":"kb/server/nginx.md","lastUpdated":1682564112000}'),p={name:"kb/server/nginx.md"},e=l(`<h1 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h1><h2 id="rhel-在线安装" tabindex="-1">RHEL - 在线安装 <a class="header-anchor" href="#rhel-在线安装" aria-label="Permalink to &quot;RHEL - 在线安装&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看Nginx信息</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">info</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装最新版本</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://nginx.org/packages/rhel/</span><span style="color:#F78C6C;">9</span><span style="color:#C3E88D;">/x86_64/RPMS/nginx-1.24.0-1.el9.ngx.x86_64.rpm</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://nginx.org/packages/rhel/</span><span style="color:#F78C6C;">8</span><span style="color:#C3E88D;">/x86_64/RPMS/nginx-1.24.0-1.el8.ngx.x86_64.rpm</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://nginx.org/packages/rhel/</span><span style="color:#F78C6C;">7</span><span style="color:#C3E88D;">/x86_64/RPMS/nginx-1.24.0-1.el7.ngx.x86_64.rpm</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="rhel-编译安装" tabindex="-1">RHEL - 编译安装 <a class="header-anchor" href="#rhel-编译安装" aria-label="Permalink to &quot;RHEL - 编译安装&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># GCC</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gcc-c++</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># PCRE</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pcre</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pcre-devel</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Zlib</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zlib</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zlib-devel</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OpenSSL</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openssl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openssl-devel</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 解压缩</span></span>
<span class="line"><span style="color:#FFCB6B;">tar</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-zxvf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx-1.16.1.tar.gz</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-C</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">temp</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 进入源码目录</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx-1.16.1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 配置</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># --prefix 安装目录</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># --http_ssl_module 启用 HTTPS 协议</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># --http_stub_status_module 启用状态监控支持</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># --http_gzip_static_module 启用 GZip 支持</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># --with-stream 启用 TCP 代理</span></span>
<span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/configure</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--prefix=/data/app/tools/nginx-proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--with-http_ssl_module</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--with-http_stub_status_module</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--with-http_gzip_static_module</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--with-stream</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--without-http_rewrite_module</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 编译安装</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">make</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="macos-在线安装" tabindex="-1">MacOS - 在线安装 <a class="header-anchor" href="#macos-在线安装" aria-label="Permalink to &quot;MacOS - 在线安装&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 启动服务</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">services</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重启服务</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">services</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 停止服务</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">services</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看目录</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">info</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="ubuntu-在线安装" tabindex="-1">Ubuntu - 在线安装 <a class="header-anchor" href="#ubuntu-在线安装" aria-label="Permalink to &quot;Ubuntu - 在线安装&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="rhel-系统服务" tabindex="-1">RHEL - 系统服务 <a class="header-anchor" href="#rhel-系统服务" aria-label="Permalink to &quot;RHEL - 系统服务&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 随系统启动</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx.service</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 取消系统启动</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">disable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx.service</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 启动服务</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx.service</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重启服务</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx.service</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重新加载</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reload</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx.service</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 停止服务</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx.service</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看状态</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx.service</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to &quot;常用命令&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 启动</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 此方式相当于先查出nginx进程id再使用kill命令强制杀掉进程。</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 此方式停止步骤是待nginx进程处理任务完毕进行停止。</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">quit</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 修改配置文件nginx.conf后，用此方式能让配置生效而不重启</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reload</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看路径</span></span>
<span class="line"><span style="color:#FFCB6B;">ps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">aux</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-V</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看配置文件并检查配置文件是否有效</span></span>
<span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看进程</span></span>
<span class="line"><span style="color:#FFCB6B;">ps</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ef</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 检查端口</span></span>
<span class="line"><span style="color:#FFCB6B;">netstat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-ntlp</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 检查端口</span></span>
<span class="line"><span style="color:#FFCB6B;">netstat</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-tulpn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">80</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="常用配置-gzip" tabindex="-1">常用配置 - GZip <a class="header-anchor" href="#常用配置-gzip" aria-label="Permalink to &quot;常用配置 - GZip&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Gzip</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 是否启用</span></span>
<span class="line"><span style="color:#FFCB6B;">gzip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 小于设置值的文件将不会压缩</span></span>
<span class="line"><span style="color:#FFCB6B;">gzip_min_length</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">1k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置gzip压缩针对的HTTP协议版本</span></span>
<span class="line"><span style="color:#FFCB6B;">gzip_http_version</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 禁用低版本IE的Gzip压缩</span></span>
<span class="line"><span style="color:#FFCB6B;">gzip_disable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MSIE [1-6]\\.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置压缩所需要的缓冲区大小</span></span>
<span class="line"><span style="color:#FFCB6B;">gzip_buffers</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">8k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 压缩级别，越大压缩越好也越占用CPU</span></span>
<span class="line"><span style="color:#FFCB6B;">gzip_comp_level</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">6</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 无条件压缩所有结果数据</span></span>
<span class="line"><span style="color:#FFCB6B;">gzip_proxied</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">any</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># MIME</span></span>
<span class="line"><span style="color:#FFCB6B;">gzip_types</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">text/plain</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">text/css</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">application/x-javascript</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">text/xml</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">application/xml</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">application/xml+rss</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">application/javascript</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">text/javascript</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">application/json</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="常用配置-ssl" tabindex="-1">常用配置 - SSL <a class="header-anchor" href="#常用配置-ssl" aria-label="Permalink to &quot;常用配置 - SSL&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># SSL</span></span>
<span class="line"><span style="color:#FFCB6B;">ssl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">ssl_certificate</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/data/app/tools/ssl/server.crt</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">ssl_certificate_key</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/data/app/tools/ssl/server.key</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 客户端能够重复使用存储在缓存中的会话参数时间</span></span>
<span class="line"><span style="color:#FFCB6B;">ssl_session_timeout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">5m</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 指定使用的ssl协议</span></span>
<span class="line"><span style="color:#FFCB6B;">ssl_protocols</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TLSv1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TLSv1.</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">TLSv1.</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 指定许可的密码描述</span></span>
<span class="line"><span style="color:#FFCB6B;">ssl_ciphers</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ECDH:AESGCM:HIGH:!RC4:!DH:!MD5:!aNULL:!eNULL</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># SSLv3和TLSv1协议的服务器密码需求优先级高于客户端密码</span></span>
<span class="line"><span style="color:#FFCB6B;">ssl_prefer_server_ciphers</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,17),o=[e];function t(r,c,i,y,C,D){return a(),n("div",null,o)}const u=s(p,[["render",t]]);export{A as __pageData,u as default};