const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let counts = 0
  function mersenNumbers(n){
    if(n===1){
      return 1
    }
    else{
      return 2*mersenNumbers(n-1)+1
    }

  }
  counts=mersenNumbers(disksNumber)
  return {
    turns:counts,
    seconds: Math.floor(counts/turnsSpeed*3600)
  }

};
