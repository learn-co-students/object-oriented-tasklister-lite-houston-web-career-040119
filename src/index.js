document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const listContainer = document.getElementById("list");
  
  const form = document.getElementById("create-task-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    let object = new TaskListItem(e.target[0].value, e.target[2].value)
    const renderApp = () => (listContainer.append(taskList.render(object.liTag(e.target[1].value))))
    // debugger
    renderApp()
    form.reset()
  })
  // Add Form Behavior Here!
  // let li = new TaskListItem(e)
  // let ul = new TaskList(task)
  
});
