
$('form').on('submit', function(event){
    $(this).hide();
    event.preventDefault();
    var enteredGameSize = parseInt($("#gameSize").val());
    newGame = new Game(enteredGameSize);
    newGameBoard = new GameBoard;
    newGameBoard.createGameBoard(enteredGameSize);
    playerX = new Player("X", true)
    playerO = new Player("O", false)
    newGameBoard.setAndHandleCellClick()
    // newGameBoard.createGame(enteredGameSize);
    // newGameBoard.setGameArena(); //only for DOM stylings
}); 


class Game{
    constructor(size){
        this.size = size;
        this.moveCount = 0;
        this.winningMovesCombination = ["O".repeat(size),"X".repeat(size)]
    }

    hasMinimumSize(){
        // the implementation is not needed yet
    }
    hasMaximumSize(){
        // the implementation is not needed yet
    }
    updateMoveCount(){
        // the implementation is not needed yet
    }
    declareResult(){
        // the implementation is not needed yet
    }
}

class GameBoard{
    createGameBoard(size){
        var primaryDiagonal,secondaryDiagonal;
        for (let row = 1; row <= size; row++) {
            $("#game_board_table").append(`<tr id='row${row}'></tr>`);
            for (let col = 1; col <= size; col++) {
                primaryDiagonal = secondaryDiagonal = false;

                if (row == col) primaryDiagonal = true;
                if (row + col == size + 1) secondaryDiagonal = true;
                
                $(`#row${row}`).append(`<td class="box" data-row=${row} data-col=${col}  data-primary-diagonal=${primaryDiagonal} data-secondary-diagonal=${secondaryDiagonal} ></td>`);
            }
        }
    }

    setAndHandleCellClick(){
        $("#game_board_table").on("click",".box",function() {
            var row = $(this).data('row');
            var column = $(this).data('col');
            var pDiagonal = $(this).data("primary-diagonal");
            var sDiagonal = $(this).data('secondary-diagonal');
            var value = Player.getCurrentPlayer()

            var currentCell = new Cell(row,column,pDiagonal,sDiagonal, value);
            // newGame.updateMoveCount()
            (playerX.currentPlayer) ? playerO.updateCurrentPlayer(playerX) : playerX.updateCurrentPlayer(playerO)
            $(this).addClass("disabled1");
            $(this)[0].innerText = currentCell.value
            console.log(currentCell)
        });
    }
}
class Cell{
    constructor(currentRowIndex,currentColumnIndex,pDiagonal,sDiagonal,value){
        this.row = currentRowIndex;
        this.column = currentColumnIndex;
        this.pDiagonal = pDiagonal;
        this.sDiagonal = sDiagonal;
        this.value = value;
    }
}
class Player{
    constructor(playerToken,currentPlayer){
        this.token = playerToken;
        this.currentPlayer = currentPlayer; //boolean value
    }

    updateCurrentPlayer(existingPlayer){
        this.currentPlayer = true;
        existingPlayer.currentPlayer = false;
        // the implementation is not needed yet
    }

    static getCurrentPlayer(){
        return (playerX.currentPlayer) ? "X" : "O"
        // the implementation is not needed yet
    }
}
class GameMove{
    constructor(currentMoveTokens){
        this.currentMoveTokens = currentMoveTokens;
    }
}
class Result{
    constructor(){
        this.status = false;
    }
    checkForTheResult(currentMoveTokens, winningCombinations){
        // the implementation is not needed yet
    }
}
