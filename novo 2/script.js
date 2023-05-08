const form = document.querySelector('form');
const taskList = document.querySelector('#taskList');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const newTaskInput = document.querySelector('#newTaskInput');
  const newTaskDescription = newTaskInput.value.trim();

  if (newTaskDescription !== '') {
    const newTask = createTask(newTaskDescription);
    taskList.appendChild(newTask);
    newTaskInput.value = '';
  }
});

function createTask(description) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', (event) => {
    const parentLi = event.target.closest('li');
    parentLi.classList.toggle('completed');
  });
  const span = document.createElement('span');
  span.textContent = description;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Excluir';
  deleteButton.classList.add('deleteButton');
  deleteButton.addEventListener('click', (event) => {
    const parentLi = event.target.closest('li');
    parentLi.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);

  return li;
}
