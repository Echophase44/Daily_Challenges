//scrimba.com/scrim/cob6143639c986ec5d9e628a4

// Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos!

https: function getRandomNumberOfTacos() {
  /*
  Make this function return an array that contains 
  between one and ten taco emojis 🌮
  Use the following JavaScript concepts:
      - Math.random()
      - Math.floor()
      - new Array()
      - Array.fill()
  */

  return new Array(Math.floor(Math.random() * 10) + 1).fill("🌮"); // replace this empty tray array
}

function putTacosOnTray() {
  return getRandomNumberOfTacos()
    .map(function (taco) {
      return `<div class="taco">${taco}</div>`;
    })
    .join("");
}

document.getElementById("tray").innerHTML = putTacosOnTray();
