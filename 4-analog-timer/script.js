//variable declarations
const secondsHand = document.querySelector(".hand--second");
const minuteHand = document.querySelector(".hand--minute");
const hourHand = document.querySelector(".hand--hour");

function setThetime() {
  //getting the time
  const mainDate = new Date();

  //calculating the hand ratio
  const secondsRatio = mainDate.getSeconds() / 60;
  const minuteRatio = (secondsRatio + mainDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + mainDate.getHours()) / 12;

  //calling the function to set the rotation with the ratio
  setRotation(secondsHand, secondsRatio);
  setRotation(minuteHand, minuteRatio);
  setRotation(hourHand, hourRatio);
}

//setting the rotation property
function setRotation(handElement, rotationRatio) {
  handElement.style.setProperty("--rotation", rotationRatio * 360);
}

//setting the time
setThetime();

//to ensure the time updates per seconds
setInterval(setThetime, 1000);
