//scrimba.com/scrim/co3ed4bf2b804d02352c32801

/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

https: function altCaps(str) {
  const newStr = str
    .split("")
    .map((element, index) => {
      return (element =
        index % 2 === 0 ? element.toUpperCase() : element.toLowerCase());
    })
    .join("");

  return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
