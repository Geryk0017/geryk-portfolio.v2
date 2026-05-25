<script setup lang="ts">
import FilterTab from '../Buttons/FilterTab.vue'

const filters = ['All Projects', 'Full Stack', 'Frontend', 'Backend', 'Open Source']
</script>

<template>
  <div class="projects-banner-container">
    <header>
      <div class="about-header">
        <span class="w-8 h-[2px] bg-[#8D84FB]"></span>
        MY WORK
        <span class="w-8 h-[2px] bg-[#8D84FB]"></span>
      </div>
    </header>
    <div>
      <h1 class="featured-project">Featured Projects</h1>
      <p class="text-gray-500">
        A collection of things I've built — from full-stack web apps to open source tools and client
        projects.
      </p>
    </div>

    <!-- TABS -->
    <main>
      <div class="flex items-center gap-5">
        <FilterTab v-for="(filter, index) in filters" :key="index" :filter="filter" />
      </div>
    </main>
  </div>
</template>
