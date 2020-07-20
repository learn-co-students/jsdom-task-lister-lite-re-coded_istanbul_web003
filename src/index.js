document.addEventListener("DOMContentLoaded", () => {
  document.getElementsByTagName("input")[1].addEventListener("click", addNewTodo);
});

function addNewTodo(event) {
    event.preventDefault();
    var ul = document.getElementById("tasks");
    let li = document.createElement("li");
    let newTodo = document.getElementById("new-task-description").value;
    let todoNode = document.createTextNode(newTodo);
    console.log(newTodo);
    console.log(todoNode);

    li.appendChild(todoNode);
    ul.appendChild(li);
}