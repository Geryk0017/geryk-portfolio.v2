<script setup>
import Logo from '@/assets/Images/Logo.png'
import { useRoute } from 'vue-router'
import ContactMe from '../Buttons/ContactMe.vue'
import Moon from '../Icons/Moon.vue'
import Sun from '../Icons/Sun.vue'
import { useThemeStore } from '@/stores/theme'

const theme = useThemeStore()
const route = useRoute()
</script>
<template>
  <nav>
    <div class="desktop-nav-bar" :class="{ ' border-none': route.path === '/' }">
      <div>
        <!-- LEFT SIDE -->
        <div class="left-side-container">
          <div class="flex items-center gap-4">
            <img :src="Logo" alt="logo" />
            <h1 class="text-xl font-secondary font-bold text-white">
              Geryk<span class="text-[#8D84FB]">folio</span>
            </h1>
          </div>
        </div>
      </div>

      <!-- Desktop Navbar -->
      <div class="flex gap-5">
        <ul>
          <li class="links"><RouterLink to="/">Home</RouterLink></li>
        </ul>
        <ul>
          <li class="links"><RouterLink to="/about">About Me</RouterLink></li>
        </ul>
        <ul>
          <li class="links"><RouterLink to="/projects">Projects</RouterLink></li>
        </ul>
      </div>
      <!-- RIGHT SIDE -->
      <div class="md:flex md:items-center md:gap-5">
        <div @click="theme.toggleDark" class="cursor-pointer">
          <Moon v-if="theme.isDark" />
          <Sun v-else />
        </div>
        <ContactMe name="Contact Me" />
      </div>
    </div>
  </nav>
</template>
