function solution(string) {
  let arry = string.split("");
  let result = [];
  arry.forEach((element, index) => {
    if (element === element.toUpperCase()) {
      result.push(" ");
      result.push(element);
    } else {
      result.push(element);
    }
  });
  return result.join("");
}

solution("camelCasingTest");
