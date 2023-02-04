import Task, { taskInput } from './taskClass.js';
import { taskRemaining } from './taskFunctions.js';

const add = (event) => {
  const task = new Task(taskInput.value, false, taskRemaining.tasks.length + 1);
  if (taskInput.value === '') {
    event.preventDefault();
  } else {
    taskInput.value = '';
  }
  return task;
};

export default add;