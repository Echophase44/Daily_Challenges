function sum (numbers) {
  let sum = numbers.reduce((acc, c) => acc + c, 0)
  return sum;
  
};

sum([1, 5.2, 4, 0, -1])

Write a function that takes an array of numbers and returns the sum of the numbers.