<script setup>
import face_recog from '@/assets/Images/face_recog.png'
import TechStackChip from '../Chip/TechStackChip.vue'
import ButtonLink from '../Buttons/ButtonLink.vue'

defineProps({
  title: String,
  description: String,
})

const chip = [
  { name: 'Vue.js', showColor: true },
  { name: 'Inertia.js', showColor: true },
  { name: 'Laravel', showColor: true },
  { name: 'MySQL', showColor: true },
  { name: 'REST API', showColor: true },
]
</script>
<template>
  <main class="my-15">
    <div class="featured-project-card-container">
      <div class="featured-card-left">
        <img
          :src="face_recog"
          alt="Face Recognition Project"
          class="md:w-full md:h-full object-cover rounded-t-xl md:rounded-t-none md:rounded-l-xl"
        />
      </div>
      <div class="featured-card-right">
        <p class="text-[#8D84FB]">FULL STACK</p>
        <h1 class="font-secondary text-[30px]">{{ title }}</h1>
        <p class="text-gray mt-5">{{ description }}</p>

        <div class="mt-5 flex gap-3 flex-wrap">
          <TechStackChip
            v-for="tech in chip"
            :key="tech.name"
            :name="tech.name"
            :showColor="tech.showColor"
          />
        </div>

        <ButtonLink
          name=""
          hasLink="true"
          link="https://github.com/capstonedummy11/capstone-rfid"
        />
      </div>
    </div>
  </main>
</template>
