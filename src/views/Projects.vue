<template>
  <CTA />
  <AboutBanner />
  <section>
    <h1>Projects</h1>
    <ProjectPreview
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </section>
</template>

<script>
import CTA from "@/components/CTA.vue";
import ContactForm from "@/components/ContactForm.vue";
import HomeContent from "@/components/HomeContent.vue";
import AboutBanner from "@/components/AboutBanner.vue";
import ProjectPreview from "@/components/ProjectPreview.vue";
import projects from "@/staticData/projects.js";

export default {
  name: "Projects",
  components: { CTA, ContactForm, HomeContent, AboutBanner, ProjectPreview },
  data() {
    return {
      projects: projects,
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 0 4rem 2rem 4rem;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.8;
  div {
    margin-bottom: 1rem;
    &:not(:last-child) {
      border-bottom: 3px solid #e5e7eb;
    }
  }
}
</style>
