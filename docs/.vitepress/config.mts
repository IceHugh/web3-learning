import { defineConfig } from 'vitepress'
import sidebar from './sidebar'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Web3-Frontend-Learning',
  description: '前端开发',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'BTC', link: '/btc/index' },
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
