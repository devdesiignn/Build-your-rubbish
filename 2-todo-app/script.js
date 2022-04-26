//variable declaration and assignment
const form = document.querySelector("form");
const tasksContainer = document.querySelector("#tasks-holder");
const addTaskBtn = document.querySelector("#add-task-button");
const taskInput = document.querySelector("#task-input-field");

// always use the addEventListener Element class method

//on submit
form.addEventListener("submit", function (event) {
  event.preventDefault(); //to prevent the page to auto reload on submit

  //the former approach
  // tasksContainer.innerHTML += `
  //   <div class="task-holder">
  //     <span class="task">${taskInput.value}</span>
  //     <button type="submit" class="delete-task-button">Delete</button>
  //   </div>
  //   `;

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

  //to tag a finished task
  const finishedTasks = document.querySelectorAll(".task");
  finishedTasks.forEach((finishedTask) =>
    finishedTask.addEventListener("click", function () {
      finishedTask.classList.toggle("completed");
    })
  );
});

//Handling the delete button
tasksContainer.addEventListener("click", function (event) {
  console.log(event);
  // ignore if the clicked element is not the delete button
  // as we're only interested in handling the delete operation
  if (!event.target.classList.contains("delete-task-button")) return;

  // remove the parent element of that button
  event.target.closest(".task-holder").remove();
});
