function isIsogram(str) {
  let arry = str.toLowerCase().split("");
  let arryTwo = str.toLowerCase().split("");
  let letter = [];
  let toggle = true;

  arry.forEach((element, i) => {
    letter.push(element);
    arryTwo.shift();

    if (arryTwo.includes(element)) {
      toggle = false;
    }
    letter.pop();
  });
  return toggle;
}
