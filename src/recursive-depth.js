const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(){
    this.deep = 0
    this.answer = 0
    Array.prototype.max = function() {
      return Math.max.apply(null, this);
    };
  }
  arrayFuller(arr) {
    for (let i of arr) {
      if (Array.isArray(i)) {
        i.push(1)
        this.arrayFuller(i)
      }
    }
    return arr
  }
  calculateDepth(item, level = 0){
    if(level===0){
      this.arrayFuller(item)
    }
    if (Array.isArray(item)){
      return item.map((value, index)=>{
        return this.calculateDepth(value, level + 1)
      }).max()
    }
    return level;
  }
};
