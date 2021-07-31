<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
  components: { Navbar },
};
</script>

<style lang="scss">
body {
  font-family: Poppins, sans-serif;
  box-sizing: border-box;
  margin: 0;
}
</style>
