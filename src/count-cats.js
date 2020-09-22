const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let catsCount = 0;
  for(let i of array){
    for(let j of i){
      if(j==="^^")
        catsCount++

    }

  }
  return catsCount
  // remove line with error and write your code here
};
