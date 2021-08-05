<template>
  <CTA />
  <AboutBanner />
  <section>
    <HomeContent />
    <ContactForm />
  </section>
</template>

<script>
import CTA from "@/components/CTA.vue";
import AboutBanner from "@/components/AboutBanner.vue";
import ContactForm from "@/components/ContactForm.vue";
import HomeContent from "@/components/HomeContent.vue";

export default {
  name: "Home",
  components: { CTA, AboutBanner, ContactForm, HomeContent },
};
</script>

<style lang="scss" scoped>
section {
  padding: 0 4rem;
  @media screen and (max-width: 600px) {
    padding: 0rem 1.5rem;
  }
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.8;
}
</style>
