
import { Utils } from '../services/utils.js';

const gifs = [
  'https://media.giphy.com/media/l4pTfx2qLszoacZRS/giphy.gif',
  'https://media.giphy.com/media/BlVnrxJgTGsUw/giphy.gif',
];


export const Giphy = {
  data: function(){
    return {
      gif : 'https://media.giphy.com/media/l4pTfx2qLszoacZRS/giphy.gif',
    }
  },
  methods: {
    getGif(){
      return Utils.getRandomInt(0,gifs.length-1)
    }
  },
  template: `
    <div class="giphy">
      <img width="100%" height="auto" :src="getGif()" />
    </div>
  `
};

