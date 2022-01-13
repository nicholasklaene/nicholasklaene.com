<template>
  <footer class="border-t border-gray-200 py-8">
    <div class="flex gap-16 justify-center text-2xl">
      <a href="https://github.com/nicholasklaene" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
      </a>

      <a href="https://www.linkedin.com/in/nicholas-klaene/" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin']"></font-awesome-icon>
      </a>

      <a v-if="showPopup" class="absolute">
        <span
          class="relative bottom-12 left-20 bg-gray-700 text-white text-sm py-2 px-4 rounded-lg"
          >Copied to clipboard!</span
        >
      </a>

      <a class="cursor-pointer">
        <font-awesome-icon
          :icon="['fas', 'envelope']"
          @click="copyEmail"
        ></font-awesome-icon>
      </a>
    </div>
  </footer>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { delay } from '@/utils/delay'

export default defineComponent({
  name: 'AppFooter',
  setup() {
    const showPopup = ref(false)

    async function copyEmail() {
      await navigator.clipboard.writeText('nicholasklaene@gmail.com')
      showPopup.value = true
      await delay(1500)
      showPopup.value = false
    }

    return {
      showPopup,
      copyEmail,
    }
  },
})
</script>
