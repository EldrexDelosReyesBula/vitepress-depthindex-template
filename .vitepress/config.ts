import { defineConfig } from 'vitepress'
import DepthIndex from 'vitepress-plugin-depthindex'

export default defineConfig({
  title: 'My Documentation',
  description: 'Documentation powered by DepthIndex AI',

  vite: {
    plugins: [
      DepthIndex({
        // Granular Index Download Strategy: 'full' | 'lazy' | 'eager' | 'offline'
        indexDownload: {
          strategy: 'full',
          maxCacheSizeMB: 50,
        },
        // Citations Style: 'superscript' | 'inline' | 'underline'
        citations: {
          style: 'superscript',
          showInlineCitations: true,
        },
        // References Section at Bottom of Answer
        references: {
          enabled: false,
          style: 'list',
        },
        // WebGPU Hardware Acceleration
        gpu: {
          enabled: true,
          fallback: 'silent',
        },
        // ──────────────────────────────────────────────────────────────
        // Experimental Local Intelligence Engine (v1.3.0+)
        // Enable for on-device NLU reasoning, Knowledge Graph traversal,
        // and 5-step answer synthesis — no cloud or API key required.
        // ──────────────────────────────────────────────────────────────
        // experimental: {
        //   enabled: false,          // Set to true to activate
        //   mode: 'auto',            // 'auto' | 'local' | 'disabled'
        //   modelSize: 'small',      // 'small' | 'medium'
        //   enableReasoning: true,   // Multi-step NLU pipeline
        //   enableKnowledgeGraph: true, // Cross-page concept graph
        // },
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
