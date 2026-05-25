<script setup>
defineProps({
  filter: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button class="filter-tab">{{ filter }}</button>
</template>
