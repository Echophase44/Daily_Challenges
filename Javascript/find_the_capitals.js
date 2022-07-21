var capitals = function (word) {
  let result = [];
  word = word.split("");
  word.forEach((element, index) => {
    if (element === element.toUpperCase()) {
      result.push(index);
    }
  });
  return result;
};

capitals("CoDeWarS");
