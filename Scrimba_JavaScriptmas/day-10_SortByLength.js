//scrimba.com/scrim/co1824215b2db3ea80bd92f22

https: function sortByLength(strs) {
  return strs.sort((a, b) => a.length - b.length);
}

/**
 * Test Suite
 */
describe("sortByLength()", () => {
  it("sorts the strings from shortest to longest", () => {
    // arrange
    const strs = ["abc", "", "aaa", "a", "zz"];

    // act
    const result = sortByLength(strs);

    // log
    console.log("result: ", result);

    // assert
    expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
  });
});
