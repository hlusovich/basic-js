const CustomError = require("../extensions/custom-error");

module.exports =function createDreamTeam(members ) {
  if(Array.isArray(members)){
    let sort1 = members.sort()
    let name = []
    for(let i of sort1){
      if(typeof i ==="string"){
        name.push(i.trim()[0].toUpperCase())
      }
    }
    return name.sort().join('')}
  else{
    return  false
  }


};

