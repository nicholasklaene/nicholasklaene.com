<template>
  <section id="contact" class="max-w-lg mx-auto mb-8 rounded-lg shadow-md p-8">
    <h2 class="text-4xl font-semibold mb-4">Get in touch</h2>
    <form @submit.prevent="submit()">
      <label class="flex flex-col mb-4" for="email">
        Email
        <input
          type="email"
          name="email"
          class="p-4 border bg-gray-50 focus:outline-none focus:shadow-outline focus:border-blue-500"
          placeholder="example@email.com"
          v-model="email"
          required
        />
      </label>
      <label class="flex flex-col mb-4" for="name">
        Name
        <input
          type="text"
          name="name"
          class="p-4 border bg-gray-50 focus:outline-none focus:shadow-outline focus:border-blue-500"
          placeholder="John Doe"
          v-model="name"
          required
        />
      </label>
      <label for="message" class="flex flex-col mb-4 b">
        Message
        <textarea
          name="message"
          placeholder="Your message..."
          class="min-w-full max-w-full g-gray-50 p-4 h-64 border focus:outline-none focus:shadow-outline focus:border-blue-500"
          v-model="message"
          required
        ></textarea>
      </label>
      <button
        class="bg-blue-500 hover:opacity-90 text-white font-medium px-8 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  </section>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'IndexContact',
  setup() {
    const email = ref('')
    const name = ref('')
    const message = ref('')
    const submitted = ref(false)

    function submit() {
      console.log('Called')
    }

    return {
      email,
      name,
      message,
      submitted,
      submit,
    }
  },
})
</script>
