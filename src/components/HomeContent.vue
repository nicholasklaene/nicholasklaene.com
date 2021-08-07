<template>
  <h1>Welcome to my official website.</h1>
  <h3 id="about">What do I do and why should you care?</h3>
  <p>
    I'm a passionate software developer with the technical skills to bring your
    ideas to life.
    <br />
    <br />
    My expertise lies in the following areas:
  </p>
  <h2>Cloud Solutions</h2>
  <p>
    Having somebody knowledgable about cloud and everything it brings to the
    table is key to survival in today's tech landscape. I'm passionate about
    crafting cloud-native solutions to simplify the software development
    process. I have sat and passed both the AWS Solutions Architect Associate
    and the AWS Developer Associate.
  </p>

  <div class="certifications">
    <a
      href="https://s3.us-east-2.amazonaws.com/assets.nicholasklaene.com/dva.pdf"
      target="_blank"
    >
      <img src="../assets/dva.png" width="268" />
    </a>
    <a
      href="https://s3.us-east-2.amazonaws.com/assets.nicholasklaene.com/saa.pdf"
      target="_blank"
    >
      <img src="../assets/saa.png" width="268" />
    </a>
  </div>

  <h2>Web Application Development</h2>
  <p>
    Nearly everything today is built with one thing in mind: the web. I
    specialize in building web-solutions that solve real-world problems.
  </p>
  <div class="explore">
    <router-link to="/projects">
      View my work
      <i class="fas fa-arrow-right"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeContent",
};
</script>

<style lang="scss" scoped>
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
.certifications {
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  gap: 2rem;
  width: 100%;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
    a {
      text-align: center;
    }
  }
}
</style>
