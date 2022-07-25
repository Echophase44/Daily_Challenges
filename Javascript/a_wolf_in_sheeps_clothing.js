function warnTheSheep(queue) {
  let warning = "";
  if (queue[queue.length - 1] === "wolf") {
    return "Pls go away and stop eating my sheep";
  } else {
    queue.forEach((element, index) => {
      if (element === "wolf") {
        let sheepToWarn = queue.length - [index + 1];
        warning = `Oi! Sheep number ${sheepToWarn}! You are about to be eaten by a wolf!`;
        return warning;
      }
    });
  }
  return warning;
}
