<script setup>
import Menu from '../Icons/Menu.vue'
import Logo from '@/assets/Images/Logo.png'
import { ref } from 'vue'
import Close from '../Icons/Close.vue'
import { useRoute } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import Moon from '../Icons/Moon.vue'
import Sun from '../Icons/Sun.vue'

const theme = useThemeStore()
const route = useRoute()
const isOpen = ref(false)

const toggleNav = () => {
  isOpen.value = !isOpen.value
}
</script>
<template>
  <nav>
    <div class="mobile-nav-bar" :class="{ 'border-none': route.path === '/' }">
      <div class="flex items-center gap-4">
        <img :src="Logo" alt="logo" />
        <h1 class="text-xl font-secondary font-bold text-white">
          Geryk<span class="text-[#8D84FB]">.portfolio()</span>
        </h1>
      </div>
      <div @click="toggleNav" class="cursor-pointer">
        <Menu v-if="!isOpen" />
        <Close v-else />
      </div>
    </div>

    <!-- MOBILE NAV BAR PANEL -->
    <Transition name="nav-slide">
      <div v-if="isOpen" class="mobile-nav-panel">
        <div class="flex items-center mx-5">
          <ul class="mt-10 text-xl space-y-5 w-full" @click="isOpen = false">
            <li class="mobile-nav-link">
              <RouterLink to="/">Home</RouterLink>
            </li>
            <li class="mobile-nav-link">
              <RouterLink to="/about">About</RouterLink>
            </li>
            <li class="mobile-nav-link">
              <RouterLink to="/">Projects</RouterLink>
            </li>
            <li class="mobile-nav-link flex items-center gap-5">
              <h1>Dark Mode:</h1>
              <div @click="theme.toggleDark" class="cursor-pointer">
                <div
                  v-if="theme.isDark"
                  class="flex items-center gap-5 border border-gray-300 dark:bg-surface dark:text-white rounded-md p-2"
                >
                  <h1>On</h1>
                  <Moon />
                </div>
                <div v-else class="flex items-center gap-5 border border-gray-300 rounded-md p-2">
                  <h1>Off</h1>
                  <Sun />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </nav>
</template>
