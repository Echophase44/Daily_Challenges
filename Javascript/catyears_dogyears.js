var humanYearsCatYearsDogYears = function (humanYears) {
  let catYears = 0;
  let dogYears = 0;
  let result = [];

  if (humanYears === 1) {
    result.push(1);
    result.push(15);
    result.push(15);
  } else if (humanYears === 2) {
    result.push(2);
    result.push(24);
    result.push(24);
  } else {
    result.push(humanYears);
    result.push(24 + (humanYears - 2) * 4);
    result.push(24 + (humanYears - 2) * 5);
  }
  return result;
};

humanYearsCatYearsDogYears(1);
humanYearsCatYearsDogYears(15);
