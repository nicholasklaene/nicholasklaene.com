<template>
  <div class="banner">
    <img src="../assets/me.jpg" alt="me" width="100" />
    <div class="text">
      <strong>Nick Klaene</strong> is a Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Architecto, expedita nostrum amet perspiciatis laborum
      iste. Lorem ipsum dolor sit amet.
      <router-link to="/">
        About Nick
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutBanner",
};
</script>

<style lang="scss" scoped>
.banner {
  margin: 0 auto;
  padding: 1rem 4rem 0.5rem 4rem;
  max-width: 720px;
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 0.9rem;
  img {
    border-radius: 50%;
  }
  a {
    color: #487eb0;
    text-decoration: none;
  }
}
</style>
