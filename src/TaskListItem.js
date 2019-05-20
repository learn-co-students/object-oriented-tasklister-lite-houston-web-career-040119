class TaskListItem {

  constructor(task,priority){
    this.task = task
    this.priority = priority
  }

  render(){
    //create the list item to append to the list
    let task = document.createElement('li')
    //create the delete button
    let delete_button = document.createElement('button')
    delete_button.name = "Delete"
    delete_button.innerText = "X"
    delete_button.addEventListener('click',function(e){
      let content = e.target.parentElement
      content.remove()
    })
    //add attributes to the task item
    task.innerText = this.task
    if (this.priority == "high") {task.style.color = "red"}
    if (this.priority == "medium") {task.style.color = "yellow"}
    if (this.priority == "low") {task.style.color = "green"}
    task.append(delete_button)
    let task_list = document.getElementById('tasks')
    task_list.append(task)
  }
}
