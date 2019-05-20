class TaskList {
  constructor(taskItems) {
      this.taskItems = taskItems
      this.ul = document.createElement('ul')
  }

  addItem(taskItem) {
    this.taskItems.push(taskItem)
  }

  render() {
      let li = document.createElement('li')
      li.innerText = this.taskItems.slice(-1)[0].description
      let btn = document.createElement('button')
      btn.innerText = 'X'
      btn.setAttribute('data-description', this.taskItems.slice(-1)[0].description)
      li.append(btn)
      this.ul.append(li)
      return this.ul.outerHTML
    }      
}
