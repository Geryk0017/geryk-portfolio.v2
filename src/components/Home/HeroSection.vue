<script setup>
import ContactMe from '@/components/Buttons/ContactMe.vue'
</script>
<template>
  <div class="px-5 md:px-0 text-center md:text-left">
    <h1 class="font-bold text-2xl md:text-[50px]" data-aos="fade-up" data-aos-duration="800">
      Web Developer crafting modern, <br />
      user-friendly web experiences
    </h1>
    <p class="py-10" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
      Full stack expertise that brings your vision to life, layer by layer.
    </p>
    <div class="flex items-center justify-center md:justify-start">
      <ContactMe name="READ MORE" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" />
    </div>
  </div>
</template>
