function order(words) {
  let result = [];
  let arry = words.split(" ");

  if (words === "") {
    return "";
  } else {
    for (let i = 0; i < arry.length; i++) {
      result.push("");
    }
  }

  arry.forEach((element) => {
    let position = element.split("");
    position.forEach((letter) => {
      switch (letter) {
        case "1":
          result[0] = element;
          break;
        case "2":
          result[1] = element;
          break;
        case "3":
          result[2] = element;
          break;
        case "4":
          result[3] = element;
          break;
        case "5":
          result[4] = element;
          break;
        case "6":
          result[5] = element;
          break;
        case "7":
          result[6] = element;
          break;
        case "8":
          result[7] = element;
          break;
        case "9":
          result[8] = element;
          break;
      }
    });
  });
  return result.join(" ");
}
order("is2 Thi1s T4est 3a");
