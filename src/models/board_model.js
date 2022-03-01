class Board {
    constructor(columns, rows, players) {
        this._columns = columns;
        this._rows = rows;
        this._map = this.createEmptyMap();
        this._players = players;
        this._currentPlayer = this._players[0];
    }

    get columns() {
        return this._columns
    }
    get rows() {
        return this._rows
    }
    get map() {
        return this._map
    }
    get players() {
        return this._players
    }
    get currentPlayer() {
        return this._currentPlayer
    }

    set columns(_) {
        throw 'Can\'t change this value'
    }
    set rows(_) {
        throw 'Can\'t change this value'
    }
    set map(_) {
        throw 'Cant change this value'
    }      
    set players(_) {
        throw 'Can\'t change this value'
    }
    set currentPlayer(player) {
        if(player){ // Validação se o jogador existe
            this._currentPlayer = player
        }
    }

    createEmptyMap() {
        const map = [] 

        for (let index = 0; index < this.rows; index++) { 
            // Inserindo novos array as linhas, o new Array cria um array 
            // com o total de espaços vazios que forem passados
            map.push(new Array(this.columns))
        }
        return map
    }

    renderMap(container) {
        container.innerText = ''

        for(let indexColuna = 0; indexColuna < this.columns; indexColuna++) {
            const column = document.createElement('div') 
            column.classList.add('column')
            column.style.width = `${100/this.columns}%`
            column.dataset.column = indexColuna
            column.addEventListener('click', () => {"Adicionaremos uma função de click futuramente"})

            for(let indexLinha = 0; indexLinha < this.rows; indexLinha++) {
                const celula = document.createElement('div')
                celula.classList.add('cell')
                celula.style.height = `${100/this.rows}%`
                celula.dataset.row = indexLinha
                column.appendChild(celula)
            }

            container.appendChild(column)
        }
    }

    switchPlayer() {
        if (this.currentPlayer === this.players[0]) {
            this.currentPlayer = this.players[1]
        } else {
            this.currentPlayer = this.players[0]
        }
    }

    handleClick(column) {
        let row = this.map.findIndex(row => row[column])

        if (row === -1) {
            row = this.rows
        }

        this.map[row - 1][column] = this.currentPlayer

        const cell = new Cell(column, row, this.currentPlayer.className)

        cell.render()

        if(this.isWinnableMove(column,row-1)) {
         console.log(`${this.currentPlayer.name} ganhou`)
        }
        
        this.switchPlayer()
    }

    isWinnableMove(column, row) {
        return this.checkVertical(column, row)
    }

    checkVertical(column, row) {
        let end = row + 3
    
        if(end >= this.rows){
            end = this.rows -1
        }
    
        let counter = 0
        for (let index = row; index <= end; index++) {
            if(this.map[index][column] === this.currentPlayer) {
                counter++
            } else {
                counter = 0
            }
            if (counter === 4) {
                return true
            }
        }
        return false
    }
}
