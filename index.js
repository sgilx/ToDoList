const taskName = document.querySelector('#activity');
const taskList = document.querySelector('#taskToDo');
const form = document.querySelector('.addActivity');

// const deleteBtn = document.querySelector(delBtn);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const task = taskName.value;
    const newTask = document.createElement('li');
    newTask.innerText = task;
    // taskList.append(newTask);

    const checkBtn = document.createElement('input');
    checkBtn.setAttribute('type', 'checkbox');
    // newTask.append(checkBtn);

    const delBtn = document.createElement('button');
    delBtn.innerText = 'x';

    delBtn.addEventListener('click', delTask);
    // delBtn.append(del);
    // newTask.append(delBtn);

    newTask.append(checkBtn, delBtn);
    taskList.append(newTask);

    taskName.value = '';
});

function delTask(newTask) {
    taskList.remove(newTask);
};

