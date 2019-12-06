
import { Utils } from '../services/utils.js';

const gifs = [
  'https://media.giphy.com/media/l4pTfx2qLszoacZRS/giphy.gif',
  'https://media.giphy.com/media/BlVnrxJgTGsUw/giphy.gif',
  'https://media.giphy.com/media/1iZRWH6sRyIkmSFG/giphy.gif',
  'https://media.giphy.com/media/5kf6exLOz1t1C/giphy.gif',
  'https://media.giphy.com/media/26lAQD2af1x5YTnHwn/giphy.gif',
  'https://media.giphy.com/media/dYZuqJLDVsWMLWyIxJ/giphy.gif',
  'https://media.giphy.com/media/MDokQN37RV1S0/giphy.gif',
];


export const Giphy = {
  data: function(){
    return {
      gif : 'https://media.giphy.com/media/l4pTfx2qLszoacZRS/giphy.gif',
    }
  },
  methods: {
    getGif(){
      return gifs [Utils.getRandomInt(0,gifs.length-1)];
    }
  },
  template: `
    <div class="giphy">
      <img width="100%" height="auto" :src="getGif()" />
    </div>
  `
};

