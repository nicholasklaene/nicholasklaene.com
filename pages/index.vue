<template>
  <main>
    <IndexHero />
    <IndexTechStack />
    <IndexProjects :projects="projects" />
  </main>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import axios from 'axios'

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      projects: [],
    }
  },
  async fetch() {
    const res = await axios.get(
      'https://api.github.com/search/repositories?q=user:nicholasklaene&sort=stars&per_page=3'
    )
    if (res.status === 200) {
      this.projects = res.data.items
    }
  },
  fetchOnServer: true,
})
</script>
