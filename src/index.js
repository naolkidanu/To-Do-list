import './style.css';
import { add, deleteAllCompleted, populateList } from './crud.js';
import ToDo from './todoList.js';

const list = JSON.parse(localStorage.getItem('todoList'));
if (list) {
  list.forEach((item) => new ToDo(item.description, item.complete));
}

const addInput = document.getElementById('add-input');
addInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    add(addInput.value);
    addInput.value = '';
    populateList();
  }
});

const clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', () => {
  deleteAllCompleted(ToDo);
  populateList();
});

populateList();
