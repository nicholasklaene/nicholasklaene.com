<template>
  <main>
    <IndexHero />
    <IndexTechStack />
    <IndexProjects :projects="projects" />
    <IndexContact />
  </main>
</template>

<script>
import { defineComponent, ref, useFetch } from '@nuxtjs/composition-api'
import axios from 'axios'

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const projects = ref([])

    const { fetch } = useFetch(async () => {
      const res = await axios.get(
        'https://api.github.com/search/repositories?q=user:nicholasklaene&sort=stars&per_page=2'
      )
      if (res.status === 200) {
        projects.value = res.data.items
      }
    })

    fetch()

    return {
      projects,
    }
  },
})
</script>
