document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form")
  const taskList = document.getElementById("tasks")

 form.addEventListener("submit", (event) => {
    event.preventDefault()
    const taskDescription = document.getElementById("new-task-description").value;
    buildToDo(taskDescription);
    })

  function buildToDo(task) {
      const li = document.createElement("li");
      
      li.textContent = task;
      
      taskList.appendChild(li);
  }
})