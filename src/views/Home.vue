<template>
  <CTA />
  <AboutBanner />
  <div class="content" id="about">
    <HomeContent />
    <ContactForm />
  </div>
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
.content {
  padding: 0 4rem;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.8;
}
</style>
