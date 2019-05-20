class TaskList {

  constructor(){
      this.ul = document.createElement('ul')
      this.list = []
  }

  render(){
      document.querySelector("#list").append(this.ul)
  }


  addAndRenderItem(item){
      item.render(this.ul)
      this.list.push(item)
  }

}