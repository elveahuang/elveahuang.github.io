import{_ as s,c as n,o as a,a2 as p}from"./chunks/framework.DFdqYCe2.js";const k=JSON.parse('{"title":"OAuth","description":"","frontmatter":{},"headers":[],"relativePath":"kb/java/oauth.md","filePath":"kb/java/oauth.md","lastUpdated":1710302872000}'),e={name:"kb/java/oauth.md"},i=p(`<h1 id="oauth" tabindex="-1">OAuth <a class="header-anchor" href="#oauth" aria-label="Permalink to &quot;OAuth&quot;">​</a></h1><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p><a href="https://oauth.net/2/" target="_blank" rel="noreferrer">OAuth 2.0</a> 是一种用于认证的行业标准协议，为Web应用，桌面应用，移动电话和客厅设备提供特定的授权流程。 其规范和扩展由 <a href="https://www.ietf.org/mailman/listinfo/oauth" target="_blank" rel="noreferrer">IETF OAuth Working Group</a> 开发。</p><p><a href="https://oauth.net/2.1/" target="_blank" rel="noreferrer">OAuth 2.1</a> 规范现在正在进行中，致力于整合和简化现有的 <a href="https://oauth.net/2/" target="_blank" rel="noreferrer">OAuth 2.0</a> 。</p><h2 id="名词定义" tabindex="-1">名词定义 <a class="header-anchor" href="#名词定义" aria-label="Permalink to &quot;名词定义&quot;">​</a></h2><ul><li><p>Resource Owner</p><p>资源所有者，一般称为用户。</p></li><li><p>Authorization server</p><p>认证服务器，专门用于处理认证的服务器。</p></li><li><p>Resource server</p><p>资源服务器，可以与认证服务器同一台服务器，也可以独立于认证服务器。</p></li><li><p>Client</p><p>客户端。</p></li><li><p>Access Token</p><p>访问令牌。</p></li><li><p>Refresh Token</p><p>刷新令牌。</p></li><li><p>User Agent</p><p>用户代理，一般指浏览器。</p></li></ul><h2 id="授权模式" tabindex="-1">授权模式 <a class="header-anchor" href="#授权模式" aria-label="Permalink to &quot;授权模式&quot;">​</a></h2><h3 id="authorization-code" tabindex="-1">Authorization Code <a class="header-anchor" href="#authorization-code" aria-label="Permalink to &quot;Authorization Code&quot;">​</a></h3><blockquote><p>授权码模式 这是当前流程最完整，使用最广泛的授权模式</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>     +----------+</span></span>
<span class="line"><span>     | Resource |</span></span>
<span class="line"><span>     |   Owner  |</span></span>
<span class="line"><span>     |          |</span></span>
<span class="line"><span>     +----------+</span></span>
<span class="line"><span>          ^</span></span>
<span class="line"><span>          |</span></span>
<span class="line"><span>         (B)</span></span>
<span class="line"><span>     +----|-----+          Client Identifier      +---------------+</span></span>
<span class="line"><span>     |         -+----(A)-- &amp; Redirection URI ----&gt;|               |</span></span>
<span class="line"><span>     |  User-   |                                 | Authorization |</span></span>
<span class="line"><span>     |  Agent  -+----(B)-- User authenticates ---&gt;|     Server    |</span></span>
<span class="line"><span>     |          |                                 |               |</span></span>
<span class="line"><span>     |         -+----(C)-- Authorization Code ---&lt;|               |</span></span>
<span class="line"><span>     +-|----|---+                                 +---------------+</span></span>
<span class="line"><span>       |    |                                         ^      v</span></span>
<span class="line"><span>      (A)  (C)                                        |      |</span></span>
<span class="line"><span>       |    |                                         |      |</span></span>
<span class="line"><span>       ^    v                                         |      |</span></span>
<span class="line"><span>     +---------+                                      |      |</span></span>
<span class="line"><span>     |         |&gt;---(D)-- Authorization Code ---------&#39;      |</span></span>
<span class="line"><span>     |  Client |          &amp; Redirection URI                  |</span></span>
<span class="line"><span>     |         |                                             |</span></span>
<span class="line"><span>     |         |&lt;---(E)----- Access Token -------------------&#39;</span></span>
<span class="line"><span>     +---------+       (w/ Optional Refresh Token)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><ol><li>用户访问客户端，客户端将用户导向认证服务器。</li></ol><p>导向认证服务器时，会附带上客户端的标识（client identifier），请求范围（requested scope）， 本地状态（local state）和重定向地址(redirection URI) 。认证服务器会验证请求，确保所有参数都有效 的时候，会引导用户进入授权页面。</p><p>示例:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 请求</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https://github.com/login/oauth/authorize?response_type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=code&amp;client_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">xxx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;scope</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">read:user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;state</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">xxx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;redirect_uri</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://127.0.0.1:8081/login/oauth2/code/github&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># 参数说明</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">response_type   授权类型，必填，授权码模式固定为code。       </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">client_id       客户端ID，必填，一般都是在认证服务器申请应用是颁发。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">redirect_uri    重定向地址。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">state           客户端当前状态，认证服务器会原封不动返回。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol start="2"><li><p>用户选择是否给与客户端授权。当点击确认授权时，认证服务器将用户导向前面已经指定的重定向地址（Redirection URI）， 并附上一个授权码（code）和状态参数（state）。</p></li><li><p>客户端获得授权码后，向认证服务器请求令牌，认证服务器核对授权码和重定向地址，确认无误后，向客户端办法访问令牌（Access Token） 和刷新令牌（Refresh Token）。</p></li></ol><p>示例:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 请求</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https://github.com/login/oauth/access_token</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 参数说明</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">response_type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   授权类型，必填，授权码模式固定为authorization_code。</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">code</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            授权码，必填。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">client_id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       客户端标识，必填。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">client_secret</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   客户端密钥，必填。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">redirect_uri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    重定向地址。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="implicit-grant" tabindex="-1">Implicit Grant <a class="header-anchor" href="#implicit-grant" aria-label="Permalink to &quot;Implicit Grant&quot;">​</a></h3><blockquote><p>简化模式</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>     +----------+</span></span>
<span class="line"><span>     | Resource |</span></span>
<span class="line"><span>     |  Owner   |</span></span>
<span class="line"><span>     |          |</span></span>
<span class="line"><span>     +----------+</span></span>
<span class="line"><span>          ^</span></span>
<span class="line"><span>          |</span></span>
<span class="line"><span>         (B)</span></span>
<span class="line"><span>     +----|-----+          Client Identifier     +---------------+</span></span>
<span class="line"><span>     |         -+----(A)-- &amp; Redirection URI ---&gt;|               |</span></span>
<span class="line"><span>     |  User-   |                                | Authorization |</span></span>
<span class="line"><span>     |  Agent  -|----(B)-- User authenticates --&gt;|     Server    |</span></span>
<span class="line"><span>     |          |                                |               |</span></span>
<span class="line"><span>     |          |&lt;---(C)--- Redirection URI ----&lt;|               |</span></span>
<span class="line"><span>     |          |          with Access Token     +---------------+</span></span>
<span class="line"><span>     |          |            in Fragment</span></span>
<span class="line"><span>     |          |                                +---------------+</span></span>
<span class="line"><span>     |          |----(D)--- Redirection URI ----&gt;|   Web-Hosted  |</span></span>
<span class="line"><span>     |          |          without Fragment      |     Client    |</span></span>
<span class="line"><span>     |          |                                |    Resource   |</span></span>
<span class="line"><span>     |     (F)  |&lt;---(E)------- Script ---------&lt;|               |</span></span>
<span class="line"><span>     |          |                                +---------------+</span></span>
<span class="line"><span>     +-|--------+</span></span>
<span class="line"><span>       |    |</span></span>
<span class="line"><span>      (A)  (G) Access Token</span></span>
<span class="line"><span>       |    |</span></span>
<span class="line"><span>       ^    v</span></span>
<span class="line"><span>     +---------+</span></span>
<span class="line"><span>     |         |</span></span>
<span class="line"><span>     |  Client |</span></span>
<span class="line"><span>     |         |</span></span>
<span class="line"><span>     +---------+</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><ol><li>用户访问客户端，客户端将用户导向认证服务器。</li></ol><p>导向认证服务器时，会附带上客户端的标识（client identifier），请求范围（requested scope）， 本地状态（local state）和重定向地址(redirection URI) 。认证服务器会验证请求，确保所有参数都有效 的时候，会引导用户进入授权页面。</p><p>示例:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 请求</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https://github.com/login/oauth/authorize?response_type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=token&amp;client_id</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">xxx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;scope</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">read:user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;state</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">xxx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;redirect_uri</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://127.0.0.1:8081/login/oauth2/code/github&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"># 参数说明</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">response_type   授权类型，必填，授权码模式固定为token。       </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">client_id       客户端ID，必填，一般都是在认证服务器申请应用是颁发。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">redirect_uri    重定向地址。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">scope           权限范围。</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">state           客户端当前状态，认证服务器会原封不动返回。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3"><li>认证服务器核验证请求，确保所有参数都已提交并且都有效，确认无误后，会展示授权页面给用户，用户同意授权时， 认证服务器会直接向客户端颁发访问令牌（Access Token）。</li></ol><h3 id="resource-owner-password-credentials-grant" tabindex="-1">Resource Owner Password Credentials Grant <a class="header-anchor" href="#resource-owner-password-credentials-grant" aria-label="Permalink to &quot;Resource Owner Password Credentials Grant&quot;">​</a></h3><blockquote><p>密码模式 这种模式下，用户必须向客户端提供账号密码，客户端不能保存密码，所以必须是对客户端完全信任的情况下。 所以一般情况下，使用该授权模式时，必须是认证服务器无法执行其他授权模式的情况下，才考虑使用。</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>     +----------+</span></span>
<span class="line"><span>     | Resource |</span></span>
<span class="line"><span>     |  Owner   |</span></span>
<span class="line"><span>     |          |</span></span>
<span class="line"><span>     +----------+</span></span>
<span class="line"><span>          v</span></span>
<span class="line"><span>          |    Resource Owner</span></span>
<span class="line"><span>         (A) Password Credentials</span></span>
<span class="line"><span>          |</span></span>
<span class="line"><span>          v</span></span>
<span class="line"><span>     +---------+                                  +---------------+</span></span>
<span class="line"><span>     |         |&gt;--(B)---- Resource Owner -------&gt;|               |</span></span>
<span class="line"><span>     |         |         Password Credentials     | Authorization |</span></span>
<span class="line"><span>     | Client  |                                  |     Server    |</span></span>
<span class="line"><span>     |         |&lt;--(C)---- Access Token ---------&lt;|               |</span></span>
<span class="line"><span>     |         |    (w/ Optional Refresh Token)   |               |</span></span>
<span class="line"><span>     +---------+                                  +---------------+</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><ol><li><p>用户向客户端提供用户名和密码。</p></li><li><p>客户端将用户提供的用户和密码发送给认证服务器，并请求访问令牌。</p></li><li><p>认证服务器确认身份信息无误后，向客户端颁发访问令牌。</p></li></ol><h3 id="client-credentials-grant" tabindex="-1">Client Credentials Grant <a class="header-anchor" href="#client-credentials-grant" aria-label="Permalink to &quot;Client Credentials Grant&quot;">​</a></h3><blockquote><p>客户端模式</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>     +---------+                                  +---------------+</span></span>
<span class="line"><span>     |         |                                  |               |</span></span>
<span class="line"><span>     |         |&gt;--(A)- Client Authentication ---&gt;| Authorization |</span></span>
<span class="line"><span>     | Client  |                                  |     Server    |</span></span>
<span class="line"><span>     |         |&lt;--(B)---- Access Token ---------&lt;|               |</span></span>
<span class="line"><span>     |         |                                  |               |</span></span>
<span class="line"><span>     +---------+                                  +---------------+</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ol><li><p>客户端向认证服务器请求身份认证和访问令牌。</p></li><li><p>认证服务器确认身份信息无误后，向客户端颁发访问令牌。</p></li></ol><h3 id="refresh-token" tabindex="-1">Refresh Token <a class="header-anchor" href="#refresh-token" aria-label="Permalink to &quot;Refresh Token&quot;">​</a></h3><blockquote><p>刷新</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>  +--------+                                           +---------------+</span></span>
<span class="line"><span>  |        |--(A)------- Authorization Grant ---------&gt;|               |</span></span>
<span class="line"><span>  |        |                                           |               |</span></span>
<span class="line"><span>  |        |&lt;-(B)----------- Access Token -------------|               |</span></span>
<span class="line"><span>  |        |               &amp; Refresh Token             |               |</span></span>
<span class="line"><span>  |        |                                           |               |</span></span>
<span class="line"><span>  |        |                            +----------+   |               |</span></span>
<span class="line"><span>  |        |--(C)---- Access Token ----&gt;|          |   |               |</span></span>
<span class="line"><span>  |        |                            |          |   |               |</span></span>
<span class="line"><span>  |        |&lt;-(D)- Protected Resource --| Resource |   | Authorization |</span></span>
<span class="line"><span>  | Client |                            |  Server  |   |     Server    |</span></span>
<span class="line"><span>  |        |--(E)---- Access Token ----&gt;|          |   |               |</span></span>
<span class="line"><span>  |        |                            |          |   |               |</span></span>
<span class="line"><span>  |        |&lt;-(F)- Invalid Token Error -|          |   |               |</span></span>
<span class="line"><span>  |        |                            +----------+   |               |</span></span>
<span class="line"><span>  |        |                                           |               |</span></span>
<span class="line"><span>  |        |--(G)----------- Refresh Token -----------&gt;|               |</span></span>
<span class="line"><span>  |        |                                           |               |</span></span>
<span class="line"><span>  |        |&lt;-(H)----------- Access Token -------------|               |</span></span>
<span class="line"><span>  +--------+           &amp; Optional Refresh Token        +---------------+</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,36),l=[i];function r(t,c,h,b,o,u){return a(),n("div",null,l)}const m=s(e,[["render",r]]);export{k as __pageData,m as default};