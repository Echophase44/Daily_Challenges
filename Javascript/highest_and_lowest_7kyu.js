function highAndLow(numbers) {
  new_arry = [];
  arry = numbers.split(" ");
  for (let i = 0; i < arry.length; i++) {
    arry[i] = Math.floor(arry[i]);
  }
  new_arry = arry
    .sort(function (a, b) {
      return a - b;
    })
    .reverse();
  result = [];
  result[0] = new_arry[0];
  result[1] = new_arry[arry.length - 1];
  return result.join(" ");
}

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
