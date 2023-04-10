const app = Vue.createApp({
    data() {
        return {
            result: 0,
            notThere: 'Not there yet!',
            tooMuch: 'To much!',
            display: ''
        };
    },

    watch: {
        result(value){
            if(value > 37){
                const that = this;
                setTimeout(function(){
                    that.result = 0;
                },5000);
            }
        }
    },

    computed: {
        displayResult() {
            if (this.result < 37) {
                return this.notThere;
            } else if (this.result > 37) {
                return this.tooMuch;
            } else if (this.result === 37) {
                return 37;
            }
            return this.display;
        }

    },

    methods: {
        addOne() {
            this.result++;
        },

        addFive() {
            this.result = this.result + 5;
        }
    }
});

app.mount('#assignment');