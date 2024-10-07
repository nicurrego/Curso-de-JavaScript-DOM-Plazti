const taskForm = document.getElementById("task-form")
const taskList = document.getElementById("task-list")

taskForm.addEventListener("submit", (event) =>{
  event.preventDefault()

  const taskInput = document.getElementById("task-input")
  const task = taskInput.value;
  console.log(task);
})

