import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ditup",
  description: "Do It Together: Turn Ideas into Collaborative Action",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
      { text: "Roadmap", link: "/roadmap" },
    ],

    sidebar: [
      { text: "About", link: "/about" },
      {
        text: "Planning",
        items: [
          { text: "Roadmap", link: "/roadmap" },
          { text: "Architecture", link: "/architecture" },
        ],
      },
    ],

    socialLinks: [
      { icon: "matrix", link: "https://matrix.to/#/#ditup:matrix.org" },
      { icon: "github", link: "https://github.com/ditup/ditup" },
    ],

    logo: {
      light: "logo-black.svg",
      dark: "logo-white.svg",
    },
  },
  head: [["link", { rel: "icon", href: "logo-white.svg" }]],
});
