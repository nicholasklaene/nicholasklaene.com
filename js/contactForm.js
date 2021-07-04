const App = new Vue({
  el: "#app",
  data: {
    errors: {
      email: false,
    },
    darkMode: false,
    showModal: false,
    email: "",
    name: "",
    message: "",
  },
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
    toggleDarkMode: function () {
      this.darkMode = !this.darkMode;
    },
    saveContactInfo: function () {
      this.evalEmail();
      if (this.errors.email) return;

      let userData = {
        email: this.email,
        name: this.name,
        message: this.message,
      };

      this.email = "";
      this.name = "";
      this.message = "";
      this.showModal = false;
    },
    evalEmail() {
      isValid = this.email.trim() != "";

      regex =
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";

      isValid = this.email.match(regex);

      this.errors.email = !isValid;
    },
  },
});
