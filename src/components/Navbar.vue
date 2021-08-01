<template>
  <nav>
    <div class="name">Nick Klaene</div>
    <a href="#about" v-if="$route.name === 'Home'">About</a>
    <router-link to="/projects" v-if="$route.name !== 'Projects'">
      Projects
    </router-link>
    <router-link to="/" v-if="$route.name !== 'Home'">Home</router-link>
    <a href="#contact" v-if="$route.name === 'Home'">Contact</a>
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
