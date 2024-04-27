import { defineConfig } from 'vitepress'
import sidebar from './sidebar'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Web3 前端学习',
  description: '学习、构建、繁荣于 Web3 生态系统',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'BTC', link: '/btc/index' },
    ],

    sidebar,

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/IceHugh/web3-frontend-learning',
      },
    ],
    editLink: {
      pattern: 'https://github.com/IceHugh/web3-frontend-learning/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    search: {
      provider: 'local',
    },
    outline: 3,
  },
  lastUpdated: true,
  markdown: {
    image: {
      lazyLoading: true,
    },
    toc: {
      level: [1, 2],
    },
  },
})
