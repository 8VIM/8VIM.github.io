import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "8VIM",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://8vim.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "8VIM", // Usually your GitHub org/user name.
  projectName: "8VIM.github.io", // Usually your repo name.
  deploymentBranch: "main",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  markdown: {
    mermaid: true,
  },
  themes: ["docusaurus-json-schema-plugin", "@docusaurus/theme-mermaid"],
 
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/8VIM/8VIM.github.io/blob/main/website/",
        },
        blog: {
          path: "./releases",
          routeBasePath:"/releases",
          blogTitle: "Releases",
          blogSidebarTitle: "Releases",
          showReadingTime: false,
          editUrl: "https://github.com/8VIM/8VIM.github.io/blob/main/website/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "8VIM",
      logo: {
        alt: "8VIM",
        src: "img/icon.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docSidebar",
          position: "left",
          label: "Usage",
        },
        { to: "/releases", label: "Releases", position: "left" },
        {
          href: "https://github.com/8VIM/8VIM",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Usage",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Matrix",
              href: "https://app.element.io/#/room/#8vim/lobby:matrix.org",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Releases",
              to: "/releases",
            },
            {
              label: "GitHub",
              href: "https://github.com/8VIM/8VIM",
            },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} 8VIM. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
