<template>
  <div class="bg-gray-50 h-full px-4 py-8 shadow-md rounded-md">
    <a :href="project.html_url" target="_blank">
      <h6 class="font-medium text-lg">{{ project.name }}</h6>
      <p class="mt-2">{{ project.description }}</p>
      <p class="mt-2">
        <span>
          <font-awesome-icon :icon="['far', 'star']"></font-awesome-icon>
        </span>
        <span>{{ project.stargazers_count }}</span>
      </p>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
})
</script>
