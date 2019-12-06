const gifs = [
  'https://media.giphy.com/media/l4pTfx2qLszoacZRS/giphy.gif'
];

export const Giphy = {
  data: function(){
    return {
      gif : gifs[0],
      show:  true,
    }
  },
  template: `
    <div class="giphy">
      <img width="100%" height="auto" :src="gif" />
    </div>
  `
};
