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
        hashed: true,
        language: ["ru", "en", "fr", "zh"],
      },
    ],
  ],
  themeConfig: {
    metadata: [
      { name: "description", content: "Description of implemented functionality and plans for future releases" },
      { name: "google-site-verification", content: "0CfiMkgVo_PlTRe2cJ0TP_RunVVfUpXpu7NEk-xNl-U" },
      { name: "robots", content: "all" },
      { name: "yandex", content: "all" },
      { name: "googlebot", content: "all" },
      { name: "googlebot-news", content: "all" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ecotrain.github.io/wellness_doc/" },
      { property: "og:title", content: "Wellness Monitor" },
      { property: "og:site_name", content: "User manual" },
      { property: "og:description", content: "Description of implemented functionality and plans for future releases" },
      { property: "og:image:url", content: "https://ecotrain.github.io/wellness_doc/img/logo.svg" },
      { property: "og:image:secure_url", content: "https://ecotrain.github.io/wellness_doc/img/logo.svg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "600" },
      { property: "og:image:alt", content: "Wellness Montor: user manual" },
    ],
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
              to: "/docs/presentation",
            },
          ],
        },
        {
          title: "Contacts",
          items: [
            {
              label: "A2RD site",
              href: "https://www.a2rd.com",
            },
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
  },
};

module.exports = config;
