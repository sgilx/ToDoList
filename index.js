// retrieve necessary elements to assign tasks
const taskName = document.getElementById('activity');
const taskList = document.getElementById('taskToDo');
const form = document.querySelector('.addActivity');

// event listener added to the form, whenever the submit button 
// is clicked, we add a new task and display it to the user
form.addEventListener('submit', function(e) {
    e.preventDefault();

    //create a new task element as a li to append to the ul
    // taskToDo
    const task = taskName.value;
    const newTask = document.createElement('li');

    //create a check button that will be appended to the previously
    //created task item
    const checkBtn = document.createElement('input');
    checkBtn.setAttribute('type', 'checkbox');

    // create the span element in which the task info will
    // be held and displayed to the user
    const taskInfo = document.createElement('span');
    taskInfo.innerText = task;

    //create a delete button that will be appended to the previously
    //created task item
    const delBtn = document.createElement('button');
    delBtn.innerText = 'x';

    // add event listener to the delete button, when clicked
    // will call the delTask function which deletes the selected task
    delBtn.addEventListener('click', delTask);

    //add the check button, task title, delete button in order
    newTask.append(checkBtn);
    newTask.append(taskInfo);
    newTask.append(delBtn);
    
    // add the created task to the UL
    taskList.append(newTask);

    // clear the input task bar once submitted
    taskName.value = '';
});

//function that takes the li it is connected to and removes it 
function delTask(e) {
    e.target.parentElement.remove();
};

