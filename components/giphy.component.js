
import { Utils } from '../services/utils.js';

const gifs = [
  'https://media.giphy.com/media/l4pTfx2qLszoacZRS/giphy.gif',
  'https://media.giphy.com/media/BlVnrxJgTGsUw/giphy.gif',
  'https://media.giphy.com/media/1iZRWH6sRyIkmSFG/giphy.gif',
  'https://media.giphy.com/media/5kf6exLOz1t1C/giphy.gif',
  'https://media.giphy.com/media/26lAQD2af1x5YTnHwn/giphy.gif',
  'https://media.giphy.com/media/dYZuqJLDVsWMLWyIxJ/giphy.gif',
  'https://media.giphy.com/media/MDokQN37RV1S0/giphy.gif',
  'https://media.giphy.com/media/JE6xHkcUPtYs0/giphy.gif',
  'https://media.giphy.com/media/tyxovVLbfZdok/giphy.gif',
  'https://media.giphy.com/media/nc1GZ3BQtghoAlDEEQ/giphy.gif',
  'https://media.giphy.com/media/6fScAIQR0P0xW/giphy.gif',
  'https://media.giphy.com/media/RX7N03MEUafW8/giphy.gif',
  'https://media.giphy.com/media/MLZYKauKxeqKk/giphy.gif',
  'https://media.giphy.com/media/nNxT5qXR02FOM/giphy.gif',
  'https://media.giphy.com/media/33OrjzUFwkwEg/giphy.gif',
  'https://media.giphy.com/media/SRO0ZwmImic0/giphy.gif',
  'https://media.giphy.com/media/LxSFsOTa3ytEY/giphy.gif',
  'https://media.giphy.com/media/TIixDzgRPpK1JmghP2/giphy.gif'
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

