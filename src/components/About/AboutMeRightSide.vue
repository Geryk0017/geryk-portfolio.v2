<script setup>
defineProps({
  myImage: String,
  abstract1: String,
  abstract2: String,
  laravel: String,
  vuejs: String,
})
</script>
<template>
  <div
    class="overflow-hidden md:row-span-2 rounded-xl h-[400px] md:h-full cursor-pointer transition hover:scale-103 duration-300"
  >
    <img :src="myImage" :alt="myImage" class="w-full h-full object-cover object-top" />
  </div>

  <!-- Laravel -->
  <div class="framework-card" :style="{ backgroundImage: `url(${abstract1})` }">
    <div class="absolute inset-0 flex items-center justify-center">
      <img :src="laravel" class="w-24 h-24 md:w-40 md:h-40" />
    </div>
  </div>

  <!-- Vue -->
  <div class="framework-card" :style="{ backgroundImage: `url(${abstract2})` }">
    <div class="absolute inset-0 flex items-center justify-center">
      <img :src="vuejs" class="w-16 h-16 md:w-20 md:h-20" />
    </div>
  </div>
</template>
