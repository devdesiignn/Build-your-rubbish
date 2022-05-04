//variable declaration
let r,
  g,
  b,
  randomColor = ``;
const body = document.querySelector("body");
const button = document.querySelector("button");

//generating a random color
function generateColor() {
  r = Math.ceil(Math.random() * 256); //generates a number from 0 to 255
  g = Math.ceil(Math.random() * 256);
  b = Math.ceil(Math.random() * 256);
  randomColor = `rgb(${r}, ${g}, ${b})`;
}

//setting the Background
function setBg() {
  generateColor(); //generates a random color
  body.style.background = randomColor; //picks the random color and set it to the body Background
}

//listening for a key press
body.addEventListener("keydown", function (event) {
  //checks if the key is SPACE
  if (event.key == " ") {
    setBg(); //then sets the Background
  }
});

//listening for a button click
button.addEventListener("click", setBg);
