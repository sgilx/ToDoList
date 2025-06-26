const taskName = document.querySelector('#activity');
const taskList = document.querySelector('#taskToDo');
const form = document.querySelector('.addActivity');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const task = taskName.value;
    const newTask = document.createElement('li');
    newTask.innerText = task;
    taskList.append(newTask);

    const checkBtn = document.createElement('input');
    checkBtn.setAttribute('type', 'checkbox');
    newTask.append(checkBtn);

    const delBtn = document.createElement('button');
    checkBtn.innerHTML('x');
    newTask.append(delBtn);
});