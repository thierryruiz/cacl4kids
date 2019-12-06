


import { DigitButton } from './components/digit-button.component';
import { Emoji } from './components/emoji.component';
import { Score } from './components/score.component';
import { Giphy } from './components/giphy.component';
import { Utils } from './services/utils.js';
import { SMILE_DATA_URI }  from './emojis/smile' ;
import { EVIL_DATA_URI }  from './emojis/evil' ;

const blank = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" ;
const _money_inc = 1;
const _timer = 10000 ;


export const App = {
  created: function () {
    this.newQuestion();
  },
  components: { DigitButton, Emoji, Score, Giphy },
  data: function () {
    return {
      question: {},
      result:'',
      score:0,
      coins:0,
      emoji:blank,
      emojiClass:'',
      timer : null
    }
  },
  methods: {

    newQuestion: function(){
      
      if(this.timer){
        clearTimeout(this.timer);
      }

      this.result = '' ;
      this.question = Utils.randomCalc() ;
      this.emoji= blank;
      if(_timer){
        let self = this ;
        this.timer = setTimeout(function(){
          self.newQuestion();
        },_timer);
      }
    },
    
    answer: function(v) {
      
      if(this.timer){
        clearTimeout(this.timer);
      }

      this.result = v;
      let self = this ;
      
      if(v === this.question.result){
        this.score += _money_inc;
        this.emoji = SMILE_DATA_URI ;

        let coinsBk = this.coins ;
        this.coins = Math.floor(this.score) ;
        
        if (this.coins - coinsBk){
          this.yeahh() ; 
        }

        this.emojiClass = '';
        console.log(this.coins);
      } else {
        this.emoji = EVIL_DATA_URI ;
        this.emojiClass = 'blink_me';
      }

      setTimeout(function(){
        self.newQuestion();
      },2000) ;
    
    },

    yeahh : function(){
      this.showGiphy = true;
      let self = this;
      setTimeout(function(){
        self.showGiphy = false;
      }, 2500);
    }
  },
  template: `
    <div class="container">
      <Giphy v-if="showGiphy"/>
      <div class="calc">
        <span class="q">{{question.calc}}</span> = <span class="r">{{result}}</span></div>
      <div class="emoji"><Emoji :uri="emoji" :styleClass="emojiClass" /></div>
      <div class="pad">
        <DigitButton :number="0" @click="answer" />
      </div>
      <div class="pad">
        <DigitButton v-for="n in 20" :number="n" @click="answer" />
      </div>
      <div class="score">
        <Score v-if="coins" :value='coins' />
      </div>
    </div>
  `
}