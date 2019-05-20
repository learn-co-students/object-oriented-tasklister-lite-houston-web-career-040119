document.addEventListener("DOMContentLoaded", () => 
{
  const taskList = new TaskList();

  const listContainer = document.getElementById("list");
  const taskForm = document.getElementById("create-task-form")
  // const renderApp = () => {taskList.render()};
  listContainer.append(taskList.ul)

  taskForm.addEventListener("submit", (e) =>
  {
    e.preventDefault()
    taskList.render(e.target[0].value)
    e.target.reset()
  })


  // renderApp()
});
