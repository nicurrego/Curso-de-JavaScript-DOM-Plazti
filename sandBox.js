const taskForm = document.getElementById("task-form")
const taskList = document.getElementById("task-list")

loadTasks();
taskForm.addEventListener("submit", (event) =>{
  event.preventDefault()


  const taskInput = document.getElementById("task-input")
  const task = taskInput.value;

  if (task){
    taskList.append(createTaskElement(task));
    storeTaskInLocalStorage(task)
    taskInput.value = ""
  }
});

function createTaskElement(task) {
  const li = document.createElement("li")
  li.textContent = task
  li.append(createButton("❌","delete-btn"), createButton( "📝","edit-btn"))
  return li;
}
function createButton(text, className) {
  const btn = document.createElement("span");
  btn.textContent = text;
  btn.className = className
  return btn
}
taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")){
    deleteTask(event.target.parentElement);
  } else if (event.target.classList.contains("edit-btn")){
    editTask(event.target.parentElement)
  }
});

function deleteTask(taskItem) {
  if (confirm("Deseas borrar la tarea?")){
    removeFromLocalStorage(taskItem)
    taskItem.remove();
  }
}

function editTask(taskItem) {
  const newTask = prompt("Edita la tarea:", taskItem.firstChild.textContent);
  if (newTask !== null){
    taskItem.firstChild.textContent = newTask;
  }
  updateLocalStorage()
}
function storeTaskInLocalStorage(task){
  const tasks = JSON.parse(localStorage.getItem("tasks")||"[]")

  tasks.push(task)
  localStorage.setItem("tasks", JSON.stringify(tasks))
}
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")||"[]")
  tasks.forEach((task) => {
    taskList.appendChild(createTaskElement(task))
  });
}

function updateLocalStorage() {
  const tasks = Array.from(taskList.querySelectorAll("li")).map((li) => li.firstChild.textContent)
  
  localStorage.setItem("tasks", JSON.stringify(tasks))
}
function removeFromLocalStorage(taskContent) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

  const updateTasks = tasks.filter((task) => task !== taskContent);

  localStorage.setItem("tasks", JSON.stringify(updateTasks));
}
const themeToogleButton = document.getElementById("toggle-theme-btn")
const currentTheme = localStorage.getItem("theme")
console.log(currentTheme);

themeToogleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme")

  const theme = document.body.classList.contains("dark-theme") ? "dark" : "light";
  localStorage.setItem("theme", theme)
});

if (currentTheme === "dark"){
  document.body.classList.add("dark-theme")
}
