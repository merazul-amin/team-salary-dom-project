/*--------Players Salary Calculation Function----------------  */

function playersSalary() {
    //Get the selected players Number
    const selectedPlayers = document.getElementById('selected-player-list').children

    //Get the per players cost field value
    const perplayerField = document.getElementById('perPlayerField').value



    //First validation if the input field leaven empty, or input is not a number

    if (isNaN(perplayerField) === true) {
        alert('Only numbers are accepted.')
    }
    else if (perplayerField === '') {
        alert('You can\'t leave input field empty.')
    }
    else {
        //Calculate the cost
        const playersCost = perplayerField * selectedPlayers.length

        //Now set it to total players cost
        const setPlayersCost = document.getElementById('players-expenses')
        setPlayersCost.innerText = playersCost
    }
}





/*--------Total Cost Calculation Function----------------  */

function totalCostCalculation() {
    const managerCostField = document.getElementById('manager-salary')
    const coachCostField = document.getElementById('coach-salary')
    const playersExpense = document.getElementById('players-expenses')



    //First validation if the input field leaven empty, or input is not a number


    if (isNaN(managerCostField.value) === true || isNaN(coachCostField.value) === true) {
        alert('Only numbers are accepted.')
    }
    else if (managerCostField.value === '' || coachCostField.value === '') {
        alert('You can\'t leave input field empty.')
    }
    else {
        const managerSalary = parseInt(managerCostField.value)
        const coachSalary = parseInt(coachCostField.value)
        const playersSalary = parseInt(playersExpense.innerText)
        const totalCost = managerSalary + coachSalary + playersSalary

        //Now set it to Total Cost

        const totalSalaryField = document.getElementById('total-salary')
        totalSalaryField.innerText = totalCost
    }
}