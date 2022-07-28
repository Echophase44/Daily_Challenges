var summation = function (num) {
  let sum = 0;
  for (let i = 0; i < num + 1; i++) {
    sum += i;
  }
  return sum;
};

summation(20);
