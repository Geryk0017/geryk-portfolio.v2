<script setup>
import TechStackCard from '../Cards/TechStackCard.vue'
import AboutHeader from './AboutHeader.vue'

const card = [
  {
    title: 'Frontend',
    type: 'frontend',
  },
  {
    title: 'Backend',
    type: 'backend',
  },
  {
    title: 'Database, Version Control, and Deployment',
    type: 'database',
  },
]
</script>

<template>
  <div class="space-y-10">
    <AboutHeader title="techstack" />
    <h1 class="font-secondary text-[40px]">
      Technologies I work with to build <br />
      modern web applications.
    </h1>
    <!-- TECHSTACK CARDS -->
    <div class="flex flex-col space-y-5 md:space-y-0 md:flex-row md:gap-5">
      <TechStackCard
        v-for="(item, index) in card"
        :key="index"
        :title="item.title"
        :type="item.type"
      />
    </div>
  </div>
</template>
