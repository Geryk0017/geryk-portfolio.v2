<script setup>
import DesktopNavbar from './components/Layout/DesktopNavbar.vue'
import MobileNavbar from './components/Layout/MobileNavbar.vue'
</script>

<template>
  <MobileNavbar class="md:hidden" />
  <DesktopNavbar class="hidden md:flex" />
  <RouterView />
</template>
