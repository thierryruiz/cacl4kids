export const Utils = {
  
  getRandomInt : function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  randomCalc : function () {  
    let d1  = this.getRandomInt(1,10) ;
    let d2 = this.getRandomInt(1,10) ;
    let operator = this.getRandomInt(0,1) ;
    let calc = d1 + ((operator) ?'-':'+') + d2 ;
    let result = operator ? d1-d2 : d1+d2;
    if (result < 0 ){
      calc = d2 + '-' + d1 ;
      result = -result ;
    }
    
    return {
      calc : calc,
      result : result
      
    }
  }
};