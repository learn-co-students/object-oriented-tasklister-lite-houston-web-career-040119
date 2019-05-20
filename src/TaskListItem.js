class TaskListItem {
  constructor(desc, name){
      this.desc = desc
      this.name = name
  }

  liTag(color){
      let li = document.createElement('li')
      li.innerText = this.desc
      let deleteButton = document.createElement('button')
      li.style.color = color
      let p = document.createElement('p')
      p.innerText = this.name
      p.style.color = "black"
      li.append(p)
      deleteButton.innerText = "Finished Task"
      li.append(deleteButton)
      deleteButton.addEventListener("click", (e) => {
        e.target.parentElement.remove()
      })
      return li 
  }
}
