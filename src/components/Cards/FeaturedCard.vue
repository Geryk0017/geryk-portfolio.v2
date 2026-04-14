<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="w-full">
    <div class="relative drop-shadow-xl overflow-hidden rounded-t-[10px]">
      <img :src="img" :alt="title" class="featured-card-image" />
    </div>
    <div class="featured-card-container">
      <div class="p-5">
        <h1 class="text-gray-900 dark:text-white font-bold text-lg">{{ title }}</h1>
        <p class="pt-3 text-gray-600 text-sm dark:text-gray-400">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
