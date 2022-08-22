function addToList(element) {
    const nameText = element.parentNode.children[0].innerText
    const orderedList = document.getElementById('selected-player-list')



    const playerListLength = orderedList.children.length

    if (playerListLength > 4) {
        alert('You Can\'t choose more than 5 players.')

    }
    else {
        const li = document.createElement('li')
        li.innerText = nameText

        orderedList.appendChild(li)
    }



}




//----------Event Listener for players salary

document.getElementById('player-salary-calculation').addEventListener('click', function () {

    //This functon is declared in common.js file
    playersSalary()
})



//----------Event Listener for Total Cost Calculation and set it to total cost 

document.getElementById('total-cost').addEventListener('click', function () {

    //This functon is declared in common.js file
    totalCostCalculation()
})