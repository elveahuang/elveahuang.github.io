module.exports = {
    title : '个人网站',
    description : '记录生活 & 记录工作',
    configureWebpack : {
        resolve : {
            alias : {
                '@assets' : 'public'
            }
        }
    },
    extend : '@vuepress/theme-default',
    themeConfig : {
        nav : [
            {text : '知识库', link : '/tech/'},
            {text : '随笔', link : '/blog/'},
        ],
        sidebar : {
            '/tech/' : [{
                title : '知识库',
                collapsable : false,
                children : [
                    'linux',
                ]
            }],
            '/blog/' : [{
                title : '随笔',
                collapsable : false,
                children : [
                    '2019-the-first-blog',
                ]
            }],
        }
    }
};
