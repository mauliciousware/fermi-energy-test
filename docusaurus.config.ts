import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
  title: 'Fermi Energy',
  tagline: 'Combat climate change with disruptive battery technologies',
  favicon: 'img/favicon2.ico',

  // SEO and site configuration
  url: 'https://www.fermienergy.com',
  baseUrl: '/',
  trailingSlash: true,
  organizationName: 'fermi',
  projectName: 'website',

  // Error handling
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Site presets
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // SEO metadata
    metadata: [
      {name: 'keywords', content: 'battery technology, cathode materials, electric vehicle, energy storage, EV batteries, Virginia Tech, manganese, cobalt, lithium, sustainability, green energy'},
      {name: 'description', content: 'Fermi Energy develops innovative cathode technologies for sustainable, high-performance EV batteries. Leading the charge in next-generation energy storage solutions.'},
      {name: 'application-name', content: 'Fermi Energy'},
      {name: 'apple-mobile-web-app-title', content: 'Fermi Energy'},
      {name: 'author', content: 'Fermi Energy, Inc.'},
      
      // Open Graph metadata
      {property: 'og:title', content: 'Fermi Energy - Advanced Battery Technology'},
      {property: 'og:description', content: 'Pioneering sustainable battery technologies for the future of electric vehicles'},
      {property: 'og:image', content: 'img/LOGO.png'},
      {property: 'og:url', content: 'https://www.fermienergy.com'},
      {property: 'og:type', content: 'website'},
      
      // Twitter Card metadata
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'Fermi Energy - Battery Innovation'},
      {name: 'twitter:description', content: 'Developing next-generation cathode materials for sustainable EV batteries'},
      {name: 'twitter:image', content: 'img/LOGO.png'},
      
      // Geo metadata
      {name: 'geo.region', content: 'US-VA'},
      {name: 'geo.placename', content: 'Blacksburg'},
      {name: 'geo.position', content: '37.2296;-80.4139'},
      {name: 'ICBM', content: '37.2296, -80.4139'}
    ],

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
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fermi Energy`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },

  // Additional plugins for SEO
  plugins: [
    tailwindPlugin,
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_brFjanMrA2KXPYyvFjLdwJC9VJvl4VG7mG9yKqvgCCY",
      },
    ],
  ],
};

export default config;
