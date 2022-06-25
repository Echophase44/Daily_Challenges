function alphabetPosition(text) {
  let newText = text.toLowerCase().split("");
  let result = [];
  for (let i = 0; i < newText.length; i++) {
    switch (newText[i]) {
      case "a":
        result.push(1);
        break;
      case "b":
        result.push(2);
        break;
      case "c":
        result.push(3);
        break;
      case "d":
        result.push(4);
        break;
      case "e":
        result.push(5);
        break;
      case "f":
        result.push(6);
        break;
      case "g":
        result.push(7);
        break;
      case "h":
        result.push(8);
        break;
      case "i":
        result.push(9);
        break;
      case "j":
        result.push(10);
        break;
      case "k":
        result.push(11);
        break;
      case "l":
        result.push(12);
        break;
      case "m":
        result.push(13);
        break;
      case "n":
        result.push(14);
        break;
      case "o":
        result.push(15);
        break;
      case "p":
        result.push(16);
        break;
      case "q":
        result.push(17);
        break;
      case "r":
        result.push(18);
        break;
      case "s":
        result.push(19);
        break;
      case "t":
        result.push(20);
        break;
      case "u":
        result.push(21);
        break;
      case "v":
        result.push(22);
        break;
      case "w":
        result.push(23);
        break;
      case "x":
        result.push(24);
        break;
      case "y":
        result.push(25);
        break;
      case "z":
        result.push(26);
        break;
      default:
        return;
    }
  }
  return result.join(" ");
}
