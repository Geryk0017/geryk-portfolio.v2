<script setup>
import TechStackChip from '../Chip/TechStackChip.vue'

const frontend = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'Tailwind CSS' },
  { name: 'JavaScript' },
  { name: 'Vue.js' },
  { name: 'Inertia.js', color: 'circle-blue' },
]

const backend = [
  { name: 'PHP' },
  { name: 'Laravel' },
  { name: 'C++', color: 'circle-blue' },
  { name: 'C#', color: 'circle-blue' },
  { name: 'Java', color: 'circle-blue' },
]

const db_deployment = [
  { name: 'MySQL' },
  { name: 'Git' },
  { name: 'BitBucket' },
  { name: 'Linux Server', color: 'circle-blue' },
  { name: 'PuTTY', color: 'circle-blue' },
]
</script>

<template>
  <div>
    <div class="flex items-center pb-5 space-x-3">
      <div class="gradient-shape"></div>
      <p class="gradient-text uppercase font-bold text-[20px]">MY TECHSTACK</p>
    </div>

    <div class="text-white space-y-5">
      <h1 class="text-[40px] font-bold">Technologies I work With</h1>
      <p>A curated set of tools and frameworks I use to build full stack applications.</p>
    </div>

    <div class="mt-10 text-white">
      <!-- FRONTEND -->
      <div>
        <!-- TECHSTACK -->
        <div class="space-y-5 mt-5">
          <!-- FRONTEND -->
          <div>
            <header class="tech-stack-header">
              <h1>Frontend</h1>
            </header>
            <div class="chip-container">
              <TechStackChip
                v-for="(item, index) in frontend"
                :key="index"
                :name="item.name"
                :color="item.color"
                data-aos="fade-up"
                :data-aos-delay="index * 100"
                data-aos-duration="600"
              />
            </div>
          </div>

          <div class="pt-10">
            <!-- BACKEND -->
            <header class="tech-stack-header">
              <h1>Backend</h1>
            </header>
            <div class="chip-container">
              <TechStackChip
                v-for="(item, index) in backend"
                :key="index"
                :name="item.name"
                :color="item.color"
                data-aos="fade-up"
                :data-aos-delay="index * 100"
                data-aos-duration="600"
              />
            </div>
          </div>

          <div class="pt-10">
            <!-- Database, Version Control, and Deployment -->
            <header class="tech-stack-header">
              <h1>Database, Version Control, and Deployment</h1>
            </header>
            <div class="chip-container">
              <TechStackChip
                v-for="(item, index) in db_deployment"
                :key="index"
                :name="item.name"
                :color="item.color"
                data-aos="fade-up"
                :data-aos-delay="index * 100"
                data-aos-duration="600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
