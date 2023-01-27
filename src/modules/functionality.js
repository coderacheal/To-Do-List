class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const container = document.querySelector('.list-div');
const inputBox = document.querySelector('.input-task');

const addToStorage = () => {
  let taskDataBase;
  if (localStorage.getItem('To-do-task')) {
    taskDataBase = JSON.parse(localStorage.getItem('To-do-task'));
  } else {
    taskDataBase = [];
  }
  return taskDataBase;
};

const removeTask = (element) => {
  const taskDataBase = addToStorage();
  // eslint-disable-next-line max-len
  const index = taskDataBase.findIndex((task) => task.index == element.target.previousSibling.id);
  container.removeChild(element.target.parentElement);
  taskDataBase.splice(index, 1);
  localStorage.setItem('To-do-task', JSON.stringify(taskDataBase));
};

// const removeTaskFromUl = (target) => {
//   const taskDataBase = addToStorage();
//   if (target.classList.contains('dots')) {
//   // eslint-disable-next-line max-len, eqeqeq
//     // const index = taskDataBase.findIndex((task) => task.index == target.target.);
//     // container.removeChild(target.parentElement);
//     // taskDataBase.splice(index, 1);
//     localStorage.setItem('To-do-task', JSON.stringify(taskDataBase));
//     target.parentElement.remove();
//   }
// };

container.addEventListener('click', (e) => {
  // removeTaskFromUl(e.target);
  removeTask(e.target);
});

const addnewTask = () => {
  if (inputBox.value === '') {
    return;
  }
  {
    const listDiv = document.createElement('li');
    const checkBox = document.createElement('input');
    const theTask = document.createElement('input');
    const dots = document.createElement('img');
    listDiv.classList.add('each-task');
    theTask.classList.add('task-to-be-done');
    dots.classList.add('dots');
    checkBox.classList.add('ckeckTask');
    listDiv.style.width = '90%';
    checkBox.type = 'checkbox';
    dots.src = './images/bin.png';
    dots.addEventListener('click', (e) => {
      removeTask(e);
    });
    theTask.style.border = 0;
    listDiv.appendChild(checkBox);
    listDiv.appendChild(theTask);
    listDiv.appendChild(dots);
    theTask.value = `${inputBox.value}`;
    container.appendChild(listDiv);
    const taskDataBase = addToStorage();
    const description = theTask.value;
    const completed = false;
    const index = taskDataBase.length + 1;
    theTask.id = index;
    const task = new Task(description, completed, index);
    taskDataBase.push(task);
    localStorage.setItem('To-do-task', JSON.stringify(taskDataBase));
    inputBox.value = '';
  }
};

const loadFromStorage = () => {
  const tasks = JSON.parse(localStorage.getItem('To-do-task'));
  tasks.forEach((element) => {
    container.innerHTML += `
    <li class="each-task">
        <input type="checkbox" name="" id="">
        <input type="text" class="task-to-be-done" id="${element.index}"placeholder="${element.description}">
        <img src="images/bin.png" alt="" class="dots">
      </li> `;
  });
};

const clearAllChecked = () => {
  const taskDataBase = addToStorage();
  const check = document.querySelector('.checkBox');
  check.
  taskDataBase.length = 0;
  localStorage.setItem('To-do-task', JSON.stringify(taskDataBase));
  container.innerHTML = ``;
};

window.addEventListener('load', loadFromStorage());
