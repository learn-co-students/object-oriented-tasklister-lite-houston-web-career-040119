class TaskListItem 
{
    constructor(description)
    {
        this.description = description
    }

    renderListItem()
    {
        let listItem = document.createElement('li')
        listItem.innerText = this.description
        let btn = document.createElement('button')
        btn.innerText = "X"
        listItem.append(btn)
        btn.addEventListener("click",(e)=>
        {
            e.preventDefault()
            e.target.parentElement.remove()
        })
            return listItem
    }

}
