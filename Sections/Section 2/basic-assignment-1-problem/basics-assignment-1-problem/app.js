const app = Vue.createApp({
  data() {
    return {
      yourName: "Steffen Grøn Andersen",
      yourAge: 31,
      vueLink: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    };
  },

  methods: {
    outputAge() {
      return this.yourAge + 5;
    },
    
    outputRandomNumber() {
      return Math.random();
    },

  },
});

app.mount("#assignment");
