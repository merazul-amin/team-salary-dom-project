function addToList(element) {
    //This functon is declared in common.js file
    selectPlayers(element)
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