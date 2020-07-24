document.addEventListener("DOMContentLoaded", () => {
  const newTaskDescription = document.querySelector("#new-task-description");
  const newTaskForm = document.querySelector("#create-task-form");
  const Ul = document.querySelector("#tasks");
  
  
  newTaskForm.addEventListener("submit", (e) => {
    const Li = document.createElement("li");
    const RemoveButton = document.createElement("button");
    e.preventDefault();
    Ul.appendChild(Li).innerText = newTaskDescription.value;
    Li.appendChild(RemoveButton).innerHTML = "X";
    RemoveButton.addEventListener("click", () => {
      RemoveButton.parentElement.remove();
    })
    e.target.reset();
  });
});
