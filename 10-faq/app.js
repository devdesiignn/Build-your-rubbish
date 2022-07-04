//select all the questions
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  //select the button inside the question article
  const btn = question.querySelector(".question-btn");

  //add eventlistener for clicks on the button
  btn.addEventListener("click", function () {

    //check the questions again to see if the clicked
    //article has been toggled already
    questions.forEach(function (item) {
    
      //if already toggled, remove "show-text"
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    //toggle the "show-text"
    question.classList.toggle("show-text");
  });
});
