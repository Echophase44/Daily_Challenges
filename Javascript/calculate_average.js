function find_average(array) {
  let sum = array.reduce(function (gather, number) {
    let gatheringStorm = gather + number;
    return gatheringStorm;
  }, 0);
  let average = sum / array.length;
  if (average > 0) {
    return average;
  } else {
    return 0;
  }
}
