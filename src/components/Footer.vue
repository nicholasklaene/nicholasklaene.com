<template>
  <footer>
    <a href="https://github.com/nicholasklaene" target="_blank">
      Github
    </a>
    <a href="https://www.linkedin.com/in/nicholas-klaene/" target="_blank">
      Linkedin
    </a>
    <a
      href="https://s3.us-east-2.amazonaws.com/assets.nicholasklaene.com/nicholasklaeneresume.pdf"
      target="_blank"
    >
      Resume
    </a>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  display: flex;
  padding: 4rem 0;
  gap: 2rem;
  justify-content: center;
  background-color: #e5e7eb7f;
  a {
    text-decoration: none;
    color: #487eb0;
    font-size: 0.9rem;
  }
}
</style>
