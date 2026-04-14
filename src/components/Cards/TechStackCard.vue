<script setup>
import Frontend from '@/components/Icons/Frontend.vue'
import Backend from '@/components/Icons/Backend.vue'
import Database from '@/components/Icons/Database.vue'
import TechStackChip from '@/components/Chip/TechStackChip.vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})

const techStacks = {
  frontend: [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'Tailwind CSS' },
    { name: 'JavaScript' },
    { name: 'Vue.js' },
    { name: 'Inertia.js', color: 'circle-blue' },
  ],
  backend: [
    { name: 'PHP' },
    { name: 'Laravel' },
    { name: 'C++', color: 'circle-blue' },
    { name: 'C#', color: 'circle-blue' },
    { name: 'Java', color: 'circle-blue' },
  ],
  database: [
    { name: 'MySQL' },
    { name: 'Git' },
    { name: 'BitBucket' },
    { name: 'Linux Server', color: 'circle-blue' },
    { name: 'PuTTY', color: 'circle-blue' },
  ],
}

const icons = {
  frontend: Frontend,
  backend: Backend,
  database: Database,
}

const currentTechs = techStacks[props.type]
const IconComponent = icons[props.type]

// Debug log
console.log('Type prop:', props.type)
console.log('Current techs:', currentTechs)
</script>

<template>
  <div class="tech-stack-card">
    <header class="mb-10">
      <div class="flex items-center space-x-5">
        <div class="tech-stack-header">
          <component :is="IconComponent" />
        </div>
        <h1 class="tech-stack-card-title">{{ title }}</h1>
      </div>
    </header>

    <div class="chip-container flex flex-wrap gap-2 mt-5">
      <TechStackChip
        v-for="(item, index) in currentTechs"
        :key="index"
        :name="item.name"
        data-aos="fade-up"
        :color="item.color"
        :data-aos-delay="index * 100"
        data-aos-duration="600"
      />
    </div>
  </div>
</template>
