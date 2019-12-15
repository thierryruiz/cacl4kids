
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
  'https://media.giphy.com/media/TIixDzgRPpK1JmghP2/giphy.gif',
  'https://media.giphy.com/media/fxpPSvdGnxfR6/giphy.gif',
  'https://media.giphy.com/media/owjkiwz58Lmes/giphy.gif'
];

const gifsMatt = [
  'https://media.giphy.com/media/YfCuW2maPixri/giphy.gif',
  'https://media.giphy.com/media/9E7kUhnT9eDok/giphy.gif',
  'https://media.giphy.com/media/3ov9kbqciMGJ27P7RS/giphy.gif',
  'https://media.giphy.com/media/11cFgJK4tK4Jpu/giphy.gif',
  'https://media.giphy.com/media/mRxzbdhbv9nj2/giphy.gif',
  'https://media.giphy.com/media/hKtJH6oOfw1dC/giphy.gif',
  'https://media.giphy.com/media/eEcul6FkhKsOk/giphy.gif',
  'https://media.giphy.com/media/PoLEDIrqqWeXbJHw1p/giphy.gif',
  'https://media.giphy.com/media/Sc4H0zndiM9zy/giphy.gif',
  'https://media.giphy.com/media/PcKlU7KMWPirC/giphy.gif',
  'https://media.giphy.com/media/CbXbS4a5jBGXC/giphy.gif',
  'https://media.giphy.com/media/3ohs87VPYLrH0JoF8s/giphy.gif',
  'https://media.giphy.com/media/6ityUmaib3wQg/giphy.gif',
  'https://media.giphy.com/media/FEI4azhoLBt8k/giphy.gif',
  'https://media.giphy.com/media/4kNO1v6ABvMXu/giphy.gif',
  '',
];


export const Giphy = {
  data: function(){
    return {
      gif : 'https://media.giphy.com/media/l4pTfx2qLszoacZRS/giphy.gif',
    }
  },
  methods: {
    getGif(){
      return gifsMatt[Utils.getRandomInt(0,gifsMatt.length-1)];
    }
  },
  template: `
    <div class="giphy">
      <img width="100%" height="auto" :src="getGif()" />
    </div>
  `
};

