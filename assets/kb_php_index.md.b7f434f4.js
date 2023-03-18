import{_ as s,c as n,o as a,N as l}from"./chunks/framework.1e6a71f2.js";const b=JSON.parse('{"title":"PHP","description":"","frontmatter":{},"headers":[],"relativePath":"kb/php/index.md","lastUpdated":1679116992000}'),p={name:"kb/php/index.md"},e=l(`<h1 id="php" tabindex="-1">PHP <a class="header-anchor" href="#php" aria-label="Permalink to &quot;PHP&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><h3 id="rhel" tabindex="-1">RHEL <a class="header-anchor" href="#rhel" aria-label="Permalink to &quot;RHEL&quot;">​</a></h3><h4 id="_1-更新系统-确保系统是最新的。" tabindex="-1">1. 更新系统，确保系统是最新的。 <a class="header-anchor" href="#_1-更新系统-确保系统是最新的。" aria-label="Permalink to &quot;1. 更新系统，确保系统是最新的。&quot;">​</a></h4><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clean</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dnf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dnf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dnf-utils</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="_2-安装" tabindex="-1">2. 安装 <a class="header-anchor" href="#_2-安装" aria-label="Permalink to &quot;2. 安装&quot;">​</a></h4><h5 id="el8" tabindex="-1">EL8 <a class="header-anchor" href="#el8" aria-label="Permalink to &quot;EL8&quot;">​</a></h5><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># EL8</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dnf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://rpms.remirepo.net/enterprise/remi-release-7.rpm</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dnf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://rpms.remirepo.net/enterprise/remi-release-8.rpm</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查询可用的版本</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dnf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重置并启用最新的PHP模块</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dnf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php:remi-</span><span style="color:#F78C6C;">8.2</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dnf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dnf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">module</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php:remi-</span><span style="color:#F78C6C;">8.2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dnf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-cli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-common</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-fpm</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 检查是否安装成功</span></span>
<span class="line"><span style="color:#FFCB6B;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 安装扩展</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 格式 - sudo dnf install php-(extension_name)</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dnf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-mysql</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dnf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-sodium</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-xml</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dnf</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-{common,mysql,xml,xmlrpc,curl,gd,imagick,cli,fpm,mbstring,opcache,zip,sodium}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h5 id="el7" tabindex="-1">EL7 <a class="header-anchor" href="#el7" aria-label="Permalink to &quot;EL7&quot;">​</a></h5><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">## EL7</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://rpms.remirepo.net/enterprise/remi-release-7.rpm</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum-utils</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum-config-manager</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--disable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">remi-php*</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum-config-manager</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remi-php81</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-{cli,fpm,mysqlnd,zip,devel,gd,mbstring,curl,xml,pear,bcmath,json}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="_3-php-fpm" tabindex="-1">3. php-fpm <a class="header-anchor" href="#_3-php-fpm" aria-label="Permalink to &quot;3. php-fpm&quot;">​</a></h4><p>配置</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># vi /etc/php-fpm.d/www.conf</span></span>
<span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"><span style="color:#FFCB6B;">group</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/run/php-fpm/www.sock</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="_4-启动" tabindex="-1">4. 启动 <a class="header-anchor" href="#_4-启动" aria-label="Permalink to &quot;4. 启动&quot;">​</a></h4><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 随系统启动</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-fpm</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 取消系统启动</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">disable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-fpm</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 启动服务</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-fpm</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重启服务</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-fpm</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重新加载</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reload</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-fpm</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 停止服务</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-fpm</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看状态</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">status</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-fpm</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h4 id="_4-nginx" tabindex="-1">4. Nginx <a class="header-anchor" href="#_4-nginx" aria-label="Permalink to &quot;4. Nginx&quot;">​</a></h4><div class="language-nginx line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">nginx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">server</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> listen </span><span style="color:#A6ACCD;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;"> server_name </span><span style="color:#A6ACCD;">localhost</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">/ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> root </span><span style="color:#A6ACCD;">  /var/www/html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> index </span><span style="color:#A6ACCD;"> index.html index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">!-e $</span><span style="color:#A6ACCD;">request_filename) </span><span style="color:#F07178;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">rewrite</span><span style="color:#F07178;">  </span><span style="color:#C3E88D;">^(.*)$</span><span style="color:#F07178;">  /index.php?s=/</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;"> last;</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">break;</span></span>
<span class="line"><span style="color:#F07178;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\\.php$ </span><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> root </span><span style="color:#A6ACCD;">          /var/www/html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> fastcgi_split_path_info </span><span style="color:#C3E88D;">^(.+\\.php)(/.+)$</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> fastcgi_pass </span><span style="color:#A6ACCD;">unix:/run/php-fpm/www.sock</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> fastcgi_index </span><span style="color:#A6ACCD;">index.php</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> include </span><span style="color:#A6ACCD;">fastcgi_params</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> fastcgi_param </span><span style="color:#A6ACCD;">SCRIPT_FILENAME </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">document_root</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">fastcgi_script_name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#89DDFF;"> fastcgi_param </span><span style="color:#A6ACCD;">PATH_INFO </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">fastcgi_path_info</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="composer" tabindex="-1">Composer <a class="header-anchor" href="#composer" aria-label="Permalink to &quot;Composer&quot;">​</a></h2><h3 id="镜像设置" tabindex="-1">镜像设置 <a class="header-anchor" href="#镜像设置" aria-label="Permalink to &quot;镜像设置&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 更新</span></span>
<span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">self-update</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 清空缓存</span></span>
<span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clear</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 全局设置</span></span>
<span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">repos.packagist</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://mirrors.cloud.tencent.com/composer/</span></span>
<span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">repos.packagist</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://mirrors.aliyun.com/composer/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 项目项目</span></span>
<span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">repos.packagist</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://mirrors.aliyun.com/composer/</span></span>
<span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">repos.packagist</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://mirrors.cloud.tencent.com/composer/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 恢复官方镜像</span></span>
<span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--unset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">repos.packagist</span></span>
<span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">repos.packagist</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://packagist.org</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="xdebug" tabindex="-1">XDebug <a class="header-anchor" href="#xdebug" aria-label="Permalink to &quot;XDebug&quot;">​</a></h2><h3 id="macos" tabindex="-1">MacOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;MacOS&quot;">​</a></h3><h4 id="编译安装" tabindex="-1">编译安装 <a class="header-anchor" href="#编译安装" aria-label="Permalink to &quot;编译安装&quot;">​</a></h4><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#FFCB6B;">brew</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">autoconf</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xcode-select</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-switch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/Applications/Xcode.app</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#FFCB6B;">/Applications/XAMPP/xamppfiles/bin/phpize-7.4.8</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/configure</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--enable-xdebug</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--with-php-config=/Applications/XAMPP/xamppfiles/bin/php-config-7.4.8</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#FFCB6B;">make</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">modules/</span><span style="color:#A6ACCD;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/Applications/XAMPP/xamppfiles/lib/php/extensions/no-debug-non-zts-</span><span style="color:#F78C6C;">20190902</span><span style="color:#C3E88D;">/</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="pecl-安装" tabindex="-1">PECL 安装 <a class="header-anchor" href="#pecl-安装" aria-label="Permalink to &quot;PECL 安装&quot;">​</a></h4><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Intel</span></span>
<span class="line"><span style="color:#FFCB6B;">arch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-x86_64</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pecl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xdebug</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># M1</span></span>
<span class="line"><span style="color:#FFCB6B;">arch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-arm64e</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pecl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">xdebug</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="配置-macos" tabindex="-1">配置 - MacOS <a class="header-anchor" href="#配置-macos" aria-label="Permalink to &quot;配置 - MacOS&quot;">​</a></h4><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">xdebug</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">zend_extension</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xdebug.so</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">xdebug.mode=debug</span></span>
<span class="line"><span style="color:#FFCB6B;">xdebug.idekey=XDebugIDE</span></span>
<span class="line"><span style="color:#FFCB6B;">xdebug.start_with_request=trigger</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="配置-windows" tabindex="-1">配置 - Windows <a class="header-anchor" href="#配置-windows" aria-label="Permalink to &quot;配置 - Windows&quot;">​</a></h4><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">xdebug</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">zend_extension</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">php_xdebug.dll</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">zend_extension</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">D:\\Dev\\php\\xampp\\php\\ext\\php_xdebug.dll</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">xdebug.mode=debug</span></span>
<span class="line"><span style="color:#FFCB6B;">xdebug.idekey=XDebugIDE</span></span>
<span class="line"><span style="color:#FFCB6B;">xdebug.start_with_request=trigger</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,30),o=[e];function r(c,t,i,C,y,D){return a(),n("div",null,o)}const m=s(p,[["render",r]]);export{b as __pageData,m as default};
