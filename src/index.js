document.addEventListener('DOMContentLoaded', () => {});

const form = document.getElementById('create-task-form');
const tasks = document.getElementById('tasks');



form.addEventListener('submit', function (e) {
  e.preventDefault()

  const newTask = document.getElementById('new-task-description').value;


  tasks.innerHTML += `<li>${newTask}
  <button class='delete-item'>X</button>
  </li>`

  form.reset()
})


tasks.addEventListener('click' , function(e) {

 const liDelete = document.querySelector('.delete-item')
liDelete.onclick = e.target.parentElement.remove()



})