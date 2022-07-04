const reverseSeq = (n) => {
  let result = [];
  for (let i = 1; i < n + 1; i++) {
    result.unshift(i);
  }
  return result;
};

reverseSeq(5);
