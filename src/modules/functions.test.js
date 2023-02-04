/** @jest-environment jsdom */

import {
  addMock, toDoListArray, localStorage, displayToDoListMock, deleteTaskMock,
  markTaskAsCompletedMock, clearAllCompletedTasksMock,
} from './__mocks__/functions.js';

document.body.innerHTML = `
  <ul class="toDoContainer"></ul>
  <button class="clearbtn">Clear all completed</button>
</section>
})`;

const ul = document.querySelector('.toDoContainer');

describe('Test adding Item', () => {
  test('Add a new item to todo list', () => {
    addMock('New Task to make a test');
    expect(toDoListArray).toHaveLength(1);
    expect(localStorage.getItem('tasks')).toHaveLength(1);
  });

  test('Add a new item to todo list', () => {
    addMock('Item two');
    expect(toDoListArray).toHaveLength(2);
    expect(localStorage.getItem('tasks')).toHaveLength(2);
  });

  test('Add a new item to DOM todo list', () => {
    displayToDoListMock(toDoListArray, ul);
    const lis = Array.from(ul.children);
    expect(lis).toHaveLength(2);
  });
});

describe('Deleting Item', () => {
  test('Remove Item from to do list', () => {
    deleteTaskMock(1);
    expect(toDoListArray).toHaveLength(1);
    expect(localStorage.getItem('tasks')).toHaveLength(1);
  });

  test('Remove element from the DOM', () => {
    displayToDoListMock(toDoListArray, ul);
    const list = Array.from(ul.children);
    expect(list).toHaveLength(1);
  });
});

describe('editing text', () => {
  test('should edit test in p tag', () => {
    const newText = 'Hello there';
    document.body.innerHTML = `
    <p contenteditable="true" class="task-to-be-done">Pick up the kids</p>`;
    const oldText = document.querySelector('.task-to-be-done');
    oldText.innerHTML = newText;
    expect(oldText.innerHTML).toBe(newText);
  });

  test('should set edited task in local storage', () => {
    expect(localStorage.getItem('tasks')).toHaveLength(1);
  });
});
