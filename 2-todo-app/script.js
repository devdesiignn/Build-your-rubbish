// on click the 'add task btn'
const tasksContainer = document.querySelector('#tasks-holder');
const addTaskBtn = document.querySelector("#add-task-button");
const taskInput = document.querySelector("#task-input-field");

tasksContainer.addEventListener('click', function(event) {
  console.log(event);
  // ignore if the clicked element is not the delete button 
  // as we're only interested in handling the delete operation
  if (!event.target.classList.contains('delete-task-button')) return;

  // remote the parent element of that button 
  event.target.closest('.task-holder').remove()
});

// always use the addEventListener Element class method
addTaskBtn.addEventListener('click', function () {
  if (taskInput.value == "") {
    alert("Please enter a task!");
  } else {
    document.querySelector("#tasks-holder").innerHTML += `
    <div class="task-holder">
      <span class="task">${
        taskInput.value
      }</span>
      <button type="submit" class="delete-task-button">Delete</button>
    </div>
    `;
   
    //to tag a finished task
    let finishedTask = document.querySelectorAll(".task");
    for (counter = 0; counter < finishedTask.length; counter++) {
      finishedTask[counter].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    //to clear the input field
    taskInput.value = "";
  }
});
