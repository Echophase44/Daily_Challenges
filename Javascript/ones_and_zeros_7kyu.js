const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

binaryArrayToNumber([1, 1, 1, 1]);
binaryArrayToNumber([0, 1, 1, 0]);
//Given an array of ones and zeroes, convert the equivalent binary value to an integer.
