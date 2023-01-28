import { container } from './taskClass.js';

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
      <img src="../images/bin.png" alt="" class="dots">
      `;
      container.appendChild(taskItem);
    });
  };

  deleteCompleted = () => {
    this.tasks = this.tasks.filter((task) => task.completed === false);
    container.innerHTML = '';
  };

  updateIndex = () => {
    this.tasks.forEach((task, index) => {
      task.index = index + 1;
    });
  };

  delete = (index) => {
    this.tasks = this.tasks.filter((task) => task.index !== Number(index) + 1);
  };
}

const taskRemaining = new Tasks();
export default taskRemaining;