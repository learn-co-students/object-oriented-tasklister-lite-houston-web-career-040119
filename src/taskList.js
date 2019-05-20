class TaskList {
  render(){
    let ul =  document.createElement('ul')
    let h2 =  document.createElement('h2')
    ul.id = 'tasks'
    h2.innerText = "To do"
    let div = document.querySelector('#list')
  
    // div.append(h2,ul)
    return h2.outerHTML + ul.outerHTML
  }


}
