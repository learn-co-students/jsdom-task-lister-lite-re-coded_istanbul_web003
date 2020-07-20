document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', event => {
    event.preventDefault();
    const userInput = document.getElementById('new-task-description').value;
    let li = document.createElement('li');
    li.innerHTML = userInput;
    taskList.appendChild(li);
  })
})


