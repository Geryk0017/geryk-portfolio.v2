<script setup>
import AboutJourney from '@/components/About/AboutJourney.vue'
import AboutMe from '@/components/About/AboutMe.vue'
import AboutTechStack from '@/components/About/AboutTechStack.vue'
</script>

<template>
  <div class="page-container max-h-auto dark:bg-primary py-25">
    <div class="main-container min-h-auto py-25">
      <AboutMe />
    </div>

    <div class="main-container min-h-auto py-25 text-primary dark:text-white">
      <AboutTechStack />
    </div>

    <div class="main-container min-h-auto py-25 text-white">
      <AboutJourney />
    </div>
  </div>
</template>
