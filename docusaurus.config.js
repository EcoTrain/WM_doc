// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Wellness Assistant",
  tagline: "Documentation",

  url: "https://ecotrain.github.io", // Your website URL
  baseUrl: "/wellness_doc/",
  organizationName: "EcoTrain", // Usually your GitHub org/user name.
  projectName: "wellness_doc", // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/EcoTrain/newmed_docs/tree/master/docs",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/EcoTrain/newmed_docs/tree/master/blog",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css"), require.resolve("./src/css/font-awesome.min.css")],
        },
      }),
    ],
  ],
  scripts: [
    // { src: "https://snack.expo.dev/embed.js", defer: true, "data-domain": "yourdomain.com" },
    { src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/js/fontawesome.min.js" },
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
  },
  themes: ["@docusaurus/theme-search-algolia"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "documentation/documentation_intro",
          //   position: "left",
          //   label: "Documentation",
          // },
          {
            type: "doc",
            docId: "presentation/intro/presentation_intro",
            position: "left",
            label: "Presentation",
          },
          {
            type: "doc",
            docId: "tutorials/tutorial_intro",
            position: "left",
            label: "Tutorial",
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/EcoTrain/newmed_docs",
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
                label: "Tutorial",
                to: "/docs/documentation",
              },
            ],
          },
          {
            title: "Contacts",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/a2_development",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/aleksey.romanov.7",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/EcoTrain/newmed_docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} A2 Research and Development Lab`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        contextualSearch: true,
      },
    }),
};

module.exports = config;
