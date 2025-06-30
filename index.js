const taskName = document.querySelector('#activity');
const taskList = document.querySelector('#taskToDo');
const form = document.querySelector('.addActivity');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const task = taskName.value;
    const newTask = document.createElement('li');
    newTask.innerText = task;

    const checkBtn = document.createElement('input');
    checkBtn.setAttribute('type', 'checkbox');

    const delBtn = document.createElement('button');
    delBtn.innerText = 'x';

    delBtn.addEventListener('click', delTask);

    newTask.insertBefore(checkBtn, newTask.firstChild);
    newTask.append(delBtn);
    taskList.append(newTask);

    taskName.value = '';
});

function delTask(e) {
    e.target.parentElement.remove();
};

