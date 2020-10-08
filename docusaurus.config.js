module.exports = {
  title: 'Mai',
  tagline: 'A Discord Bot Based Around Anime',
  url: 'https://mai-san.ml/',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  favicon: 'https://maisans-maid.github.io/mai.moe/images/main_profile.png',
  organizationName: 'Maiden Sen', // Usually your GitHub org/user name.
  projectName: 'Mai', // Usually your repo name.
  themeConfig: {
   announcementBar: {
    id: 'support_us', // Any value that will identify this message.
    content:
       'Coming Soon',
     backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: true, // Defaults to `true`.
  },
    navbar: {
       hideOnScroll: true,
      title: 'Mai - A discord bot',
      logo: {
        alt: 'Mai',
        src: 'https://maisans-maid.github.io/mai.moe/images/main_profile.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: '/about/',
          label: 'About Mai',
          position: 'left',
          activeBaseRegex: `/about/`,
        },
        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://discord.com/oauth2/authorize?client_id=702074452317307061&scope=bot&permissions=1043721303',
          label: 'Invite Now',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      
      copyright: `Copyright © ${new Date().getFullYear()} Mai | Made by Sakurajimai#6742`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      },
    ],
  ],
};
