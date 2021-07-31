<template>
  <div class="container" id="contact">
    <h2>Contact</h2>
    <p>I'll get back to you as soon as possible.</p>
    <form @submit.prevent="saveEmail">
      <input
        type="email"
        v-model="email"
        required
        placeholder="What's your email address?"
      />
      <button type="submit">Get in touch</button>
    </form>
    <small>I won't share your email.</small>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    saveEmail() {
      console.log(this.email);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto 3rem auto;
  padding: 2rem;
  background-color: #e5e7eb7f;
  text-align: center;
  color: rgba(0, 0, 0, 0.75);
  h2,
  p {
    margin-block-start: 0rem;
    margin-block-end: 0.8rem;
  }
  form {
    width: 90%;
    display: grid;
    margin: 0 auto 0.5rem auto;
    grid-template-columns: 70% 30%;
    gap: 1rem;
    @media screen and (max-width: 540px) {
      grid-template-columns: 1fr;
    }
    input {
      border: none;
      font-size: 1rem;
      padding: 0.5rem;
    }
    button {
      border: none;
      background-color: #42b883;
      color: #fff;
      padding: 0.75rem 0.5rem;
      border-radius: 0.4rem;
      font-size: 1rem;
      cursor: pointer;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  small {
    color: #555;
  }
}
</style>
