<script setup>
import LinkIcon from '@/assets/Icons/LinkIcon.vue'
defineProps({
  hasLink: {
    type: Boolean,
    default: false,
  },
  link: String,
  hasLiveDemo: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button class="mt-10 cursor-pointer">
    <a v-if="hasLink" :href="link" target="_blank">
      <div
        class="flex items-center justify-center gap-3 bg-text dark:border-[#5c6672] p-3 rounded-md w-auto border-1"
      >
        <LinkIcon />
        <p v-if="hasLiveDemo">{{ name }}</p>
      </div>
    </a>
  </button>
</template>
