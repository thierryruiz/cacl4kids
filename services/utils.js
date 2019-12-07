export const Utils = {
  
  getRandomInt : function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  randomCalc : function (min, max) {  
    let d1  = this.getRandomInt(min,max) ;
    let d2 = this.getRandomInt(min,max) ;
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