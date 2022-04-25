// on click the 'add task btn'
let form = document.querySelector("form");

form.onsubmit = function (e) {
  e.preventDefault(); //to prevent the page to auto reload on submit

  let taskHolder = document.querySelector("#tasks-holder");
  let taskInputField = document.querySelector("#task-input-field");

  taskHolder.innerHTML += `
    <div class="task-holder">
      <span class="task">${taskInputField.value}</span>
      <button type="submit" class="delete-task-button">Delete</button>
    </div>
    `;

  //to delete a task

  let deleteTask = document.querySelectorAll(".delete-task-button");

  for (counter = 0; counter < deleteTask.length; counter++) {
    deleteTask[counter].onclick = function () {
      this.parentNode.remove();
    };
  }

  //to tag a finished task

  let finishedTask = document.querySelectorAll(".task");

  for (counter = 0; counter < finishedTask.length; counter++) {
    finishedTask[counter].onclick = function () {
      this.classList.toggle("completed");
    };
  }

  //to clear the input field

  taskInputField.value = "";
};
