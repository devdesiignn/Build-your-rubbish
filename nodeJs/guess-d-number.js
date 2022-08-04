const prompt = require("prompt-sync")(); //Calling the prompt-sync module

//Variable Declarations
const number = Math.floor(Math.random() * 10); //Number is randomly generated 0 - 9;
let input;
const welcomeMsg = "This is a Guessing Game. \n";
const hintMsg =
  "HINT: The number you're guessing is greater than 0 and less then 10 \n";
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
      console.log(`Indeed the number is ${number} \n`);
      console.log(passed.toUpperCase());

      break; //This breaks the While loop
    } else {
      console.log(failed);
      console.log(`You have ${noOfTries} tries left!`);
      if (noOfTries == 0) {
        console.log("Game Over!!!".toUpperCase());
        console.log(`The number is ${number}`);
      }
    }
  }
}
guess();
