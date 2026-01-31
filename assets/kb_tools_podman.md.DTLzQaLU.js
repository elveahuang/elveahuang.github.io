import{_ as n,o as a,c as p,ae as l}from"./chunks/framework.BD9pLfSD.js";const o=JSON.parse('{"title":"Podman","description":"","frontmatter":{},"headers":[],"relativePath":"kb/tools/podman.md","filePath":"kb/tools/podman.md","lastUpdated":1769869412000}'),e={name:"kb/tools/podman.md"};function i(r,s,c,b,u,t){return a(),p("div",null,[...s[0]||(s[0]=[l(`<h1 id="podman" tabindex="-1">Podman <a class="header-anchor" href="#podman" aria-label="Permalink to &quot;Podman&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dnf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> podman</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dnf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> podman-compose</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 卸载</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dnf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remove</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> podman-compose</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>消除警告</p></blockquote><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 打开环境变量配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.bashrc</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 增加下面内容</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PODMAN_COMPOSE_NO_ANSI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生效配置</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.bashrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>podman-compose</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 常用操作</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Docker Compose</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`bash</span></span>
<span class="line"><span># 创建镜像</span></span>
<span class="line"><span>docker compose create</span></span>
<span class="line"><span># 创建镜像</span></span>
<span class="line"><span>docker compose start redis</span></span>
<span class="line"><span>docker compose start mysql</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### 清理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`bash</span></span>
<span class="line"><span># 清理停止的容器、未被使用的网络、悬空镜像（无标签的镜像）</span></span>
<span class="line"><span>docker system prune</span></span>
<span class="line"><span># 扩展：清理所有未被使用的镜像（包括有标签但未被容器引用的）</span></span>
<span class="line"><span>docker system prune -a</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 安装</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Windows</span></span>
<span class="line"><span></span></span>
<span class="line"><span>配置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;debug&quot;: true,</span></span>
<span class="line"><span>    &quot;experimental&quot;: true,</span></span>
<span class="line"><span>    &quot;iptables&quot;: false,</span></span>
<span class="line"><span>    &quot;host&quot;: [</span></span>
<span class="line"><span>        &quot;0.0.0.0:2375&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;dns&quot;: [</span></span>
<span class="line"><span>        &quot;8.8.8.8&quot;,</span></span>
<span class="line"><span>        &quot;114.114.114.114&quot;</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>    &quot;registry-mirrors&quot;: [</span></span>
<span class="line"><span>        &quot;https://docker.m.daocloud.io&quot;,</span></span>
<span class="line"><span>        &quot;https://docker.xuanyuan.me&quot;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>防火墙</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`shell</span></span>
<span class="line"><span># 开启端口转发</span></span>
<span class="line"><span>netsh interface portproxy add v4tov4 listenport=2375 connectaddress=127.0.0.1 connectport=2375 listenaddress=192.168.0.10 protocol=tcp</span></span>
<span class="line"><span># 查看转发列表</span></span>
<span class="line"><span>netsh interface portproxy show all</span></span>
<span class="line"><span># 删除转发规则</span></span>
<span class="line"><span>netsh interface portproxy delete v4tov4 listenaddress=192.168.0.10 listenport=2375</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### MacOS</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`bash</span></span>
<span class="line"><span># 安装</span></span>
<span class="line"><span>brew install --cask docker</span></span>
<span class="line"><span># 卸载</span></span>
<span class="line"><span>brew uninstall docker</span></span>
<span class="line"><span># 验证是否安装成功</span></span>
<span class="line"><span>docker info</span></span>
<span class="line"><span>docker compose version</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>配置文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;builder&quot;: {</span></span>
<span class="line"><span>        &quot;gc&quot;: {</span></span>
<span class="line"><span>            &quot;defaultKeepStorage&quot;: &quot;20GB&quot;,</span></span>
<span class="line"><span>            &quot;enabled&quot;: true</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    &quot;experimental&quot;: false,</span></span>
<span class="line"><span>    &quot;features&quot;: {</span></span>
<span class="line"><span>        &quot;buildkit&quot;: true</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### RHEL</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### 基础安装</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`bash</span></span>
<span class="line"><span># ================================================================================================================</span></span>
<span class="line"><span># 安装</span></span>
<span class="line"><span># ================================================================================================================</span></span>
<span class="line"><span># 1. 删除旧版本</span></span>
<span class="line"><span>sudo yum remove docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-engine</span></span>
<span class="line"><span># 2. 配置仓库</span></span>
<span class="line"><span># 官方仓库</span></span>
<span class="line"><span>sudo yum install -y yum-utils</span></span>
<span class="line"><span>sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo</span></span>
<span class="line"><span># 阿里云仓库</span></span>
<span class="line"><span>sudo yum install -y yum-utils</span></span>
<span class="line"><span>sudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"><span># 3. 安装</span></span>
<span class="line"><span>sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin</span></span>
<span class="line"><span># ================================================================================================================</span></span>
<span class="line"><span># 4. 卸载</span></span>
<span class="line"><span># ================================================================================================================</span></span>
<span class="line"><span>rpm -e --nodeps docker-ce docker-ce-cli containerd.io</span></span>
<span class="line"><span># ================================================================================================================</span></span>
<span class="line"><span># 系统服务</span></span>
<span class="line"><span># ================================================================================================================</span></span>
<span class="line"><span># 随系统启动</span></span>
<span class="line"><span>systemctl enable docker.service</span></span>
<span class="line"><span># 禁用服务</span></span>
<span class="line"><span>systemctl disable docker.service</span></span>
<span class="line"><span># 启动服务</span></span>
<span class="line"><span>systemctl start docker.service</span></span>
<span class="line"><span># 停止服务</span></span>
<span class="line"><span>systemctl stop docker.service</span></span>
<span class="line"><span># 重启服务</span></span>
<span class="line"><span>systemctl restart docker.service</span></span>
<span class="line"><span># 查看状态</span></span>
<span class="line"><span>systemctl status docker.service</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### 维护管理</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`bash</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>docker -v</span></span>
<span class="line"><span># 列出所有镜像</span></span>
<span class="line"><span>docker images</span></span>
<span class="line"><span># 列出所有执行镜像</span></span>
<span class="line"><span>docker ps</span></span>
<span class="line"><span># 删除指定镜像</span></span>
<span class="line"><span>docker rmi &lt;IMAGE ID&gt;/&lt;repo&gt;</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### 加速镜像</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`bash</span></span>
<span class="line"><span>sudo mkdir -p /etc/docker</span></span>
<span class="line"><span>sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    &quot;debug&quot;: true,</span></span>
<span class="line"><span>    &quot;experimental&quot;: true,</span></span>
<span class="line"><span>    &quot;iptables&quot;: false,</span></span>
<span class="line"><span>    &quot;live-restore&quot;: true,</span></span>
<span class="line"><span>    &quot;host&quot;: [&quot;0.0.0.0:2375&quot;],</span></span>
<span class="line"><span>    &quot;registry-mirrors&quot;: [</span></span>
<span class="line"><span>        &quot;https://registry.cn-hangzhou.aliyuncs.com&quot;,</span></span>
<span class="line"><span>        &quot;https://docker.1ms.run&quot;,</span></span>
<span class="line"><span>        &quot;https://docker.xuanyuan.me&quot;,</span></span>
<span class="line"><span>        &quot;https://docker.m.daocloud.io&quot;</span></span>
<span class="line"><span>    ]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>sudo systemctl daemon-reload</span></span>
<span class="line"><span>sudo systemctl restart docker</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>检查是否成功</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`shell</span></span>
<span class="line"><span>docker info | awk &#39;/Registry Mirrors:/,/^[^ ]/&#39;</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>开启调试模式检查配置文件是否正确</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`shell</span></span>
<span class="line"><span>sudo dockerd --debug</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>查看服务配置文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`shell</span></span>
<span class="line"><span>cat /usr/lib/systemd/system/docker.service</span></span>
<span class="line"><span>\`\`\`</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 镜像</span></span>
<span class="line"><span></span></span>
<span class="line"><span>| registry                          | desc           |</span></span>
<span class="line"><span>|-----------------------------------|----------------|</span></span>
<span class="line"><span>| https://mirror.ccs.tencentyun.com | 腾讯云 腾讯云内部服务器专用 |</span></span>
<span class="line"><span>| https://xxx.mirror.aliyuncs.com   | 阿里云 阿里云内部服务器专用 |</span></span>
<span class="line"><span>| https://docker.xuanyuan.me        | 轩辕镜像免费版        |</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br></div></div>`,6)])])}const d=n(e,[["render",i]]);export{o as __pageData,d as default};
