function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelsCount = 0;

  str = str.split("");

  str.forEach((letter) => {
    if (vowels.includes(letter)) {
      vowelsCount++;
    }
  });

  return vowelsCount;
}
getCount("abracadabra");
