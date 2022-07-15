function abbrevName(name){
  name = name.split("");
  let result = [];
  result.push(name[0])
  
  name.forEach((element, index) => {
    if(element === " "){
      result.push(name[index + 1])
    }
  })
  return result.join(" ").replace(" ", ".").toUpperCase()
}