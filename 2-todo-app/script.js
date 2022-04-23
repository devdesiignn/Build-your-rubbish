// on click the 'add task btn'
document.querySelector("#add-task-button").onclick = function () {
  if (document.querySelector("#task-input-field").value == "") {
    alert("Please enter a task!");
  } else {
    document.querySelector("#tasks-holder").innerHTML += `
    <div class="task-holder">
      <span class="task">${
        document.querySelector("#task-input-field").value
      }</span>
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
    document.querySelector("#task-input-field").value = "";
  }
};
