import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "casa",
  description: "A VitePress Site",
  base: '/casa/',
  locales: {
    root: {
      label: 'Norsk',
      lang: 'no'
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/home'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'facebook', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
