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

//Event Handler for players salary

document.getElementById('player-salary-calculation').addEventListener('click', function () {
    //Get the selected players Number
    const selectedPlayers = document.getElementById('selected-player-list').children

    //Get the per players cost field value
    const perplayerField = document.getElementById('perPlayerField').value

    if (isNaN(perplayerField) === true) {
        alert('Only numbers are accepted.')
    }
    else if (perplayerField === '') {
        alert('You can\'t leave the field empty.')
    }
    else {
        //Calculate the cost
        const playersCost = perplayerField * selectedPlayers.length

        //Now set it to total players cost
        const setPlayersCost = document.getElementById('players-expenses')
        setPlayersCost.innerText = playersCost
    }


})