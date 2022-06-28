const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const body = document.body;
const colorCode = document.querySelector(".color-code");
const btn = document.querySelector("#button");

//for mobile devices
btn.addEventListener("click", function () {
  //run a loop to pick an element from the array 6 times
  let hexCode = "#";

  for (let i = 0; i < 6; i++) {
    hexCode += hex[getRandomCode()];
  }
  body.style.backgroundColor = hexCode;
  btn.style.backgroundColor = hexCode;
  colorCode.textContent = hexCode;
});

//for desktop devices
body.addEventListener("keydown", function (event) {
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    hexCode += hex[getRandomCode()];
  }
  if (event.key == " ") {
    //then sets the Background
    body.style.backgroundColor = hexCode;
    btn.style.backgroundColor = hexCode;
    colorCode.textContent = hexCode;
  }
});

//generate a random number within 0 - 15
function getRandomCode() {
  return Math.floor(Math.random() * hex.length);
}
