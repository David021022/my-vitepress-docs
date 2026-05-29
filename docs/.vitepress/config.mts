import { defineConfig } from 'vitepress'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'

function toTitle(fileName: string): string {
  const stem = fileName.replace(/\.md$/, '')
  return stem
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function getGuideItems() {
  const guideDir = join(process.cwd(), 'docs', 'guide')

  return readdirSync(guideDir)
    .filter((file) => file.endsWith('.md'))
    .sort()
    .map((file) => {
      const stem = file.replace(/\.md$/, '')
      return {
        text: toTitle(file),
        link: `/guide/${stem}`
      }
    })
}

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
        items: getGuideItems()
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
