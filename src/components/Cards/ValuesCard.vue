<script setup>
import Target from '../Icons/Target.vue'

defineProps({
  icon: {
    type: Object,
    required: true,
  },
  title: String,
  description: String,
})
</script>

<template>
  <div class="values-card-cointainer">
    <!-- ICON -->
    <div>
      <component :is="icon"></component>
    </div>

    <header>
      <h1 class="values-card-title">{{ title }}</h1>
    </header>

    <main>
      <p class="text-gray-500">{{ description }}</p>
    </main>
  </div>
</template>
