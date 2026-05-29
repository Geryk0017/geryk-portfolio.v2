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
  showColor: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="tech-stack-container">
    <span v-if="showColor" :class="color"></span>
    <p>{{ name }}</p>
  </div>
</template>
