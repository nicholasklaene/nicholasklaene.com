<template>
  <div class="container">
    <div class="content">
      Latest post:
      <router-link to="/">
        The Benefits of Serverless Computing
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
