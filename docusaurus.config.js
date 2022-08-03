// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Wellness Monitor",
  tagline: "User manual",

  url: "https://ecotrain.github.io", // Your website URL
  baseUrl: "/WM_doc/",
  organizationName: "EcoTrain", // Usually your GitHub org/user name.
  projectName: "WM_doc", // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  staticDirectories: ['static'],

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
          customCss: [require.resolve("./src/css/custom.scss"), require.resolve("./src/css/font-awesome.min.css")],
        },
        sitemap: {},
      }),
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],
  scripts: [
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
      { property: "og:url", content: "https://ecotrain.github.io/WM_doc/" },
      { property: "og:title", content: "Wellness Monitor" },
      { property: "og:site_name", content: "User manual" },
      { property: "og:description", content: "Description of implemented functionality and plans for future releases" },
      { property: "og:image", content: "https://ecotrain.github.io/WM_doc/img/logo.svg" },
      { property: "og:image:secure_url", content: "https://ecotrain.github.io/WM_doc/img/logo.svg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "600" },
      { property: "og:image:alt", content: "Wellness Montor: user manual" },
      { property: "og:image:type", content: "image/svg+xml" },
      { property: "og:updated_time", content: "1650710013" },
    ],
    // announcementBar: {
    //   id: "myAnnouncementBarId",
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: "#fafbfc",
    //   textColor: "#091E42",
    //   isCloseable: true,
    // },
    navbar: {
      title: "",
      hideOnScroll: true,
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
        srcDark: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "guide/intro/guide_intro",
          position: "left",
          label: "Guide",
        },
        {
          type: "doc",
          docId: "releases/notes/release_notes",
          position: "left",
          label: "Releases",
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
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Guide",
              to: "/docs/guide",
            },
            {
              label: "Releases",
              to: "/docs/releases/notes",
            },
          ],
        },
        {
          title: "Contacts",
          items: [
            {
              label: "A2RD website",
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
          title: "Apps",
          items: [
            {
              label: "Web App",
              href: "https://wellness.a2rd.com/",
            },
          ],
        },
      ],
      logo: {
        alt: "A2 Research and Development Lab",
        src: "/img/logo_min.svg",
        href: "https://a2rd.com/",
        height: 30,
      },
      copyright: `Copyright © ${new Date().getFullYear()} A2 Research and Development Lab`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    image: "/img/logo.svg",
  },
};

module.exports = config;
