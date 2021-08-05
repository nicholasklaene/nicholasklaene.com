<template>
  <div class="banner">
    <img src="../assets/me.jpg" alt="me" width="100" />
    <div class="text">
      <strong>Software Developer</strong> located in the Cincinnati area.
      Specializing in cloud-native software solutions.
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
  @media screen and (max-width: 600px) {
    padding: 1rem 2rem 0.5rem 2rem;
  }
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
