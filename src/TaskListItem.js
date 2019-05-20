class TaskListItem {
  constructor(task){
    this.task = task;
  }

render(){
  let li =  document.createElement('li')
  li.innerText = this.task

  let ddl =  document.createElement('button')
  li.append(ddl)
  ddl.name = "Delete"

  ddl.innerText = "X"
  ddl.addEventListener('click',function(e){
    e.preventDefault()

  let  content = e.target.parentElement
  // debugger
  content.remove()
  })
  // debugger
let taskList = document.getElementById('tasks')
  taskList.append(li)
}

}




