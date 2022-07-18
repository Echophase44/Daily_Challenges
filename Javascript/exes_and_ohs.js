function XO(str) {
  str = str.toLowerCase().split("");
  let xCount = 0;
  let oCount = 0;

  str.forEach((element) => {
    if (element === "o") {
      oCount += 1;
    } else if (element === "x") {
      xCount += 1;
    }
  });

  if (xCount === oCount) {
    return true;
  } else {
    return false;
  }
}

XO("xxOo");
XO("xxxm");
