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
    crafting cloud-native business solutions to simplify the software
    development process, saving businesses time and money.
  </p>
  <h2>Web Application Development</h2>
  <p>
    Nearly everything today is built with one thing in mind: the web. I
    specialize in building web-solutions that solve real-world problems.
  </p>
  <div class="explore">
    <router-link to="/">
      Explore nicholasklaene.com
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
</style>
