<script setup>
import Download from '../Icons/Download.vue'
import AboutHeader from './AboutHeader.vue'

defineProps({
  title: String,
  highlightedText: String,
  description: String,
  description2: String,
})
</script>

<template>
  <AboutHeader title="about me" />
  <h1 class="text-2xl md:text-[40px] font-secondary dark:text-white text-primary font-bold">
    {{ title }} <br />
    <span class="text-[#8D84FB]">{{ highlightedText }}</span>
  </h1>

  <div class="my-5 md:text-[18px] text-gray space-y-10">
    <p>
      {{ description }}
    </p>

    <p>
      {{ description2 }}
    </p>
  </div>

  <div>
    <a
      href="/cv/Geryk_Martin_Bubutan_CV_Revised.pdf"
      download="Geryk-CV.pdf"
      target="_blank"
      class="hover:text-purple transition-colors"
      aria-label="Download CV"
    >
      <button class="cv">
        <div class="flex gap-2">
          <Download />
          Download CV
        </div>
      </button>
    </a>
  </div>
</template>
