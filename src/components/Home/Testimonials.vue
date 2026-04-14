<script setup>
defineProps({
  img: { type: String, required: true },
  name: { type: String, required: true },
  hoverText: { type: String, required: true },
})
</script>

<template>
  <div class="testimonial-container group">
    <img
      :src="img"
      :alt="name"
      class="object-cover w-full h-[300px] md:h-[400px] transition-transform duration-300 group-hover:scale-110"
    />

    <!-- Dark overlay that appears on hover -->
    <div
      class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
    ></div>

    <!-- Text content -->
    <div class="absolute bottom-0 left-0 right-0 p-4 z-20">
      <div class="flex items-center gap-2 text-white w-full justify-center">
        <div class="flex flex-col items-center">
          <p class="font-bold text-lg">{{ name }}</p>
          <p
            class="text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden"
          >
            {{ hoverText }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
