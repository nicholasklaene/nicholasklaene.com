<template>
  <section class="max-w-lg mx-auto mb-16 text-center">
    <div class="mb-8">
      <h6 class="tracking-wide">
        Current technology
        <font-awesome-icon
          :icon="['fas', 'angle-double-down']"
        ></font-awesome-icon>
      </h6>
    </div>
    <div class="flex justify-between text-4xl">
      <font-awesome-icon :icon="['fab', 'aws']"></font-awesome-icon>
      <font-awesome-icon :icon="['fab', 'docker']"></font-awesome-icon>
      <font-awesome-icon :icon="['fab', 'python']"></font-awesome-icon>
      <font-awesome-icon :icon="['fab', 'node']"></font-awesome-icon>
      <font-awesome-icon :icon="['fab', 'java']"></font-awesome-icon>
      <font-awesome-icon :icon="['fab', 'js']"></font-awesome-icon>
      <font-awesome-icon :icon="['fab', 'vuejs']"></font-awesome-icon>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexTechStack',
}
</script>
