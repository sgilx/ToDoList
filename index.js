const taskName = document.querySelector('#activity');
const taskList = document.querySelector('.taskToDo');
const form = document.querySelector('.addActivity');

form.addEventListener('submit', function(e) {
    const task = taskName.value;
    const newTask = document.createElement('li');
    newTask.innerText = task;
    taskList.append(newTask);
    e.preventDefault();
});