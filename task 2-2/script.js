
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


const input = document.getElementById("todoInput");
const taskList = document.getElementById("taskList");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");


renderTasks();


addButton.addEventListener("click", () => {
  const taskText = input.value.trim();
  if (!taskText) {
    alert("Please enter a task.");
    return;
  }
  tasks.push({ text: taskText, completed: false });
  input.value = "";
  saveAndRender();
});


clearButton.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear all tasks?")) {
    tasks = [];
    saveAndRender();
  }
});


function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    const span = document.createElement("span");
    span.textContent = task.text;
    span.addEventListener("click", () => toggleComplete(index));

    const controls = document.createElement("div");
    controls.className = "task-controls";

    const editBtn = document.createElement("button");
    editBtn.innerHTML = "✏️";
    editBtn.addEventListener("click", () => editTask(index));

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.addEventListener("click", () => deleteTask(index));

    controls.appendChild(editBtn);
    controls.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(controls);
    taskList.appendChild(li);
  });
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  saveAndRender();
}

function editTask(index) {
  const newText = prompt("Edit task:", tasks[index].text);
  if (newText && newText.trim()) {
    tasks[index].text = newText.trim();
    saveAndRender();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}
