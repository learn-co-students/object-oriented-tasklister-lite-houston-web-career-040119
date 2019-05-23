// document.addEventListener("DOMContentLoaded", () => {
  // const taskList = new TaskList();

  // const listContainer = document.getElementById("list");
  // const renderApp = () => (listContainer.innerHTML = taskList.render());

  // Add Form Behavior Here!
// const form =  document.querySelector('#create-task-form')
// form.addEventListener('submit',function(e){
//   e.preventDefault()
//   debugger
//   let task =  new TaskListItem(e.target[0].value)
//   task.render()
// })
// renderApp()
// });

document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const listContainer = document.getElementById("list");
  const taskForm = document.getElementById("create-task-form")
  // const renderApp = () => {listContainer.innerHTML = taskList.render()};
  let selectTag =  document.createElement("select")
  let titleOpt = document.createElement("option")
  titleOpt.innerText = "Sort By"
  titleOpt.selected = true
  titleOpt.disabled = true
  selectTag.append(titleOpt)
  let options = ["ASC","DESC"]
  options.forEach((sort) => {
    let opt = document.createElement('option')
    opt.text  = sort
    opt.value = sort
    selectTag.append(opt)
  })

  selectTag.addEventListener("change", (e) => {
    taskList.sorting(e.target.value)
  })



  listContainer.append(taskList.h2, selectTag,taskList.ul)
  // Add Form Behavior Here!

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    taskList.render(e.target[0].value)
    e.target.reset()
  
  })

  // renderApp()
});