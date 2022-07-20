String.prototype.toJadenCase = function () {
  let arry = this.split("")
  arry[0] = arry[0].toUpperCase()
  arry.forEach((element, index) => {
    if(element === " "){
      arry[index + 1] = arry[index +1].toUpperCase()
    }
  })
  
  return arry.join("")
};