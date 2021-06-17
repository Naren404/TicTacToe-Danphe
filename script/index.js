
$('form').on('submit', function(event){
    $(this).hide();
    event.preventDefault();
    var enteredGameSize = parseInt($("#gameSize").val());

    newGameBoard = new GameBoard;
    newGameBoard.createGame(enteredGameSize);
    newGameBoard.createGameBoard(enteredGameSize);
    newGameBoard.setGameArena(); //only for DOM stylings
}); 

$("#game_board_table").on("click",".box",function() {
    var row = $(this).data('row');
    var column = $(this).data('col');
    var pDiagonal = $(this).data("primaryDiagonal");
    var sDiagonal = $(this).data('secondaryDiagonal');

    var currentCell = new Cell(row,column,pDiagonal,sDiagonal);
    console.log(currentCell)
});
class GameBoard{
    //driver class
    createGame(enteredGameSize){
        var newGame = new Game(enteredGameSize);
    }
    createGameBoard(size){
        var primaryDiagonal,secondaryDiagonal;
        for (let row = 1; row <= size; row++) {
            $("#game_board_table").append(`<tr id='row${row}'></tr>`);
            for (let col = 1; col <= size; col++) {
                primaryDiagonal = secondaryDiagonal = false;

                if (row == col) primaryDiagonal = true;
                if (row + col == size + 1) secondaryDiagonal = true;
                
                $(`#row${row}`).append(`<td class="box" data-row=${row} data-col=${col}  data-primaryDiagonal=${primaryDiagonal} data-secondaryDiagonal=${secondaryDiagonal} ></td>`);
            }
        }
    }
    setGameArena(){
        $(".player1").show();
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
    generateCurrentCellMovesCombination(){
        // the implementation is not needed yet
    }
}
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
}
class Player{
    constructor(playerToken,currentPlayer){
        this.token = playerToken;
        this.currentPlayer = currentPlayer; //boolean value
    }

    setCurrentPlayer(){
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
