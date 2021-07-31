<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: { Navbar, Footer },
};
</script>

<style lang="scss">
body {
  font-family: Poppins, sans-serif;
  box-sizing: border-box;
  margin: 0;
}
</style>
