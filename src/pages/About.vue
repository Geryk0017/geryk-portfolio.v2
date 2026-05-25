<script setup>
import AboutCTA from '@/components/About/AboutCTA.vue'
import AboutJourney from '@/components/About/AboutJourney.vue'
import AboutMe from '@/components/About/AboutMe.vue'
import AboutTechStack from '@/components/About/AboutTechStack.vue'
</script>

<template>
  <div class="page-container min-h-auto dark:bg-primary py-25">
    <div class="main-container min-h-auto py-25">
      <AboutMe />
    </div>

    <div class="main-container min-h-auto py-25 text-primary dark:text-white">
      <AboutTechStack />
    </div>

    <div class="main-container min-h-auto py-25 text-white">
      <AboutJourney />
    </div>

    <div class="main-container min-h-auto py-25 text-white">
      <AboutCTA />
    </div>
  </div>
</template>
