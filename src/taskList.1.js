class TaskList {
  constructor() {
    this.ul = document.createElement('ul')
    this.h2 = document.createElement('h2')
    this.h2.innerText = 'My Todos'
  }

  render(description) {
      let taskItem = new TaskListItem(description)
      taskItem.renderListItem()
      this.ul.append(taskItem.li)
    }      
}
