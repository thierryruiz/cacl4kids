import { COIN_DATA_URI } from '../emojis/coin.js'

export const Score = {
  data : function() {
    return {
      coinuri: COIN_DATA_URI
    }
  },
  props:{
    value: {
      type: Number,
      required: true
    }
  },
  template: `
    <div class="score">
      <img width="48" height="48" :src="coinuri" v-for="n in value" />
    </div>
  `
};