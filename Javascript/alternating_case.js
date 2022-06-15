String.prototype.toAlternatingCase = function () {
  result = [];

  this.split("").forEach((element) => {
    if (element.toUpperCase() === element) {
      result.push(element.toLowerCase());
    } else if (element.toUpperCase() !== element) {
      result.push(element.toUpperCase());
    } else {
      result.push(element);
    }
  });
  return result.join("");
};

"HELLO WORLD".toAlternatingCase();
