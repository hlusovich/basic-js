const CustomError = require("../extensions/custom-error");

module.exports =function repeater(str,options) {
  if(!options.separator){
    options.separator='+'
  }
  if(!options.additionSeparator){
    options.additionSeparator='|'
  }
  if(!options.repeatTimes){
    options.repeatTimes=1
  }
  if(!options.additionRepeatTimes){
    options.additionRepeatTimes=1
  }
  if(options.addition===undefined){
    options.addition="";

  }
  let addition = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes)
  str = "" + str+addition.slice(0,addition.length-options.additionSeparator.length)+options.separator;
  if(options.repeatTimes){
    str=str.repeat(options.repeatTimes)
  }
  return str.slice(0,str.length-options.separator.length)
};

