<template>
  <section id="projects" class="max-w-3xl mx-auto mb-8">
    <div class="mb-8">
      <h6 class="tracking-wide text-center">
        Sample Projects
        <font-awesome-icon
          :icon="['fas', 'angle-double-down']"
        ></font-awesome-icon>
      </h6>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8">
      <IndexProject
        v-for="(project, index) in projects"
        :key="index"
        :project="project"
      >
        {{ project }}
      </IndexProject>
    </div>
  </section>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'IndexProjects',
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
})
</script>
