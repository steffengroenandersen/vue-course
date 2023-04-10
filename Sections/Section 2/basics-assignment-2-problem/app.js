const app = Vue.createApp({
    data() {
        return {
            name: ''

        };
    },

    methods: {
        alertOnPress() {
            alert('Button Press Registered!')
        },
        setName(event){
            this.name = event.target.value;
        }

    }
});

app.mount('#assignment');