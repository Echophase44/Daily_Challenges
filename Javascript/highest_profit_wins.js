function minMax(arr) {
  let result = [];
  result.push(Math.min(...arr));
  result.push(Math.max(...arr));
  return result;
}

minMax([1, 2, 3, 4, 5]);
