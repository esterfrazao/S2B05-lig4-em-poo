let player1 = new Player('Ester', 'player1')
let player2 = new Player('Tafnis', 'player2')
let board = new Board(6, 6, [player1, player2])
const container = document.getElementById('table')
board.renderMap(container)

function handleEvent(event){
    let coluna = event.target.parentNode.attributes.getNamedItem('data-column').value;
    board.handleClick(coluna)
}

container.addEventListener('click', handleEvent)