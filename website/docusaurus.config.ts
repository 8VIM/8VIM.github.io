import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "8VIM",
  tagline: "A small screen keyboard inspired by VIM and 8Pen",
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
  plugins: ["docusaurus-plugin-sass"],
  themes: [
    "docusaurus-json-schema-plugin",
    "@docusaurus/theme-mermaid",
    "@orama/plugin-docusaurus-v3",
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/8VIM/8VIM.github.io/blob/main/website/",
          lastVersion: "current",
          versions: {
            current: {
              label: "Latest",
              path: "/",
            },
            "0.16.x": {
              label: "<= 0.16.x",
            },
          },
        },
        blog: {
          path: "./releases",
          routeBasePath: "/releases",
          blogTitle: "Releases",
          blogSidebarTitle: "Releases",
          blogSidebarCount: "ALL",
          showReadingTime: false,
          editUrl: "https://github.com/8VIM/8VIM.github.io/blob/main/website/",
          feedOptions: {
            type: "all",
            title: "8VIM releases",
            description: "Keep yourself up-to-date about all releases",
            copyright: `${new Date().getFullYear()} 8VIM. Built with Docusaurus.`,
            language: "en",
          },
        },
        theme: {
          customCss: "./src/css/custom.scss",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    mermaid: {
      theme: {
        light: "neutral",
        dark: "dark",
      },
    },
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
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: true,
        },
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
              to: "/docs",
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
