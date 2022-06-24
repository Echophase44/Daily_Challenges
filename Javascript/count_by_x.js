function countBy(x, n) {
  let z = [];
  let sum = 0;
  for (let i = x; z.length < n; i++) {
    z.push((sum += x));
  }

  return z;
}

countBy(1, 10); // [1,2,3,4,5,6,7,8,9,10]
