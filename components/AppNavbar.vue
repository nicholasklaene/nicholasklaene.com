<template>
  <nav class="mt-8">
    <ul class="flex font-bold tracking-wide">
      <li class="text-2xl">
        <nuxt-link to="/">
          <span class="text-purple-900">Nicholas</span>K
        </nuxt-link>
      </li>
      <li class="ml-auto mr-4">
        <nuxt-link to="/about"> About </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/blog"> Blog </nuxt-link>
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
