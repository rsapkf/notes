/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
// const users = [
//   {
//     caption: 'Docusaurus',
//     // You will need to prepend the image path with your baseUrl
//     // if it is not '/', like: '/test-site/img/image.jpg'.
//     image: '/img/undraw_open_source.svg',
//     infoLink: 'https://docusaurus.io/',
//     pinned: true,
//   },
// ];

const siteConfig = {
  title: '[ rsapkf / notes ]', // Title for your website.
  tagline: "rsapkf's notes.",
  url: 'https://rsapkf.github.io', // Your website URL
  baseUrl: '/notes/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'notes',
  organizationName: 'rsapkf',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  algolia: {
    apiKey: '1de83fa2ba21b6cfbec9865ea4f26935',
    indexName: 'rsapkf',
    placeholder: 'Search',
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'linux/linux', label: 'Notes' },
    { page: 'about', label: 'About' },
    // { blog: true, label: 'Blog' },
    { search: true },
  ],

  // If you have users set above, you add it here:
  // users,

  /* path to images for header/footer */
  headerIcon: 'img/undraw_Notebook_tlkl.svg',
  // footerIcon: 'img/undraw_Notebook_tlkl.svg',
  favicon: 'img/undraw_Notebook_tlkl.svg',

  /* Colors for website */
  colors: {
    primaryColor: '#531670',
    secondaryColor: '#372a3b'
  },

  /* Custom fonts for website */
  fonts: {
    myFont: [
      "Ubuntu",
      "Open Sans",
      "monospace",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} rsapkf`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'agate'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],
  stylesheets: ['https://fonts.googleapis.com/css?family=Open+Sans|Ubuntu&display=swap'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  // ogImage: 'img/undraw_online.svg',
  // twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true,
  scrollToTop: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/rsapkf/notes',
  editUrl: 'https://github.com/rsapkf/notes/blob/master/docs/'
};

module.exports = siteConfig;
