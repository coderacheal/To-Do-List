class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

const container = document.querySelector('.list-div');
const inputBox = document.querySelector('.input-task');

const addnewTask = () => {
  if (inputBox.value === '') {
    return;
  }
  {
    const listDiv = document.createElement('li');
    const checkBox = document.createElement('input');
    const theTask = document.createElement('p');
    const binImage = document.createElement('img');
    listDiv.classList.add = 'each-task';
    theTask.classList.add = 'task-to-be-done';
    theTask.classList.add = 'bin';
    listDiv.style.display = 'flex';
    listDiv.style.justifyContent = 'space-between';
    listDiv.style.width = '90%';
    checkBox.type = 'checkbox';
    binImage.src = '../images/bin.png';
    binImage.style.height = '25px';
    binImage.style.cursor = 'pointer';
    listDiv.appendChild(checkBox);
    listDiv.appendChild(theTask);
    listDiv.appendChild(binImage);
    theTask.innerHTML = `${inputBox.value}`;
    container.appendChild(listDiv);
    const description = theTask.innerHTML;
    const completed = false;
    const index = 1;
    const taskDataBase = [];
    const task = new Task(description, completed, index);
    taskDataBase.push(task);
    // console.log(taskDataBase);
    inputBox.value = '';
  }
};
