import { defineConfig } from 'vitepress'

export default defineConfig({
  // GitHub Pages project site base path
  base: '/my-vitepress-docs/',

  title: 'My VitePress Docs',
  description: 'A VitePress documentation site',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Codex Guide', link: '/guide/codex-guide' },
          { text: 'Markdown Examples', link: '/guide/markdown-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/David021022' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present David021022'
    }
  }
})
