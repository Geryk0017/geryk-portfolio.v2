<script setup>
import FeaturedProjectCard from '@/components/Cards/FeaturedProjectCard.vue'
import ProjectCard from '@/components/Cards/ProjectCard.vue'
import ProjectsBanner from '@/components/Projects/ProjectsBanner.vue'
import inventory from '@/assets/Images/inventory.png'
import client_portal from '@/assets/Images/client_portal.png'
import burger from '@/assets/Images/burger_restaurant.png'

const projects = [
  {
    img: inventory,
    stack: 'Full Stack',
    title: 'Inventory Management System',
    description:
      'Real-time stock tracking, low-stock alerts, supplier management, and purchase order generation for warehouse operations.',
    link: 'https://github.com/Iamsylvest/Equalynx',
    hasLink: true,
  },
  {
    img: client_portal,
    stack: 'Full Stack',
    title: 'Client Portal and Project Tracker',
    description:
      'A client portal with project tracking features, including task management, progress visualization for enhanced collaboration.',
    link: 'https://github.com/Geryk0017/admin_system',
    hasLink: true,
  },
  {
    img: burger,
    stack: 'Frontend',
    title: 'Burger Restaurant',
    description:
      'A client portal with project tracking features, including task management, progress visualization for enhanced collaboration.',
    link: 'https://geryk-burger-restaurant.vercel.app/',
    hasLink: true,
  },
]
</script>

<template>
  <div class="page-container min-h-auto dark:bg-primary py-35">
    <div class="main-container min-h-auto">
      <ProjectsBanner />
    </div>

    <div
      class="main-container min-h-auto featured-projects-card"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <FeaturedProjectCard
        title="RFID Attendance, Borrowing & Facial Recognition System"
        description="An integrated system combining RFID, facial recognition, and attendance tracking for enterprises and educational institutions. Features real-time attendance logging, asset borrowing management with auto-return notifications, and multi-biometric verification. Reduced manual processing by 85% and improved security compliance."
      />
    </div>

    <div class="main-container min-h-auto">
      <h1 class="text-2xl md:text-[50px] font-secondary dark:text-white my-5">All Projects</h1>
      <div class="flex flex-wrap md:flex-nowrap gap-6">
        <ProjectCard v-for="(project, index) in projects" :key="index" v-bind="project" />
      </div>
    </div>
  </div>
</template>
