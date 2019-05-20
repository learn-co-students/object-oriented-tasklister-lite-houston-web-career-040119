class TaskListItem {

  constructor(description) {
      this.description = description
      this.li = document.createElement('li')

  }


  render(ul) {
      this.li.innerText = this.description
      ul.append(this.li)
      let button = document.createElement("button")
      button.innerText = "X"
      this.li.append(button)

      button.addEventListener("click", e => {
          e.target.parentElement.style.display = "none"
      })
  }
}