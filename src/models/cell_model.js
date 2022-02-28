class Cell {
    constructor(posicaoColuna, posicaoLinha, className) {
        this.__coluna  = posicaoColuna
        this._linha   = posicaoLinha
        this._className      = className
    }
    get coluna() { return this._coluna }
    get linha() { return this._linha }
    get className() { return this._className }
    
    set coluna(_) {
        throw 'Cant change this value'
    }    
    set linha(_) {
        throw 'Cant change this value'
    }   
    set className(_) {
        throw 'Cant change this value'
    }

    render() {
        const div = document.querySelector(`.column[data-column="${this.coluna}"] > .cell[data-row="${this.linha - 1}"]`)
        div.innerText = ''
    
        const playerDiv = document.createElement('div')
        playerDiv.classList.add(this.className)
        div.appendChild(playerDiv)
    }

    
}