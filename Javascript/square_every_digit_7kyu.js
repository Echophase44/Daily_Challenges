function squareDigits(num) {
  let result = [];
  let nums = num.toString().split("");
  nums.forEach((number) => result.push(Math.pow(number, 2)));
  return parseInt(result.join(""));
}
