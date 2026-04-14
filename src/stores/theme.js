import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(true)

  document.documentElement.classList.add('dark')

  const toggleDark = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark')
  }

  return { isDark, toggleDark }
})
