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
})
</script>
<template>
  <div class="hero-card-container">
    <div class="hero-card-child-div">
      <h1 class="hero-text">{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
