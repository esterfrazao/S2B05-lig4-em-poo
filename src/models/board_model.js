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
        // Array matrix onde iremos adicionar nossas linhas e colunas
        const map = [] 
        // Loop em cima do total determinado de linhas
        for (let index = 0; index < this.rows; index++) { 
            // Inserindo novos array as linhas, o new Array cria um array 
            // com o total de espaços vazios que forem passados
            map.push(new Array(this.columns))
        }
        // Retornando essa matrix para uso
        return map
      }
}
