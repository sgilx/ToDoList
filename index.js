const taskName = document.querySelector('#activity');
const dueDate = document.querySelector('#dueDate');
const taskList = document.querySelector('.taskToDo');
const form = document.querySelector('.addActivity');

form.addEventListener('submit', function(e) {
    const title = taskName.value;
    const due = dueDate.value;
    const newTask = document.createElement('li');
    newTask.innerText = title;
    taskList.append(newTask);
    e.preventDefault();

});