<template>
  <div>
    <a :href="project.link" target="_blank">
      {{ project.name }}
      <i class="fab fa-github"></i>
    </a>
    <p>
      {{ project.summary }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ProjectPreview",
  props: {
    project: Object,
  },
};
</script>

<style lang="scss" scoped>
div {
  a {
    font-weight: bold;
    text-decoration: none;
    font-size: 1.1rem;
    color: #487eb0;
    &:hover {
      opacity: 0.8;
    }
    i {
      display: inline-block;
      padding-left: 0.4rem;
    }
  }
}
</style>
