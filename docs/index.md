<script setup>
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

const { theme } = useData()

const quickLinks = computed(() => {
  const sidebar = theme.value?.sidebar
  if (!Array.isArray(sidebar) || sidebar.length === 0) {
    return []
  }

  const firstSection = sidebar[0]
  return Array.isArray(firstSection?.items) ? firstSection.items : []
})
</script>

# 欢迎来到我的 VitePress 文档站

这是一个使用 VitePress 构建的文档站点。

## 快速链接

<ul>
  <li v-for="item in quickLinks" :key="item.link">
    <a :href="withBase(item.link)">{{ item.text }}</a>
  </li>
  <li><a href="https://github.com/David021022">GitHub</a></li>
</ul>
