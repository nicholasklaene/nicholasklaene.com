<template>
  <div class="container">
    <div class="content" v-if="$route.name == 'Home'">
      Want to see my work?
      <router-link to="/projects">
        Check it out.
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
    <div class="content" v-else>
      Want to learn more about me?
      <router-link to="/">
        Go here
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CTA",
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0.6rem 0;
  background-color: #e5e7eb7f;
  font-size: 0.9rem;
  .content {
    padding: 0 2rem;
    @media screen and (max-width: 600px) {
      padding: 0rem 1rem;
    }
    margin: 0 auto;
    text-align: center;
    a {
      padding-left: 4px;
      color: #42b883;
      text-decoration: none;
      font-style: italic;
    }
  }
}
</style>
