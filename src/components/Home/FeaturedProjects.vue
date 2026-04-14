<script setup>
import FeaturedCard from '../Cards/FeaturedCard.vue'
import POS from '@/assets/Images/pos.jpg'
import rboc from '@/assets/Images/rboc-ims.jpg'
import rfid from '@/assets/Images/rfid.jpg'

const card = [
  {
    img: POS,
    title: 'Point of Sale System',
    description:
      'A web-based POS system designed to streamline sales transactions, manage product listings, and generate real-time sales reports for businesses.',
  },
  {
    img: rboc,
    title: 'RBOC Inventory Management System',
    description:
      'A capstone project for tracking stock levels, managing supplies, and generating inventory reports.',
  },
  {
    img: rfid,
    title: 'RFID Attendance, Borrowing & Inventory System',
    description:
      'A university system using RFID to automate attendance, equipment borrowing, and inventory tracking.',
  },
]
</script>

<template>
  <div class="featured-projects-container">
    <div class="flex items-center justify-center pb-5 space-x-3">
      <div class="gradient-shape"></div>
      <p class="gradient-text uppercase font-bold text-[20px]">My projects</p>
    </div>

    <div>
      <div class="flex items-center justify-center">
        <h1 class="font-bold text-xl md:text-3xl dark:text-white">Featured Projects:</h1>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <FeaturedCard
          v-for="(item, index) in card"
          :key="index"
          :img="item.img"
          :title="item.title"
          :description="item.description"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          data-aos-duration="1000"
        />
      </div>
    </div>
  </div>
</template>
