import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
  title: 'Fermi Energy',
  tagline: 'Helping Developers Become Founders',
  favicon: 'img/favicon2.ico',

  // Set the production url of your site here
  url: 'https://www.fermienergy.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fermi', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.

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
        docs: false, // Changed this line - disabled docs
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/LOGO.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      title: 'Fermi Energy',
      logo: {
        alt: 'money bag',
        src: 'img/LOGO.png',
      },
      items: [
        { to: '/blog', label: 'News', position: 'left' },
        {
          to: '/dashboard', 
          label: 'Dashboard',
          position: 'right',
          className: 'navbar-dashboard-link',
        },
        {
          href: 'https://discord.gg/6q63Xa6SEB',
          className: 'header-discord-link',
          position: 'right',
        },
        {
          href: 'https://github.com/devtodollars/startup-boilerplate',
          position: 'right',
          className: 'header-github-link',
          ariaLabel: 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DevToDollars`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_brFjanMrA2KXPYyvFjLdwJC9VJvl4VG7mG9yKqvgCCY",
      },
    ],
    tailwindPlugin,
  ],
};

export default config;
