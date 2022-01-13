<template>
  <nav class="pt-8">
    <ul class="flex font-bold tracking-wide">
      <li class="text-2xl">
        <nuxt-link to="/">
          <span class="text-purple-900">Nicholas</span>K
        </nuxt-link>
      </li>
      <li class="ml-auto mr-4">
        <a href="#contact"> Contact </a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'AppNavbar',
})
</script>
