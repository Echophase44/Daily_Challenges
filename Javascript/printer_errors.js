function printerError(s) {
  let count = 0;
  s.split("").forEach((element) => {
    switch (element) {
      case "n":
        count += 1;
        break;
      case "o":
        count += 1;
        break;
      case "p":
        count += 1;
        break;
      case "q":
        count += 1;
        break;
      case "r":
        count += 1;
        break;
      case "s":
        count += 1;
        break;
      case "t":
        count += 1;
        break;
      case "u":
        count += 1;
        break;
      case "v":
        count += 1;
        break;
      case "w":
        count += 1;
        break;
      case "x":
        count += 1;
        break;
      case "y":
        count += 1;
        break;
      case "z":
        count += 1;
        break;
    }
  });
  return `${count}/${s.length}`;
}
