const App = new Vue({
  el: "#app",
  data: {
    showModal: false,
    email: "",
    name: "",
  },
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
  },
});
