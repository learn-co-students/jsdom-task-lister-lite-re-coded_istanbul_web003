document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.querySelector("#create-task-form");

  todoForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    const newTaskDescription = document.querySelector('#new-task-description');
    const tasks = document.querySelector('#tasks');

    const task = `<li>${newTaskDescription.value}</li>`;

    tasks.innerHTML += task;
    newTaskDescription.value = "";
  });
});
