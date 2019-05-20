document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const listContainer = document.getElementById("list");
  //const renderApp = () => (listContainer.innerHTML = taskList.render());

  // Add Form Behavior Here!
  const form = document.querySelector("#create-task-form")

  taskList.render()

  form.addEventListener("submit", e => {
    e.preventDefault()
    let item = new TaskListItem(document.querySelector("#new-task-description").value)
    taskList.addAndRenderItem(item)
    e.target.reset()
  })

  //renderApp()
});