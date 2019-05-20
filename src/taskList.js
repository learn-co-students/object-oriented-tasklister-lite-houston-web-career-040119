class TaskList {
    constructor(task){
        this.task = task
        const ul = document.createElement('ul')

        this.ul = ul
    }



    render(li){
        this.ul.append(li)
        this.sort()
        return this.ul
    }

    sort(){
        let highMediumHigh = []
        let mediumLowLow = []
        // debugger
        for (let li of this.ul.children) {
            if (li.style.color == 'green') {
                mediumLowLow.push(li)
            }
            else if (li.style.color == 'gold') {
                mediumLowLow.unshift(li)
            }
            else if (li.style.color == 'orange') {
                highMediumHigh.push(li)
            }
            else if (li.style.color == 'red') {
                highMediumHigh.unshift(li)
            }

        }
        this.ul.innerHTML = ''
        highMediumHigh.concat(mediumLowLow).forEach(li => {
            this.ul.append(li)
        })

        // this.ul.chilren = lowMediumLow.concat(mediumHighHigh)

    }
  
}
