var min = function (list) {
  list = list
    .sort((a, b) => {
      return b - a;
    })
    .reverse();
  return list[0];
};

var max = function (list) {
  list = list.sort((a, b) => {
    return b - a;
  });
  return list[0];
};
