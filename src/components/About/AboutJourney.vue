<script setup>
import JourneyCard from '../Cards/JourneyCard.vue'
import ValuesCard from '../Cards/ValuesCard.vue'
import AboutHeader from './AboutHeader.vue'
import { computed } from 'vue'
import Target from '../Icons/Target.vue'
import Fast from '../Icons/Fast.vue'
import Collaborative from '../Icons/Collaborative.vue'
import Learning from '../Icons/Learning.vue'

const journeyData = [
  {
    date: '2025 - present',
    role: 'Web Developer',
    company: 'PrimeOutsourcing',
    description:
      'Web Developer responsible for maintaining and enhancing an RBAC system for a lending application using Laravel and Vue.js, including deployment and updates on a Linux server via PuTTY.',
  },
  {
    date: '2021 - 2025',
    role: 'BS Information Technology Student',
    company: 'Rizal Technological University',
    description:
      'Completed a Bachelor of Science in Information Technology, gaining comprehensive knowledge in programming, web development, database management, and software engineering principles.',
  },
  {
    date: '2018 - 2020',
    role: 'IT in Mobile App and Web Development Student',
    company: 'STI College - Cubao',
    description:
      'Studied IT with a focus on Web and Mobile Development, with greater emphasis on web technologies, gaining foundational skills in programming languages and modern web application development.',
  },
]

const valuesData = [
  {
    icon: Target,
    title: 'Detail-Oriented',
    description:
      'I sweat the small stuff — because the small stuff is what separates good from great.',
  },
  {
    icon: Fast,
    title: 'Performance First',
    description: 'Fast, optimized, and scalable code is non-negotiable in everything I build.',
  },
  {
    icon: Collaborative,
    title: 'Collaborative',
    description: 'Great products are built by great teams. I communicate openly and clearly.',
  },
  {
    icon: Learning,
    title: 'Always Learning',
    description: 'The web evolves fast. I stay sharp and adapt to new tools and best practices.',
  },
]

const firstRow = computed(() => valuesData.slice(0, 2))
const secondRow = computed(() => valuesData.slice(2, 4))
</script>

<template>
  <div class="flex flex-col md:flex-row md:justify-between gap-10 min-h-auto">
    <!-- LEFT SIDE -->
    <div class="w-full">
      <AboutHeader title="my journey" />
      <h1 class="font-secondary text-primary dark:text-white text-2xl md:text-[60px]">
        Experience & Background
      </h1>

      <section class="w-full">
        <div class="flex flex-col items-center gap-5 mt-10">
          <JourneyCard
            v-for="(journey, index) in journeyData"
            :key="index"
            v-bind="journey"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="index * 150"
          />
        </div>
      </section>
    </div>

    <!-- RIGHT SIDE -->
    <div class="w-full space-y-5">
      <AboutHeader title="What drives me" />
      <div class="md:flex md:flex-col gap-5 space-y-5 md:space-y-0">
        <div class="md:flex md:items-center gap-5 space-y-5 md:space-y-0">
          <ValuesCard v-for="(value, index) in firstRow" :key="index" v-bind="value" />
        </div>
        <div class="md:flex md:items-center gap-5 space-y-5 md:space-y-0">
          <ValuesCard v-for="(value, index) in secondRow" :key="index" v-bind="value" />
        </div>
      </div>
    </div>
  </div>
</template>
