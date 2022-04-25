// on click the 'add task btn'
const form = document.querySelector("form");
const tasksContainer = document.querySelector("#tasks-holder");
const addTaskBtn = document.querySelector("#add-task-button");
const taskInput = document.querySelector("#task-input-field");

tasksContainer.addEventListener("click", function (event) {
  console.log(event);
  // ignore if the clicked element is not the delete button
  // as we're only interested in handling the delete operation
  if (!event.target.classList.contains("delete-task-button")) return;

  // remove the parent element of that button
  event.target.closest(".task-holder").remove();
});

// always use the addEventListener Element class method
form.addEventListener("submit", function (e) {
  e.preventDefault(); //to prevent the page to auto reload on submit
  if (taskInput.value == "") {
    alert("Please enter a task!");
  } else {
    document.querySelector("#tasks-holder").innerHTML += `
    <div class="task-holder">
      <span class="task">${taskInput.value}</span>
      <button type="submit" class="delete-task-button">Delete</button>
    </div>
    `;

    

    //to clear the input field
    taskInput.value = "";
  }
});
