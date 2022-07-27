function strCount(str, letter) {
  let count = 0;
  str.split("").forEach((element) => {
    if (element === letter) {
      count++;
    }
  });
  return count;
}

strCount("hello");
