import { container } from './taskClass.js';
import bin from '../images/bin.png';

class Tasks {
  constructor() {
    this.tasks = [];
  }

  init = () => {
    container.innerHTML = '';
  };

  add = (task) => {
    this.tasks.push(task);
  };

  update = (desc, id) => {
    this.tasks[id].description = desc;
  };

  display = () => {
    this.tasks.forEach((task, index) => {
      const taskItem = document.createElement('li');
      taskItem.classList.add('each-task');
      taskItem.id = index;
      taskItem.innerHTML = `
      <input type="checkbox" id="task-${task.index}" name="task-${task.index}" ${task.completed ? 'checked' : 'unchecked'}>
      <p contenteditable="true" class="task-to-be-done">${task.description}</p>
      <img src="${bin}" alt="" class="bin">
      `;
      container.appendChild(taskItem);
    });
  };

  deleteListItemCompleted = () => {
    this.tasks = this.tasks.filter((task) => task.completed === false);
    container.innerHTML = '';
  };

  updateIndex = () => {
    this.tasks.forEach((task, index) => {
      task.index = index + 1;
    });
  };

  deleteListItem = (index) => {
    this.tasks = this.tasks.filter((task) => task.index !== Number(index) + 1);
  };
}

export const taskRemaining = new Tasks();
// export taskRemaining;

export const { add } = new Tasks();