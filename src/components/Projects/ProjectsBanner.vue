<script setup>
import FilterTab from '../Buttons/FilterTab.vue'

const filters = ['All Projects', 'Full Stack', 'Frontend']
</script>

<template>
  <div class="projects-banner-container">
    <header data-aos="zoom-in" data-aos-duration="1500">
      <div class="about-header">
        <span class="w-8 h-[2px] bg-[#8D84FB]"></span>
        MY WORK
        <span class="w-8 h-[2px] bg-[#8D84FB]"></span>
      </div>
    </header>
    <div data-aos="zoom-in" data-aos-duration="1500">
      <h1 class="featured-project">Featured Projects</h1>
      <p class="text-gray-500">
        A collection of things I've built — from full-stack web apps to client projects.
      </p>
    </div>

    <!-- TABS -->
    <main>
      <div class="flex items-center justify-center gap-5 flex-wrap">
        <FilterTab
          v-for="(filter, index) in filters"
          :key="index"
          :filter="filter"
          data-aos="fade-up"
          :data-aos-delay="index * 200"
        />
      </div>
    </main>
  </div>
</template>
