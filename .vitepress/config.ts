import { defineConfig } from 'vitepress'
import DepthIndex from 'vitepress-plugin-depthindex'

export default defineConfig({
  title: 'My Documentation',
  description: 'Documentation powered by DepthIndex AI',

  vite: {
    plugins: [
      DepthIndex() as any
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
          { text: 'Example Page', link: '/guide/example' }
        ]
      },
      {
        text: 'API Reference',
        items: [
          { text: 'Overview', link: '/api/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/YOUR_USERNAME' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Powered by DepthIndex',
      copyright: 'Copyright © 2026'
    }
  }
})
