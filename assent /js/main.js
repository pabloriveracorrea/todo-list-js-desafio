const tasks = [
  {
    id: Date.now(),
    description: 'Ir al supermercado',
    completed: false,
  },
  { id: Date.now() + 1, description: 'Estudiar js', completed: false },
  {
    id: Date.now() + 2,
    description: 'Sacar a pasear al perro',
    completed: false,
  },
];

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const listaTareas = document.getElementById('lista-tareas');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const totalTasks = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');

const updateTasks = () => {
  listaTareas.innerHTML = tasks
    .map(
      (task, index) => `
      <tr onclick="functionName(${task.id})" style="cursor: pointer;">
        <td class="id-generada" style="color: ${
          task.completed ? 'green' : 'black'
        };">${task.id}</td>
        <td class="tarea-ingresada" style="color: ${
          task.completed ? 'green' : 'black'
        }; text-decoration: ${task.completed ? 'line-through' : 'none'};">${
        task.description
      }</td>
        <td><input type="checkbox" ${
          task.completed ? 'checked' : ''
        } onclick="toggleTask(${index}); event.stopPropagation();"></td>
        <td><button class="delete" onclick="deleteTask(${index}); event.stopPropagation();">✖</button></td>
      </tr>
    `
    )
    .join('');

  totalTasks.textContent = tasks.length;
  completedTasks.textContent = tasks.filter((task) => task.completed).length;
};

const addTask = () => {
  const taskDescription = taskInput.value.trim();
  if (taskDescription) {
    tasks.push({
      id: Date.now(),
      description: taskDescription,
      completed: false,
    });
    taskInput.value = '';
    updateTasks();
  }
};

const toggleTask = (index) => {
  tasks[index].completed = !tasks[index].completed;
  updateTasks();
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  updateTasks();
};

const clearCompletedTasks = () => {
  for (let i = tasks.length - 1; i >= 0; i--) {
    if (tasks[i].completed) {
      tasks.splice(i, 1);
    }
  }
  updateTasks();
};

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});
clearCompletedBtn.addEventListener('click', clearCompletedTasks);

updateTasks();

const functionName = (id) => {
  console.log(`Function called with ID: ${id}`);
  // Aquí puedes agregar la lógica adicional que necesites
};
