document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTask');
  const taskList = document.getElementById('taskList');

  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function renderTasks() {
    taskList.innerHTML = '';

    if (tasks.length === 0) {
      taskList.innerHTML = '<p class="empty">No tasks yet. Add one!</p>';
      return;
    }

    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.className = 'task-item';
      li.textContent = task;

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = '✕';
      deleteBtn.addEventListener('click', () => {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
      });

      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }

  addTaskBtn.addEventListener('click', () => {
    const newTask = taskInput.value.trim();
    if (newTask) {
      tasks.push(newTask);
      saveTasks();
      renderTasks();
      taskInput.value = '';
    }
  });

  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTaskBtn.click();
    }
  });

  renderTasks();
});
