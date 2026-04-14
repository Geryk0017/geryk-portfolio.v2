<script setup>
defineProps({
  date: String,
  role: String,
  company: String,
  description: String,
})
</script>

<template>
  <div class="journey-container">
    <!-- Left: timeline -->
    <div class="flex flex-col items-center self-stretch">
      <div class="dot"></div>
      <div class="left-vertical-line"></div>
    </div>

    <!-- Right: content -->
    <div class="flex-1">
      <div class="tl-item">
        <p class="tl-date">{{ date }}</p>
        <div>
          <h1 class="tl-role">{{ role }}</h1>
          <p class="tl-company">{{ company }}</p>
        </div>
        <p class="tl-desc">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
