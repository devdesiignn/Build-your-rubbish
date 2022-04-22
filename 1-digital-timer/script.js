//variables declaration

let hours,
  mins,
  secs = 0;
let amPm;
let is12hrs = true;
let isLight = true;

//function to get time in 24 hrs format

function get24hrs() {
  const mainDate = new Date();
  hours = mainDate.getHours();
  mins = mainDate.getMinutes();
  secs = mainDate.getSeconds();
  amPm = "";
}

//function to get time in 12 hrs format

function get12hrs() {
  const mainDate = new Date();
  originalHours = mainDate.getHours();
  hours = originalHours % 12;
  hours = hours === 0 ? 12 : hours;
  mins = mainDate.getMinutes();
  secs = mainDate.getSeconds();
  amPm = originalHours < 12 ? "AM" : "PM";
}

//function to pick choose time [ 24 hrs or 12 hrs format ]

function getTheTime() {
  is12hrs ? get12hrs() : get24hrs();
  is12hrs
    ? (document.getElementById("view").innerText = "See in 24 Hours Format")
    : (document.getElementById("view").innerText = "See in 12 Hours Format");
  setTheTime();
}
//function call [ pick choose time ]
setInterval(getTheTime, 1000);

//time formatter [ 1 ... 9 => 01 ... 09 ]

const paddingFormat = (sample) => String(sample).padStart(2, "0");

//function to display time with the formatter

function setTheTime() {
  document.getElementById("hours").innerText = paddingFormat(hours);
  document.getElementById("mins").innerText = paddingFormat(mins);
  document.getElementById("secs").innerText = paddingFormat(secs);
  document.getElementById("am-pm").innerText = amPm;
}

//toggler for 12 hrs format or 24 hrs format

document.querySelector("#view").addEventListener("click", function () {
  is12hrs = !is12hrs;
});

//function to set light theme

function lightTheme() {
  let body = document.getElementById("body");
  let toggle = document.getElementsByClassName("toggle");
  body.style.backgroundColor = "#f1f1f1";
  body.style.color = "#222222";
  toggle[0].style.backgroundColor = "#f1f1f1";
  toggle[0].style.color = "#222222";
  toggle[1].style.backgroundColor = "#f1f1f1";
  toggle[1].style.color = "#222222";
  toggle[0].style.borderColor = "#222";
  toggle[1].style.borderColor = "#222";
}

//function to set dark theme

function darkTheme() {
  let body = document.getElementById("body");
  let toggle = document.getElementsByClassName("toggle");
  body.style.backgroundColor = "#222222";
  body.style.color = "#f1f1f1";
  toggle[0].style.backgroundColor = "#222222";
  toggle[0].style.color = "#f1f1f1";
  toggle[1].style.backgroundColor = "#222222";
  toggle[1].style.color = "#f1f1f1";
  toggle[0].style.borderColor = "#f1f1f1";
  toggle[1].style.borderColor = "#f1f1f1";
}

//function to pick light theme or dark theme
function setTheme() {
  isLight ? lightTheme() : darkTheme();
  isLight
    ? (document.getElementById("theme").innerText = "Switch to Dark Mode")
    : (document.getElementById("theme").innerText = "Switch to Light Mode");
}

//function call [ light theme or dark theme ]
setInterval(setTheme);

//toggler for light theme or dark theme

document.querySelector("#theme").addEventListener("click", function () {
  isLight = !isLight;
});
