document.addEventListener("DOMContentLoaded", () => {
  let taskList = new TaskList()
  const listContainer = document.getElementById("list");
  // const renderApp = () => (listContainer.innerHTML = taskList.render());
  const taskForm = document.getElementById('create-task-form')
  listContainer.append(taskList.h2, taskList.ul)
  taskForm.addEventListener('submit', (e) => {
    // Add Form Behavior Here!
    e.preventDefault()
    taskList.render(e.target[0].value)
    e.target.reset()
  })
})