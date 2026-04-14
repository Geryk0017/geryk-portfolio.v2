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
  <button
    type="submit"
    class="contact-me-button text-white"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    {{ name }}
    <Transition name="icon" mode="out-in">
      <UpRight v-if="!hovered" key="up" />
      <ArrowRight v-else key="arrow" />
    </Transition>
  </button>
</template>
