document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('create-task-form');
        const input = document.getElementById('new-task-description');
        const taskButton = document.getElementById('new-task');

        form.addEventListener('submit', event => {
                event.preventDefault();
        });

        taskButton.addEventListener('click', () => {
                let ul = document.getElementsByTagName('ul')[0];
                let li = document.createElement('li');
                li.textContent = input.value;
                ul.appendChild(li);
        });
});
