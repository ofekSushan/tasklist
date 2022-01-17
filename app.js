let form = document.getElementById('task-form');
var taskList = document.getElementById('cololo');
const clearbtn = document.querySelector('.clear-tasks');
const filter = document.getElementById('filter');
const taskInput = document.getElementById('task');

//  יוצר את המוצר וכפתור מוחק לידו

form.addEventListener('submit', boom);

function boom(e) {
  e.preventDefault();

  if (taskInput.value === '') {
    alert('Add a task');
    return;
  }

  const li = document.createElement('li');

  // יוצר את המוצר
  li.className = 'collection-item';
  li.id = 'collection-id';
  li.appendChild(document.createTextNode(taskInput.value));

  // יוצר את כפתור המחיקה
  const link = document.createElement('a');

  link.className = 'delete-item secondary-content';
  link.id = 'delete-bro';
  link.innerHTML = '<i id="delete-icon" class="fa fa-remove"></i>';

  li.appendChild(link);

  taskList.appendChild(li);
 




  taskInput.value = '';
}

// כפתור ה x
const ree = document.querySelector('.collection-item');
taskList.addEventListener('click', baom);

function baom(e) {
  // לוקח את הורה שזה יוצא <a Class= delete-item secondary-content>

  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('dude you want to delete this')) {
      // לוקח את ההורה של ההורה שזה יוצא <li>
      e.target.parentElement.parentElement.remove();
    }
  }
}

// כפתור מוחק הכול
clearbtn.addEventListener('click', clearall);

function clearall() {
  if (taskList.firstChild != null) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  } else {
    alert('dude nothing there');
  }
}

// כפתור חיפוש
filter.addEventListener('keyup', filterTasks);

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function (X) {
    const item = X.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      X.style.display = 'block';
    } else {
      X.style.display = 'none';
    }
  });
}
