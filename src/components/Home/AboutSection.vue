<script setup>
import AboutMeImage1 from '@/assets/Images/about_me_image(1).png'
import AboutMeImage2 from '@/assets/Images/about_me_image(2).png'
import CircleCheck from '../Icons/CircleCheck.vue'
import ContactMe from '../Buttons/ContactMe.vue'
</script>
<template>
  <div class="about-container">
    <div
      class="flex relative"
      data-aos="fade-right"
      data-aos-duration="600"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div class="about-me-card-container">
        <img :src="AboutMeImage1" class="h-[500px]" />
      </div>
      <div class="absolute">
        <div class="about-me-card-container md:mx-25 my-25 md:my-25">
          <img :src="AboutMeImage2" class="h-[500px]" />
        </div>
      </div>
    </div>

    <div
      class="md:w-[50%] md:px-5 text-center md:text-left"
      data-aos="fade-left"
      data-aos-duration="600"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div>
        <div class="flex items-center gap-2 pb-5">
          <div class="gradient-bg w-[15px] h-[15px]"></div>
          <p class="uppercase gradient-text">THE PERSON BEHIND THE CODE</p>
        </div>
        <h1 class="font-bold text-3xl md:text-[40px] text-black dark:text-white">About Me</h1>
      </div>
      <div class="pt-5 text-gray">
        <p>
          I’m Geryk a passionate developer who enjoys turning ideas into interactive and
          user-friendly experiences. With a strong focus on front-end development and continuous
          learning, I love experimenting with new tools and frameworks while constantly improving my
          skills. Beyond coding, I’m someone who values creativity, collaboration, and growth.
        </p>
      </div>

      <div class="pt-10 font-bold">
        <div class="flex space-x-5 space-y-5">
          <CircleCheck />
          <p class="about-text">Web Development</p>
        </div>
        <div class="flex space-x-5 space-y-5">
          <CircleCheck />
          <p class="about-text">REST API Design & Integration</p>
        </div>
        <div class="flex space-x-5 space-y-5">
          <CircleCheck />
          <p class="about-text">Web Development</p>
        </div>
        <div class="flex space-x-5 space-y-5">
          <CircleCheck />
          <p class="about-text">Web Development</p>
        </div>
      </div>
      <div class="pt-10 text-white">
        <ContactMe name="MORE ABOUT ME" />
      </div>
    </div>
  </div>
</template>
