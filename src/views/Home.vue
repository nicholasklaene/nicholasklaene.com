<template>
  <CTA />
  <AboutBanner />
  <div class="content">
    <h1>Welcome to the official website of Nick Klaene, Software Developer</h1>
    <h3>What do I do and why should you care?</h3>
    <p>
      I'm a passionate software developer with the technical skills to bring
      your ideas to life. Whether you'd like a complex cloud-native application
      or a simple website, I've got you covered.
      <br />
      <br />
      My expertise lies in the following areas:
    </p>
    <h2>Cloud Solutions</h2>
    <p>
      Having somebody knowledgable about cloud and everything it brings to the
      table is key to survival in today's tech landscape. I'm passionate about
      crafting cloud-native business solutions to simplify the software
      development process, saving businesses time and money.
    </p>
    <h2>Web Application Development</h2>
    <p>
      Nearly everything today is built with one thing in mind: the web. I
      specialize in building web-solutions to critical problems.
    </p>
    <div class="explore">
      <router-link to="/">
        Explore nicholasklaene.com
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import CTA from "@/components/CTA.vue";
import AboutBanner from "@/components/AboutBanner.vue";

export default {
  name: "Home",
  components: { CTA, AboutBanner },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 0 4rem;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.8;
  h1,
  h2,
  h3 {
    font-weight: 600;
  }
  .explore {
    padding: 3rem 0;
    text-align: center;
    a {
      color: #487eb0;
      text-decoration: none;
    }
  }
}
</style>
