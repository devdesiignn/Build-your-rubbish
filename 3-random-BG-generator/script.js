//variable declaration
let randomColor = ``;
const body = document.querySelector("body");
const button = document.querySelector("button");
const tip = document.querySelectorAll(".tip");

//generating a random color
function generateColor() {
  const r = Math.ceil(Math.random() * 256); //generates a number from 0 to 255
  const g = Math.ceil(Math.random() * 256);
  const b = Math.ceil(Math.random() * 256);
  randomColor = `rgb(${r}, ${g}, ${b})`;
}

//setting the Background
function setBg() {
  generateColor(); //generates a random color
  body.style.backgroundColor = randomColor; //picks the random color and set it to the body Background
  tip[0].textContent = `Color: ${randomColor}`;
  tip[1].textContent = `Color: ${randomColor}`;
}

//listening for a key press
window.addEventListener("keydown", function (event) {
  //checks if the key is SPACE
  if (event.key == " ") {
    setBg(); //then sets the Background
  }
});

//listening for a button click
button.addEventListener("click", setBg);
