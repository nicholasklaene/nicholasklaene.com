<template>
  <div class="container" id="contact" v-if="!emailSaved">
    <h2>Contact</h2>
    <p>I'll get back to you as soon as possible.</p>
    <form @submit.prevent="saveInformation">
      <input
        type="email"
        v-model="email"
        required
        placeholder="What's your email address?"
      />
      <div class="textarea-wrapper">
        <textarea
          v-model="message"
          placeholder="Enter a custom message here..."
        ></textarea>
      </div>
      <button type="submit">Get in touch</button>
    </form>
    <small>I won't share your email.</small>
  </div>
  <div class="container" id="contact" v-else>
    <h2>I'll get back to you soon!</h2>
    <p>Your response was saved.</p>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      email: "",
      message: "",
      emailSaved: false,
    };
  },
  methods: {
    async saveInformation() {
      const data = {
        email: this.email,
        message: this.message,
      };
      await fetch(
        "https://153fclmvag.execute-api.us-east-2.amazonaws.com/saveEmail",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      this.email = "";
      this.message = "";
      this.emailSaved = true;
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
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto 1rem auto;
    input {
      border: none;
      font-size: 1rem;
      padding: 1rem;
      &:focus {
        outline: none;
      }
    }
    .textarea-wrapper {
      width: 100%;
      margin: 0 auto;
      display: flex;
      textarea {
        font-family: Poppins, sans-serif;
        border: none;
        width: 100%;
        max-width: 100%;
        padding: 1rem;
        min-height: 100px;
        font-size: 1rem;
        &:focus {
          outline: none;
        }
      }
    }
    button {
      max-width: 150px;
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
