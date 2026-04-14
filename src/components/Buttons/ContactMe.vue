<script setup>
import UpRight from '../Icons/Up-Right.vue'
import ArrowRight from '../Icons/ArrowRight.vue'
import { ref } from 'vue'

defineProps({
  name: {
    type: String,
    required: true,
  },
})

const hovered = ref(false)
</script>
<template>
  <RouterLink>
    <button class="contact-me-button" @mouseenter="hovered = true" @mouseleave="hovered = false">
      {{ name }}
      <Transition name="icon" mode="out-in">
        <UpRight v-if="!hovered" key="up" />
        <ArrowRight v-else key="arrow" />
      </Transition>
    </button>
  </RouterLink>
</template>
