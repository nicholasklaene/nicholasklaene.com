<template>
  <h3>Sorry, the page you requested does not exist!</h3>
  <p>Redirecting you home...</p>
</template>

<script>
import { delay } from "../utils/functions";

export default {
  name: "NotFound",
  async mounted() {
    await delay(3000);
    this.$router.push({ path: "/" });
  },
};
</script>

<style lang="scss" scoped>
h3,
p {
  padding: 0 2rem;
  text-align: center;
  @media screen and (max-width: 600px) {
    padding: 0rem 1.5rem;
  }
}
</style>
