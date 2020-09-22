const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const HALF_PERIOD = Math.log(2);

module.exports = function dateSample(s) {
  if(typeof s ==="string"&& !isNaN(+s)&&s.trim()&& +s<15 && +s>0){
    const current = +s;
    const k = HALF_PERIOD / HALF_LIFE_PERIOD;
    let age = Math.log(MODERN_ACTIVITY / current) / k
    return Math.ceil(age)
  }
  else{
    return  false
  }


};



