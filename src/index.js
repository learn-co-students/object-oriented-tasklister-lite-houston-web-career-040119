document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const listContainer = document.getElementById("list");
  const renderApp = () => (listContainer.innerHTML = taskList.render());

  // Add Form Behavior Here!
const form =  document.querySelector('#create-task-form')
form.addEventListener('submit',function(e){
  e.preventDefault()
  let task =  new TaskListItem(e.target[0].value)
  task.render()
})

  renderApp()
});



