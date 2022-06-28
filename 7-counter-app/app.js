//initializing count
let count = 0;

//selecting the buttons and value display
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

//running a function for each of the button
buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    //checking the class of the clicked button
    styles = event.currentTarget.classList;

    //setting the count based on the clicked button
    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }

    //displaying the count
    value.textContent = count;

    //setting the color based on the value
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else if (count === 0) {
      value.style.color = "hsl(209, 61%, 16%)";
    }
  });
});
