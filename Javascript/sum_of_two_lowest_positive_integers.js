function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort((a, b) => a - b);
  result = numbers[0] + numbers[1];
  return result;
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]);
