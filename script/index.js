class GameBoard{
    //driver class
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
        this.winningMovesCombination = [`O.${repeat(size)}`,`X.${repeat(size)}`]
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
