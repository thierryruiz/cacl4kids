export const Emoji = {
  props:{
    uri: {
      type: String,
      required: true
    },
    styleClass:{
      type: String,
      required: false
    }
  },
  template: `
     <img width="64" height="64" alt="star" :src="uri" :class="styleClass" />
     
  `
};