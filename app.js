


import { DigitButton } from './components/digit-button.component';
import { Emoji } from './components/emoji.component';
import { Score } from './components/score.component';
import { Giphy } from './components/giphy.component';
import { Utils } from './services/utils.js';
import { SMILE_DATA_URI }  from './emojis/smile' ;
import { EVIL_DATA_URI }  from './emojis/evil' ;

const blank = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" ;
const _money_inc = 0.1; // reward step
const _questionDuration = 20000 ; // time between 2 questions
const _giphyDuration = 2200 ; // time between 2 questions

const levels =  [{
    min : 1,
    max : 10,
    duration : 20000,
  },
  {
    min : 5,
    max : 10,
    duration : 15000,
  },
    {
    min : 5,
    max : 15,
    duration : 20000,
  },
  {
    min : 5,
    max : 15,
    duration : 15000,
  },


];

const level = 2; // 1,2,3 



export const App = {
  created: function () {
    this.level = levels[level-1] ;
    this.max  = 2*this.level.max; 
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
      this.question = Utils.randomCalc(this.level.min, this.level.max) ;
      this.emoji= blank;
      if(this.level.duration){
        let self = this ;
        this.timer = setTimeout(function(){
          self.newQuestion();
        },this.level.duration);
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
                
        this.emojiClass = '';
        
        if (this.coins - coinsBk){
          this.yeahh() ;
        }


      } else {
        this.emoji = EVIL_DATA_URI ;
        this.emojiClass = 'blink_me';
        this.score -= _money_inc;

        if(this.score < 0 ){
          this.score = 0 ;
        }
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
      }, _giphyDuration);
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
        <DigitButton v-for="n in max" :number="n" @click="answer" />
      </div>
      <div class="score">
        <Score v-if="coins" :value='coins' />
      </div>
    </div>
  `
}