import './style.css';
import add from './modules/add.js';
import { taskRemaining } from './modules/taskFunctions.js';
import {
  addButton, taskInput, container, clearChecked,
} from './modules/taskClass.js';
import { save, retrieve } from './modules/storage.js';

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (taskInput.value === '') {
      e.preventDefault();
    } else {
      const task = add(e);
      taskRemaining.add(task);
      taskRemaining.init();
      save();
      taskRemaining.display();
    }
  }
});

addButton.addEventListener('click', (e) => {
  if (taskInput.value === '') {
    e.preventDefault();
  } else {
    const task = add(e);
    taskRemaining.add(task);
    taskRemaining.init();
    save();
    taskRemaining.display();
  }
});

container.addEventListener('keypress', (e) => {
  if (e.target.className === 'task-to-be-done' && e.key === 'Enter') {
    if (e.target.textContent) {
      e.preventDefault();
      taskRemaining.update(e.target.textContent, e.target.parentElement.id);
      save();
    } else {
      e.preventDefault();
    }
  }
});

container.addEventListener('change', (e) => {
  let desc = taskRemaining.tasks[e.target.parentElement.id].description;
  if (e.target.type === 'checkbox') {
    if (e.target.checked) {
      taskRemaining.tasks[e.target.parentElement.id].completed = true;
      e.target.nextElementSibling.innerHTML = `<strike>${desc}</strike>`;
      taskRemaining.tasks[e.target.parentElement.id].description = `<strike>${desc}</strike>`;
      save();
    } else {
      taskRemaining.tasks[e.target.parentElement.id].completed = false;
      desc = e.target.nextElementSibling.innerHTML.replaceAll(/(<strike>|<\/strike>)/g, '');
      e.target.nextElementSibling.innerHTML = desc;
      taskRemaining.tasks[e.target.parentElement.id].description = desc;
      save();
    }
  } else {
    e.preventDefault();
  }
});

window.addEventListener('load', () => {
  retrieve();
  taskRemaining.display();
});

clearChecked.addEventListener('click', () => {
  taskRemaining.deleteListItemCompleted();
  taskRemaining.updateIndex();
  save();
  taskRemaining.display();
});

container.addEventListener('click', (e) => {
  if (e.target.className === 'bin') {
    taskRemaining.deleteListItem(e.target.parentElement.id);
    taskRemaining.init();
    taskRemaining.updateIndex();
    save();
    taskRemaining.display();
  } else if (e.target.className === 'task-to-be-done') {
    e.preventDefault();
  }
});