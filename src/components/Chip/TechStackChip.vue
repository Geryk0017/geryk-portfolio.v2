<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: 'circle-green',
  },
})
</script>

<template>
  <div class="tech-stack-container">
    <span :class="color"></span>
    <p>{{ name }}</p>
  </div>
</template>
