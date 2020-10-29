document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm =document.getElementById('create-task-form');
  const tasksList = document.getElementById("tasks");

 taskForm.addEventListener ('submit', (e) =>{
         e.preventDefault();
         const inputTask = document.getElementById("new-task-description").value;
         const newTask= document.createElement('li');
         newTask.innerText += `${inputTask}`;
         tasksList.appendChild(newTask);
 });
});

