// on click the 'add task btn'
const tasksContainer = document.querySelector('#tasks-holder');
tasksContainer.addEventListener('click', function(event) {
  console.log(event);
  // ignore if the clicked element is not the delete button 
  // as we're only interested in handling the delete operation
  if (!event.target.classList.contains('delete-task-button')) return;

  // remote the parent element of that button 
  event.target.closest('.task-holder').remove()
});

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
