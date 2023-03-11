const storeTodos = {};

export const localStorage = {
  getItem: (key) => storeTodos[key],
  setItem: (key, value) => {
    storeTodos[key] = value;
  },
};

export const toDoListArray = [];

export const addMock = (task) => {
  toDoListArray.push({ task, completed: false, id: toDoListArray.length + 1 });
  localStorage.setItem('tasks', toDoListArray);
};

export const deleteTaskMock = (taskIndex) => {
  toDoListArray.splice(taskIndex, 1);
  toDoListArray.forEach((task, index) => {
    task.id = index + 1;
  });
  localStorage.setItem('tasks', toDoListArray);
};

export const displayToDoListMock = (toDoListArray, ul) => {
  ul.innerHTML = '';
  toDoListArray.forEach((toDo) => {
    const toDoItem = document.createElement('li');
    toDoItem.innerHTML = toDo.description;
    ul.appendChild(toDoItem);
  });
};

export const markTaskAsCompletedMock = (index) => {
  toDoListArray[index].completed = true;
  localStorage.setItem('tasks', toDoListArray);
};

export const clearAllCompletedTasksMock = (toDoListArray) => {
  toDoListArray = toDoListArray.filter((task) => task.completed === false);
  localStorage.setItem('tasks', toDoListArray);
  return toDoListArray;
};
