import { defineConfig } from 'vitepress'

export default defineConfig({
  // 必须设置！与仓库名一致
  base: '/my-vitepress-docs/',
  
  title: 'My VitePress Docs',
  description: 'A VitePress documentation site',
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' }
    ],
    
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Getting Started', link: '/guide/getting-started' }
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