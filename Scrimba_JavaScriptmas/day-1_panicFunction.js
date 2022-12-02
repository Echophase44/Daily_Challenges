/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/

function panic(string) {
  let capitalString = string.toUpperCase() + "!";

  let stringArray = capitalString.split("");
  stringArray.forEach((element, i) => {
    if (element === " ") {
      stringArray[i] = " 😱 ";
    }
  });

  return (stringArray = stringArray.join(""));
}

// Test your function
console.log(panic("Hello"));
console.log(panic("winter is coming"));
