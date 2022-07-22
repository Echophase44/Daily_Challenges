function count(string) {
  let result = {};
  string.split("").forEach((element) => {
    result[element] ? result[element]++ : (result[element] = 1);
  });

  return result;
}

count("aba");
