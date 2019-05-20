class TaskList 
{
    constructor()
    {
      this.ul = document.createElement('ul')
    }
    render(description)
    {
     let taskItem = new TaskListItem(description)
     let li = taskItem.renderListItem()
     this.ul.append(li)
    }
}
