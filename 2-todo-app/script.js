//variable declaration and assignment
const form = document.querySelector("form");
const tasksContainer = document.querySelector("#tasks-holder");
const addTaskBtn = document.querySelector("#add-task-button");
const taskInput = document.querySelector("#task-input-field");

//on submit
form.addEventListener("submit", function (event) {
  event.preventDefault(); //to prevent the page to auto reload on submit

  //the insertAdjacentHTML approach
  tasksContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="task-holder">
      <span class="task">${taskInput.value}</span>
      <button type="submit" class="delete-task-button">Delete</button>
    </div>
    `
  );

  //to clear the input field
  taskInput.value = "";
});

//Handling the delete button
tasksContainer.addEventListener("click", function (event) {
  // we're now going to handle the toggle thing here 
  // check if the clicked element is the .task element 
  if(event.target.classList.contains("task")) {
    // toggle the completed class name 
    event.target.classList.toggle("completed");
  } else if (event.target.classList.contains("delete-task-button")) {
    // remove the parent element of that button
    event.target.closest(".task-holder").remove();  
  }
});