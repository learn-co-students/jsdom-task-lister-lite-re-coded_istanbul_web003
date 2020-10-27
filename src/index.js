document.addEventListener("DOMContentLoaded", () => {
  // your code here
document.getElementsByTagName("input")[1].addEventListener("click", addNewTodo);

});

function addNewTodo(event) {
  event.preventDefault();
  var ul = document.getElementById("tasks");
  let li = document.createElement("li");
  let newTodo = document.getElementById("new-task-description").value;
  let todoContent = document.createTextNode(newTodo);


  li.appendChild(todoContent);
  ul.appendChild(li);
} 
