//scrimba.com/scrim/co7cb418286aac46ba617df45

https: function countVowelConsonant(str) {
  let vowels = "aeiou";
  let arry = str.split("");
  let result = 0;
  arry.forEach((letter) => {
    if (vowels.includes(letter)) {
      result++;
    } else {
      result += 2;
    }
  });
  return result;
}

/**
 * Test Suite
 */
describe("countVowelConsonant()", () => {
  it("returns total of vowels(1) and consonants(2) to be added", () => {
    // arrange
    const value = "abcde";

    // act
    const result = countVowelConsonant(value);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toBe(8);
  });
});
