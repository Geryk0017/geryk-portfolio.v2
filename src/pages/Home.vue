<script setup>
import HeroCard from '@/components/Cards/HeroCard.vue'
import AboutSection from '@/components/Home/AboutSection.vue'
import FeaturedProjects from '@/components/Home/FeaturedProjects.vue'
import HeroSection from '@/components/Home/HeroSection.vue'
/* import TechStack from '@/components/Home/TechStack.vue' */
import Testimonials from '@/components/Home/Testimonials.vue'
import TestimonialsHeader from '@/components/Home/TestimonialsHeader.vue'
import Testimonial1 from '@/assets/Images/testimonial1.jpg'
import Testimonial2 from '@/assets/Images/testimonial2.jpg'
import Testimonial3 from '@/assets/Images/testimonial3.jpg'
import Testimonial4 from '@/assets/Images/testimonial4.jpg'
import ContactMeSection from '@/components/Home/ContactMeSection.vue'
import { useThemeStore } from '@/stores/theme.js'

const theme = useThemeStore()
const card = [
  {
    title: 'Frontend Development',
    description:
      'Building responsive, fast, and visually clean interfaces using modern frameworks.',
  },
  {
    title: 'Backend Development',
    description: 'Designing robust APIs and server-side logic that power seamless applications.',
  },
  {
    title: 'Database and Deployment',
    description:
      'Managing databases and deploying applications manually to Linux servers via Bitbucket and PuTTY.',
  },
]

const testimonials = [
  {
    img: Testimonial3,
    name: 'Johanna Maxxine Dolz',
    hover_text:
      'Back in college, Geryk was always the go-to person whenever we got stuck on projects. Super reliable!',
  },
  {
    img: Testimonial2,
    name: 'Sylvest Madelo',
    hover_text:
      'He took charge of the front-end, always making sure our system was responsive and user-friendly while keeping the team motivated.',
  },
  {
    img: Testimonial1,
    name: 'Jonathan Mariano',
    hover_text:
      'Whenever we had projects in class, he was the one who made sure our outputs looked polished and well-presented.',
  },
  {
    img: Testimonial4,
    name: 'Beverly Tamayo',
    hover_text:
      'Whenever I see Geryk working on his projects, it pushes me to do better too. His passion for coding and design is really contagious.',
  },
]
</script>

<template>
  <section class="home-bg">
    <!-- CONTAINER -->
    <div class="flex items-center bg-primary/50" data-aos="fade-up" data-aos-duration="2000">
      <div class="shape-container">
        <div>
          <div class="shape"></div>
        </div>
        <div>
          <div class="shape2"></div>
        </div>
      </div>
      <div class="text-white absolute w-full">
        <div class="main-container">
          <HeroSection />
        </div>
      </div>
    </div>
  </section>

  <div class="page-container">
    <div
      class="main-container md:flex md:items-center md:justify-center md:space-y-0 space-x-10 space-y-5"
    >
      <HeroCard
        v-for="(item, index) in card"
        :key="index"
        :title="item.title"
        :description="item.description"
        data-aos="fade-up"
        data-aos-duration="1000"
      />
    </div>
  </div>

  <div class="page-container md:my-20 max-h-auto">
    <div class="main-container">
      <AboutSection />
    </div>
  </div>

  <div class="page-container py-[100px]">
    <div class="main-container">
      <FeaturedProjects />
    </div>
  </div>

  <!-- <div class="page-container bg-[#0D0F1D] py-20 md:px-[8%] min-h-screen flex items-center">
    <div class="main-container">
      <TechStack />
    </div>
  </div> -->

  <div class="page-container min-h-screen">
    <div class="testimonial_bg">
      <TestimonialsHeader />
    </div>
    <div class="main-container flex flex-col md:flex-row gap-5">
      <Testimonials
        v-for="(item, index) in testimonials"
        :key="index"
        :img="item.img"
        :name="item.name"
        :hover-text="item.hover_text"
        data-aos="zoom-in-up"
        :data-aos-delay="index * 200"
        data-aos-duration="800"
        data-aos-easing="ease-out-back"
      />
    </div>
  </div>

  <div class="page-container min-h-screen dark:bg-primary">
    <div class="main-container">
      <ContactMeSection />
    </div>
  </div>

  <footer class="dark:bg-primary">
    <div class="main-container text-center py-5">
      <p class="text-gray">© 2024 Geryk Martin Bubutan. All rights reserved.</p>
    </div>
  </footer>
</template>
