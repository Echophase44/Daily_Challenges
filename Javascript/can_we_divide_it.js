function isDivideBy(number, a, b) {
  let testOne = number % a;
  let testTwo = number % b;

  if (testOne === 0 && testTwo === 0) {
    return true;
  } else {
    return false;
  }
}

isDivideBy(-12, 2, -6);
