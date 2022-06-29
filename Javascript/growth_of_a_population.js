function nbYear(p0, percent, aug, p) {
  let numberOfYears = 0;
  let currentPopulation = p0;

  while (currentPopulation < p) {
    currentPopulation = Math.floor(
      currentPopulation + currentPopulation * (percent / 100) + aug
    );
    numberOfYears++;
    if (currentPopulation === p) {
      break;
    }
  }
  return numberOfYears;
}
