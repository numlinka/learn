import { defineConfig } from "vitepress"

export default defineConfig({
  lang: "zh_CN",
  title: "Learn",
  description: "Simplify complex things",
  lastUpdated: true,
 
  head: [
    ["link", { rel: "icon", href: "/static/favicon.png" }]
  ],

  themeConfig: {
    logo: "/static/favicon.png",
    outline: [2, 3],
    outlineTitle: "页面导航",
    lastUpdatedText: "最后更新于",

    nav: [
      { text: "编程语言", link: "/code"},
      { text: "技术应用", link: "/technical" },
      { text: "操作系统", link: "/os" }
    ],

    sidebar: {
      "/": [],
  
      "/code/python/": [
        {
          text: "Python",
          items: [
            { text: "编码规范", link: "/code/python/standardization" },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/numlinka/learn" }
    ],

    footer: {
      message: "Licensed under the CC BY-NC-SA 4.0",
      copyright: "Copyright © 2024 numlinka"
    },

    editLink: {
      pattern: "https://github.com/numlinka/learn/edit/master/:path",
      text: "在 GitHub 上编辑此页面"
    },

    docFooter: {
      prev: "上一页",
      next: "下一页"
    },
  }
})
