  let ul = document.createElement('ul')
  let list = document.getElementById('list')
  list.append(ul)

class TaskList {
    
  constructor(taskItem){
      this.taskItem = taskItem
  }
  
  appendLi(){
      let li = document.createElement('li')
      let btn = document.createElement('button')
      
      btn.id = this.taskItem.thing
      li.id = this.taskItem.thing
      
      li.innerHTML = `${this.taskItem.thing} <button id=${this.taskItem.thing}>x</button>`
      let list = document.querySelector('#list')
      ul.append(li)
      list.append(ul)
  }
  
  btnClick(){
    
    let a = document.querySelector(`button#${this.taskItem.thing}`)
   
    a.addEventListener("click",function(e){
      
      e.preventDefault()
      
      ul.removeChild(document.querySelector(`li#${this.id}`))
    })
    
  }
  
}
