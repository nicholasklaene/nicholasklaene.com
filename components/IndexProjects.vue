<template>
  <div>{{ projects }}</div>
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
  setup() {
    //
  },
})
</script>
