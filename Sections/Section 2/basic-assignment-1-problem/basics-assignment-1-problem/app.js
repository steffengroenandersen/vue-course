const app = Vue.createApp({
    data() {
        return {
            yourName: 'Steffen Grøn Andersen',
            yourAge: 31

        }
    },

    methods: {
        outputAge() {
            
            return this.yourAge + 5;  
        }
    }
});

app.mount("#assignment");