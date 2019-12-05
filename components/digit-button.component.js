export const DigitButton = {
  props:{
    number: {
      type: Number,
      required: true
    }
  },
  methods:{
    callback: function(e){
      this.$emit('click', this.number) ;  
    }
  },
  template: `
      <button @click="callback(number)">
        {{number}}
      </button>
  `
};