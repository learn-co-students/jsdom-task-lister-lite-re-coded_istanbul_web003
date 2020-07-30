document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // DOM selectors
  const taskForm = document.getElementById("create-task-form");
  const newTask = document.getElementById("new-task-description");
  const tasksList = document.getElementById("tasks")
  
  
  //Functions
  const addTask = () =>
   tasksList.innerHTML += `<li>${newTask.value}
    <button class="delete-button">x</button>
   </li>`

  
  
  // Event listeners

  //  -Task Form
  taskForm.addEventListener("submit", e => {
    e.preventDefault();
    addTask();
    taskForm.reset()
  });

  //  -Delete Button
  tasksList.addEventListener("click", e => {
    if(e.target.className === "delete-button") {
      e.target.parentElement.remove()
    }
  })
  
});