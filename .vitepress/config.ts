import { defineConfig } from 'vitepress'
import DepthIndex from 'vitepress-plugin-depthindex'

export default defineConfig({
  title: 'My Documentation',
  description: 'Powered by DepthIndex AI',

  vite: {
    plugins: [
      DepthIndex({
        // Use all defaults — works out of the box
      }) as any
    ]
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/' },
          { text: 'Example', link: '/guide/example' }
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'Overview', link: '/api/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YOUR_USERNAME' }
    ],

    footer: {
      message: 'Powered by DepthIndex',
      copyright: 'Copyright © 2026'
    }
  }
})
