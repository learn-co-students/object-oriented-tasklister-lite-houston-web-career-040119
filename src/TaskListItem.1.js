class TaskListItem {
    constructor(description) {
        this.description = description
        this.li = document.createElement('li')
        this.btn = document.createElement('button')
    }

    renderListItem() {
        this.li.innerText = this.description
        this.btn.innerText = 'X'
        this.li.append(this.btn)
        this.btn.addEventListener('click', (e) => {
            e.preventDefault()
            e.target.parentElement.remove()
        })
    }
}