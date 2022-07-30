function fakeBin(x) {
  x = x.split("");
  let result = [];

  for (let i = 0; i < x.length; i++) {
    x[i] < 5 ? result.push(0) : result.push(1);
  }
  return result.join("");
}

fakeBin("23463562457");
