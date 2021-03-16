module.exports = {
  title: '[ rsapkf / notes ]',
  tagline: '"I\'m writing this down. This is good stuff." - George McFly',
  // url: 'https://rsapkf.github.io',
  url: 'https://rsapkf-notes.netlify.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'rsapkf', // Usually your GitHub org/user name.
  projectName: 'notes', // Usually your repo name.
  themeConfig: {
    // sidebarCollapsible: false,
    navbar: {
      title: '[ rsapkf / notes ]',
      logo: {
        alt: 'notes logo',
        src: 'img/undraw_Notebook.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Notes',
          position: 'right',
        },
        // { to: 'blog/', label: 'Blog', position: 'right' },
        {
          to: 'about/',
          activeBasePath: 'about',
          label: 'About',
          position: 'right',
        },
        {
          href: 'https://github.com/rsapkf/notes/',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://rsapkf.xyz/',
          label: 'rsapkf.xyz',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: '1de83fa2ba21b6cfbec9865ea4f26935',
      indexName: 'rsapkf',
      // appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Linux',
              to: 'docs/linux/linux/',
            },
            {
              label: 'Vim',
              to: 'docs/linux/vim/',
            },
            {
              label: 'Tmux',
              to: 'docs/linux/tmux/',
            },
          ],
        },
        {
          title: 'Categories',
          items: [
            {
              label: 'Linux',
              to: 'docs/linux/linux/',
            },
            {
              label: 'Programming',
              to: 'docs/programming/python/',
            },
            {
              label: 'Mathematics',
              to: 'docs/mathematics/martin-gardner/',
            },
          ],
        },
        {
          title: '',
          items: [
            {
              label: 'View All Notes',
              to: 'docs/',
            },
            {
              label: 'Blog',
              to: 'blog/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/rsapkf/notes/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} <a href="https://rsapkf.xyz/">rsapkf</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'linux/linux',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/rsapkf/notes/blob/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/rsapkf/notes/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
