function reverseWords(str) {
  let strNew = str.split(" ");
  let result = [];

  strNew.forEach((element) => {
    result.push(element.split("").reverse().join(""));
  });
  return result.join(" ");
}

reverseWords("The quick brown fox jumps over the lazy dog."); //'ehT kciuq nworb xof spmuj revo eht yzal .god'
