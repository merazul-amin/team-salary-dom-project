function addToList(element) {
    const nameText = element.parentNode.children[0].innerText

    const orderedList = document.getElementById('selected-player-list')

    const li = document.createElement('li')
    li.innerText = nameText

    orderedList.appendChild(li)

    const playerListLength = orderedList.children.length
    if (playerListLength > 5) {
        alert('You Can\'t choose more than 5 players.')

    }
    return playerListLength

}