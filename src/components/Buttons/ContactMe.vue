<script setup>
import UpRight from '../Icons/Up-Right.vue'
import ArrowRight from '../Icons/ArrowRight.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    default: '/',
  },
  hash: {
    type: String,
    default: '',
  },
})

const hovered = ref(false)
const router = useRouter()

const goToContact = async () => {
  await router.push({ path: props.path, hash: props.hash })

  setTimeout(() => {
    if (props.hash) {
      const el = document.getElementById(props.hash.replace('#', ''))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, 100)
}
</script>

<template>
  <button
    class="contact-me-button"
    @click="goToContact"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    {{ name }}
    <Transition name="icon" mode="out-in">
      <UpRight v-if="!hovered" key="up" />
      <ArrowRight v-else key="arrow" />
    </Transition>
  </button>
</template>
