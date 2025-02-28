import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AIHealth-LL',
  tagline: 'A Living Lab on the Development of Artificial Intelligence-enabled Systems for Health',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://gillamga.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'gillamga', // Usually your GitHub org/user name.
  projectName: 'VCU-Living-Lab', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/gillamga/VCU-Living-Lab/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gillamga/VCU-Living-Lab/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Living Lab',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/gillamga/VCU-Living-Lab',
          label: 'GitHub',
          position: 'right',
        },
        { to: 'docs/program', label: 'Program', position: 'left' },
        { to: '/team', label: 'Team', position: 'left' },
        { to: '/governance', label: 'Governance', position: 'left' },
        { to: '/partners', label: 'Partners', position: 'left' },
        { to: '/apply', label: 'Apply', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      //default links left for future styling reference

      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/gillamga/VCU-Living-Lab',
      //       },
      //     ],
      //   },
      // ],
      links: [
        {
          html: `
            <div style="text-align: center;">
              <div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
                <a href="https://www.vcuhealth.org/" style="display: inline-block;">
                  <img
                    src="/img/VCU/VCU_H_Gold lettering - 4C.png"
                    alt="VCU Logo"
                    style="width: 150px; height: auto;"
                  />
                </a>
                <a href="https://www.nsf.gov/" style="display: inline-block;">
                  <img
                    src="/img/VCU/1019px-NSF_logo.png"
                    alt="NSF Logo"
                    style="width: 130px; height: auto;"
                  />
                </a>
              </div>
            </div>
          `,
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AIHealth`,
    },
    prism: {
      theme: prismThemes.gruvboxMaterialLight,
      darkTheme: prismThemes.synthwave84,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
