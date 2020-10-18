document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById('create-task-form')
  const output = document.getElementById('tasks');

   input.addEventListener('submit', function(e) {
    e.preventDefault()
    const list = document.getElementById('new-task-description').value;

    output.innerHTML += `<li>${list}</li>`
     input.reset()
  })
});
