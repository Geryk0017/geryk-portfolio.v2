<script setup>
import ButtonLink from '../Buttons/ButtonLink.vue'

defineProps({
  title: String,
  description: String,
  stack: String,
  img: String,
  link: String,
})
</script>
<template>
  <div class="project-card">
    <!-- Project Image -->
    <div>
      <img
        :src="img"
        alt="Inventory Management System"
        class="md:w-full md:h-[300px] object-cover rounded-t-xl"
      />
    </div>
    <!-- Project Details -->
    <div class="project-details">
      <p class="text-[#8D84FB]">{{ stack }}</p>
      <h1 class="font-secondary">{{ title }}</h1>
      <p class="text-gray">{{ description }}</p>
    </div>

    <div class="p-5">
      <ButtonLink :link="link" :hasLink="true" />
    </div>
  </div>
</template>
