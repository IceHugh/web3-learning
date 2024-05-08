import { defineConfig } from '@lando/vitepress-theme-default-plus/config'
import sidebar from './sidebar'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Web3 Learning',
  description: '学习、构建、繁荣于 Web3 生态系统',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/webp',
        href: '/web3-learning.webp',
      },
    ],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh-CN' }],
    ['meta', { name: 'og:site_name', content: 'Web3 Learning' }],
    [
      'meta',
      {
        name: 'og:image',
        content: 'https://web3-learning.noalone.xyz/web3-learning.webp',
      },
    ],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:title', content: 'Web3 Learning' }],
    [
      'meta',
      {
        name: 'twitter:description',
        content: '学习、构建、繁荣于 Web3 生态系统',
      },
    ],
  ],
  feeds: {
    feed: {
      patterns: ['/blog/**/*.md'],
    },
  },
  themeConfig: {
    logo: { src: '/web3-learning.webp' },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'BTC', link: '/btc/index' },
    ],

    sidebar,
    tags: {
      test: {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M11.5 8a3.5 3.5 0 0 0 3.362-4.476c-.094-.325-.497-.39-.736-.15L12.099 5.4a.48.48 0 0 1-.653.033 8.554 8.554 0 0 1-.879-.879.48.48 0 0 1 .033-.653l2.027-2.028c.24-.239.175-.642-.15-.736a3.502 3.502 0 0 0-4.476 3.427c.018.99-.133 2.093-.914 2.7l-5.31 4.13a2.015 2.015 0 1 0 2.828 2.827l4.13-5.309c.607-.78 1.71-.932 2.7-.914L11.5 8ZM3 13.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" /></svg>',
      },
    },
    tagLink: '/tags?tag=:tag-id',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/IceHugh/web3-frontend-learning',
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path fill-rule="evenodd" d="M3.75 4.5a.75.75 0 0 1 .75-.75h.75c8.284 0 15 6.716 15 15v.75a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75v-.75C18 11.708 12.292 6 5.25 6H4.5a.75.75 0 0 1-.75-.75V4.5Zm0 6.75a.75.75 0 0 1 .75-.75h.75a8.25 8.25 0 0 1 8.25 8.25v.75a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75v-.75a6 6 0 0 0-6-6H4.5a.75.75 0 0 1-.75-.75v-.75Zm0 7.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd" /></svg>',
        },
        link: '/feed.rss',
      },
    ],
    contributors: {
      merge: 'name',
      debotify: true,
      include: [
        {
          avatar: 'https://avatars.githubusercontent.com/u/20093364',
          name: 'IceHugh',
          email: 'ygz14835187@163.com',
          desc: 'A chill dude',
          links: [{ icon: 'github', link: 'https://github.com/IceHugh' }],
          maintainer: true,
          mergeOnly: true,
        },
      ],
    },
    editLink: {
      pattern:
        'https://github.com/IceHugh/web3-frontend-learning/edit/main/docs/:path',
      // text: 'Edit this page on GitHub',
    },
    search: {
      provider: 'local',
    },
    outline: 3,
  },

  lastUpdated: true,
  robots: {
    host: 'https://web3-learning.noalone.xyz/',
    sitemap: 'https://web3-learning.noalone.xyz/sitemap.xml',
    allowAll: true,
  },
  sitemap: {
    hostname: 'https://web3-learning.noalone.xyz',
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
    toc: {
      level: [1, 2],
    },
  },
})
