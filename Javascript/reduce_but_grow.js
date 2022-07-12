function grow(x) {
  let result = 1;
  x.forEach((element) => (result *= element));
  return result;
}

grow([1, 2, 3]);
