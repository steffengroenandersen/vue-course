const app = Vue.createApp({
  data() {
    return {
        enteredTaskValue: '',
        tasks: ['task1', 'task2'],
        listIsVisible: true,
        toggleText: 'Hide List'
    };
  },

  methods: {
    addTask(){
        this.tasks.push(this.enteredTaskValue);
    },

    hideList(){
        this.listIsVisible = !this.listIsVisible;
    },

    toggleTextValue(){
        if(this.toggleText === 'Hide List'){
            this.toggleText = 'Show List'
        } else if (this.toggleText === 'Show List'){
            this.toggleText = 'Hide List'
        }
    }
    
  },
});

app.mount("#assignment");
