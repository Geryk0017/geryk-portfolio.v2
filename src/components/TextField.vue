<script setup>
defineProps({
  placeHolder: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    default: 'h-10',
  },
  isTextarea: {
    type: Boolean,
    default: false,
  },
})
</script>
<template>
  <input
    v-if="!isTextarea"
    type="text"
    :placeholder="placeHolder"
    :name="name"
    :class="[
      'border-2 border-[#E5E7EA] dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 p-2 rounded-lg w-full',
      height,
    ]"
  />
  <textarea
    v-else
    :placeholder="placeHolder"
    :name="name"
    :class="[
      'border-2 border-[#E5E7EA] dark:border-white/10 bg-white dark:bg-white/5 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 p-2 rounded-lg w-full resize-none',
      height,
    ]"
  ></textarea>
</template>
