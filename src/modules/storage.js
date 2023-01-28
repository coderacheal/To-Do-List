import taskRemaining from './taskFunctions.js';

export const save = () => {
  localStorage.setItem('tasks', JSON.stringify(taskRemaining.tasks));
};

export const retrieve = () => {
  const retrievedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (retrievedTasks === null) {
    return;
  }
  retrievedTasks.forEach((task) => {
    taskRemaining.add(task);
  });
};
