<script setup>
defineProps({
  title: String,
})
</script>

<template>
  <div class="about-header">
    <span class="w-8 h-[2px] bg-[#8D84FB]"></span>
    {{ title }}
  </div>
</template>
