const prompt = require("prompt-sync")(); //Calling the prompt-sync module

//Variable Declarations
const number = 7;
let input;
const welcomeMsg = "This is a Guessing Game. \n";
const hintMsg =
  "HINT: The number you're guessing is less than 0 and greater then 10 \n";
let noOfTries = 3;
const passed = "Welldone, You passed! \n";
const failed = "Wrong!, Try Again! \n";

//Prelimary Messages
console.log(welcomeMsg.toUpperCase());
console.log(hintMsg);
console.log(`You have ${noOfTries} tries`);

//The Guess Function
function guess() {
  while (noOfTries > 0) {
    noOfTries--;
    input = prompt("Enter Number: ");
    if (number == input) {
      console.log(passed.toUpperCase());
      break;
    } else {
      console.log(failed);
      console.log(`You have ${noOfTries} tries left!`);
      if (noOfTries == 0) {
        console.log("Game Over!!!".toUpperCase());
      }
    }
  }
}
guess();
