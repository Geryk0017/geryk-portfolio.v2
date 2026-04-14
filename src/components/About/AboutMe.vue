<script setup>
import Me from '@/assets/Images/me2.jpg'
import abstract1 from '@/assets/Images/abstract1.jpg'
import abstract2 from '@/assets/Images/abstract2.jpg'
import laravel from '@/assets/Images/laravel.jpg'
import vuejs from '@/assets/Images/vuejs.png'
import AboutMeHeroLeftSide from './AboutMeHeroLeftSide.vue'
import AboutMeRightSide from './AboutMeRightSide.vue'
</script>
<template>
  <div class="flex flex-col md:flex-row md:justify-between gap-10 min-h-auto">
    <div class="md:w-[40%]">
      <AboutMeHeroLeftSide
        title="Crafting digital experiences with"
        highlightedText="purpose & precision"
        description="I’m a full-stack web developer focused on building clean, scalable, and high-performing web applications, from intuitive UIs to robust back-end systems."
        description2="Outside of coding, I explore new technologies, contribute to open source, and share knowledge with the developer community."
      />
    </div>

    <!-- RIGHT SIDE -->
    <div class="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-5 md:w-[60%] md:h-auto">
      <AboutMeRightSide
        :my-image="Me"
        :abstract1="abstract1"
        :abstract2="abstract2"
        :laravel="laravel"
        :vuejs="vuejs"
      />
    </div>
  </div>
</template>
