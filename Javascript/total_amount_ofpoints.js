function points(games) {
  let result = 0;
  games.forEach((element) => {
    let newElement = element.split("")
    if(newElement[0] > newElement[2]){
      result += 3
    } else if (newElement[0] === newElement[2]){
      result += 1
    }
  })
  return result
}