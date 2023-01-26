import './style.css';

const tasks = [
  {
    description: 'Pay the bills',
    completed: true,
    index: 0,
  },
  {
    description: 'Pick up the kids',
    completed: true,
    index: 1,
  },
  {
    description: 'Write some code',
    completed: true,
    index: 2,
  },
  {
    description: 'Drink coffee',
    completed: true,
    index: 3,
  },
];

const loadTask = (arr) => {
  arr.forEach((task) => {
    const container = document.querySelector('.list-div');
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <input type="checkbox" name="" id="">
    <p class="task-to-be-done">${task.description}</p>
    `;
    container.appendChild(listItem);
  });
};

loadTask(tasks);
