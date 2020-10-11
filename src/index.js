document.addEventListener("DOMContentLoaded", () => {
  let tasks=[];
  document.getElementById("create-task-form").addEventListener("submit", (e) => {
    e.preventDefault();
      tasks.push(document.getElementById("new-task-description").value);
      let id = tasks.length;
      
      document.getElementById("tasks").innerHTML +=  ` 
      <li id= li${id}>
      ${tasks[tasks.length-1]}
      <button class = remove id = ${id}>Remove</button>
    </li>`

  })
});
