// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
//without waiting for stylesheets, images, and subframes to finish loading.

// The load event is fired when the whole page has loaded,
//including all dependent resources such as stylesheets and images.
//selecting the preloader
const preloader = document.querySelector(".preloader");

//when "load" then remove the preloader
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

//select the button
const btn = document.querySelector(".switch-btn");

//select the video container
const video = document.querySelector(".video-container");

function pausePlay() {
  //check if the button has not the slide class, then add
  //if it has then remove it
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
}
//when clicking the button
btn.addEventListener("click", function () {
  pausePlay();
});

window.addEventListener("keydown", function (event) {
  //check the clicked key if its SPACE then
  if (event.key === "Enter" || event.key === " ") {
    pausePlay();
  }
});
