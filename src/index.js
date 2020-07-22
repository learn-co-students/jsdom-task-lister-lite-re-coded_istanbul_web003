document.addEventListener("DOMContentLoaded", () => {
  var myTextbox = document.getElementById('new-task-description');
myTextbox.addEventListener('keypress', checkName, false);
function checkName(evt) {
  var charCode = evt.charCode;
  if (charCode != 0) {
    if (charCode < 97 || charCode > 122) {
      evt.preventDefault();
     
    }
  }
}



function logSubmit(event) {
  log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
  event.preventDefault();
}

const form = document.getElementById('form');

form.addEventListener('submit', logSubmit);
document.getElementById("create-task-form").addEventListener("submit", (e) => {
  el.preventDefault();
});
