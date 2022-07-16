function correct(string) {
  let array = string.split("");
  let result = [];
  array.forEach((element) => {
    if (element === "0") {
      result.push("O");
    } else if (element === "5") {
      result.push("S");
    } else if (element === "1") {
      result.push("I");
    } else {
      result.push(element);
    }
  });
  return result.join("");
}
