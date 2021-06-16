class GameBoard{

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
class Game{
    constructor(size){
        this.size = size;
        this.moveCount = 0;
        this.winningMovesCombination = [`O.${repeat(size)}`,`X.${repeat(size)}`]
    }

    updateMoveCount(){
        this.moveCount += 1;
    }
}
class Player{
    constructor(playerToken,currentPlayer){
        this.token = playerToken;
        this.currentPlayer = currentPlayer; //boolean value
    }

    setCurrentPlayer(){
        this.currentPlayer?this.currentPlayer = false:this.currentPlayer = true;
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
        if(currentMoveTokens.includes(winningCombinations)){

        }
    }
}
