<template>
  <nav>
    <div class="name">Nick Klaene</div>
    <router-link to="/">About</router-link>
    <router-link to="/">Blog</router-link>
    <router-link to="/">Contact</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  max-width: 720px;
  margin: 0 auto;
  padding: 1rem 4rem;
  font-weight: 600;
  .name {
    margin-right: auto;
    font-size: 1.8rem;
  }
  a {
    text-decoration: none;
    color: #487eb0;
    padding: 0 0.8rem;
    font-size: 0.9rem;
  }
}
</style>
