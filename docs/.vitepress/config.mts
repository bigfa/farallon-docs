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
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: "https://farallon.wpista.com/wp-content/themes/Farallon/build/images/avatar.jpeg",
        nav: [
            { text: "首页", link: "/" },
            { text: "演示地址", link: "https://farallon.wpista.com/" },
        ],

        sidebar: [
            {
                text: "简介",
                items: [
                    { text: "关于", link: "/guide/" },
                    { text: "开始使用", link: "/guide/getting-started" },
                    { text: "修改主题", link: "/guide/modify-theme" },
                ],
            },
            {
                text: "设置",
                items: [
                    { text: "sns", link: "/config/sns" },
                    { text: "菜单", link: "/config/menu" },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/bigfa/Farallon" },
        ],
    },
});
