document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submit = document.querySelector("#submit").addEventListener("click", function(e){
    e.preventDefault();
    const input = document.querySelector("#new-task-description");
    const tasks = document.querySelector("#tasks");
    tasks.innerHTML += `<li>${input.value}</li> `;
     
  });
  


});
