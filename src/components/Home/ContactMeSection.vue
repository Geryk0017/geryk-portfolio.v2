<script setup>
import ContactForm from '../ContactForm.vue'
import Map from '@/assets/Images/map.png'
</script>

<template>
  <div class="contact-me-section relative">
    <!-- MAP BACKGROUND -->
    <div class="absolute top-100 inset-0 dark:opacity-20 z-10">
      <img :src="Map" alt="map" class="object-cover" />
    </div>

    <!-- LEFT SIDE -->
    <div class="flex-1 relative z-10">
      <div class="gradient-shape-container">
        <div class="gradient-shape"></div>
        <p class="gradient-text uppercase font-bold md:text-[20px]">Let's Connect!</p>
      </div>
      <h1 class="text-[40px] font-bold dark:text-white">
        Let's turn your idea into a <br />
        working product.
      </h1>

      <p class="text-gray dark:text-gray-300 py-5">
        I'd love to hear from you! Whether you have a project idea, a question, or just want to say
        hello, feel free to reach out. Let's connect and create something amazing together.
      </p>

      <div class="font-bold py-10">
        <h1 class="text-gray dark:text-gray-300">General Inquiries:</h1>
        <p class="dark:text-white">gerykjumawanbubutan@gmail.com</p>
      </div>
    </div>

    <!-- RIGHT SIDE -->
    <div class="contact-me-section-right-side relative z-10">
      <div
        class="contact-form-container"
        data-aos="zoom-in-left"
        data-aos-duration="800"
        data-aos-easing="ease-out-back"
      >
        <ContactForm />
      </div>
    </div>
  </div>
</template>
