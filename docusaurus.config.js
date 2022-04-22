// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Wellness Monitor",
  tagline: "User manual",

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
      {
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
      },
    ],
  ],
  plugins: [],
  scripts: [
    // { src: "https://snack.expo.dev/embed.js", defer: true, "data-domain": "yourdomain.com" },
    { src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/js/fontawesome.min.js" },
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
  },
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        language: ["ru", "en", "fr", "zh"],
      },
    ],
  ],
  themeConfig: {
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
        // { to: "/blog", label: "Blog", position: "left" },
        {
          type: "search",
          position: "right",
        },
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
              label: "Presentation",
              to: "/docs/presentation/intro",
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
    // algolia: {
    //   // The application ID provided by Algolia
    //   appId: "7UHMLJZFX0",

    //   // Public API key: it is safe to commit it
    //   apiKey: "6f8111b1022991abb051e38dfe5ae27b",

    //   indexName: "Wellness_Monitor",

    //   // Optional: see doc section below
    //   contextualSearch: true,

    //   // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
    //   externalUrlRegex: "external\\.com|domain\\.com",

    //   // Optional: Algolia search parameters
    //   searchParameters: {},

    //   // Optional: path for search page that enabled by default (`false` to disable it)
    //   searchPagePath: "search",
    // },
  },
};

module.exports = config;
