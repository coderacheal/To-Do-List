export default class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export const addButton = document.querySelector('.add');
export const clearChecked = document.querySelector('.clearButton');
export const taskInput = document.getElementById('input-task');
export const container = document.querySelector('.list-div');