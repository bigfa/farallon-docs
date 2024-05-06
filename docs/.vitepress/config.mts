import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Farallon",
    description: "a fast wordpress theme",
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "https://farallon.wpista.com/wp-content/themes/Farallon/build/images/favicon.png",
            },
        ],
    ],
    lastUpdated: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "https://farallon.wpista.com/wp-content/themes/Farallon/build/images/avatar.jpeg",
        nav: [
            { text: "首页", link: "/" },
            { text: "演示地址", link: "https://farallon.wpista.com/" },
        ],
        footer: {
            message: "Made with 💗",
            copyright: "Copyright ©  bigfa",
        },
        sidebar: [
            {
                text: "简介",
                items: [
                    { text: "关于", link: "/guide/" },
                    { text: "开始使用", link: "/guide/getting-started" },
                    { text: "修改主题", link: "/guide/modify-theme" },
                    { text: "更新主题", link: "/guide/update" },
                ],
            },
            {
                text: "设置",
                items: [
                    { text: "SNS", link: "/config/sns" },
                    { text: "菜单", link: "/config/menu" },
                    { text: "CDN", link: "/config/cdn" },
                    { text: "小工具", link: "/config/widget" },
                    { text: "自定义设置", link: "/config/custom" },
                ],
            },
            {
                text: "文章",
                items: [
                    { text: "分类", link: "/writing/category" },
                    { text: "文章", link: "/writing/post" },
                    { text: "状态", link: "/writing/status" },
                    { text: "页面", link: "/writing/template" },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/bigfa/Farallon" },
            { icon: "mastodon", link: "https://github.com/bigfa/Farallon" },
        ],
    },
});
