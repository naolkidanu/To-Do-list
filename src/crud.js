import ToDo from './todoList.js';
import DeleteButton from './delete-btn.png';

export function add(value) {
  const newItem = new ToDo(value);
  localStorage.setItem('todoList', JSON.stringify(newItem.getList()));
}

export function remove(index) {
  ToDo.list = ToDo.list.filter((item) => item !== ToDo.list[index]);
  ToDo.list.forEach((item, i) => {
    item.index = i;
  });
  localStorage.setItem('todoList', JSON.stringify(ToDo.list));
}

export function edit(index, text) {
  ToDo.list[index].description = text;
  localStorage.setItem('todoList', JSON.stringify(ToDo.list));
}

export function populateList() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  ToDo.list.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('id', item.index);
    listItem.classList = 'item-container';

    listItem.innerHTML = `
    <input class="checkbox" type="checkbox">
    <span>${item.description}</span>
    <textarea class="text-area" maxlength="30">${item.description}</textarea>
    <img class="cancel-btn" src="${DeleteButton}">
    `;

    todoList.appendChild(listItem);

    const checkbox = listItem.querySelector('input');
    const text = listItem.querySelector('span');
    const textInput = listItem.querySelector('textarea');
    const deleteButton = listItem.querySelector('img');

    checkbox.addEventListener('change', () => {
      const index = parseInt(listItem.id, 10);
      ToDo.list[index].update();
      text.classList.toggle('complete');
      textInput.classList.toggle('complete');
      localStorage.setItem('todoList', JSON.stringify(ToDo.list));
    });

    text.addEventListener('click', () => {
      text.style.display = 'none';
      textInput.classList.toggle('edit-item');
    });

    textInput.addEventListener('keydown', (e) => {
      text.innerHTML = textInput.value;

      const index = parseInt(listItem.id, 10);
      edit(index, text.innerHTML);

      if (e.code === 'Enter') {
        text.style.display = 'block';
        textInput.classList.toggle('edit-item');
      }
    });

    deleteButton.addEventListener('click', () => {
      const index = parseInt(listItem.id, 10);
      remove(index);
      populateList();
    });

    if (item.complete) {
      checkbox.checked = true;
      text.classList = 'complete';
    }
  });
}

export function deleteAllCompleted(todo) {
  todo.list = todo.list.filter((item) => item.complete === false);
  todo.list.forEach((item, i) => {
    item.index = i;
  });
  localStorage.setItem('todoList', JSON.stringify(todo.list));
}
