const prompt = require("prompt-sync")();
const number = 12;
let input;
const failed = "Wrong!, Try Again!";
const passed = "Weldone, You passed!";

console.log("This is a Guessing Game".toUpperCase());
function guess() {
  input = prompt("Enter Number: ");
  while (input != number) {
    console.log(failed);
    input = prompt("Enter Number: ");
  }
  if (input == number) {
    console.log(passed.toUpperCase());
  }
}
guess();
