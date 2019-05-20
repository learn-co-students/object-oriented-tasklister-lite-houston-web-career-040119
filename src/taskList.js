class TaskList {
  render(){
    let h2 = document.createElement('h2')
    h2.innerText = "Todos:"
    let ul = document.createElement('ul')
    ul.id = "tasks"
    return h2.outerHTML + ul.outerHTML
  }
}
