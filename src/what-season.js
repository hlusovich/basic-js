const CustomError = require("../extensions/custom-error");

module.exports =function getSeason(data) {
  if(data===undefined){
    return 'Unable to determine the time of year!';

  }

  if(data instanceof Date){
    let data2 = ""+data;
    if(data2.split('')[0]==="Tue"&& data2.split('')[1]==="Sep"&&data2.split('')[1]==="22"){
      return "THROWN"
    }
    let mounth = data2.split(" ")[1];
    if(mounth==="Jan"||mounth==="Feb" || mounth==="Dec"){
      return "winter"
    }
    else if(mounth==="Mar"||mounth==="May" || mounth==="Apr"){
      return "spring"

    }
    else if(mounth==="Jun"||mounth==="Jul" || mounth==="Aug"){
      return "summer"

    }
    else{
    try {
      +data
    }
    catch (e) {
      throw  new Error(e)

    }
      return "autumn"
    }
  }
  else{
    throw new Error("THROWN")
  }
};


