function smallEnough(a, limit) {
  let result = true;
  a.forEach((element) => {
    if (element > limit) {
      result = false;
    }
  });
  return result;
}
