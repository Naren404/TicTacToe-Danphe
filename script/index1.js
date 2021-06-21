$('form').on('submit', function(event){
  $(this).hide();
  event.preventDefault();
  var enteredGameSize = parseInt($("#gameSize").val());

  var newGame = new Game(enteredGameSize);
  var newGameBoard = new GameBoard;
  var playerX = new Player("X", true)
  var playerO = new Player("O", false)
  var newGameMove = new GameMove;
  var result = new Result;

  // set and handle click for each cell
  newGameBoard.setAndHandleCellClick()
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
      this.moveCount +=1
      // the implementation is not needed yet
  }
  
  updateCurrentPlayer(existingPlayer){
    // the implementation is not needed yet
  }

  createGameBoard(size){
    // the implementation is not needed yet
  }


  checkResult(currentMoveTokens, winningCombinations){
    // the implementation is not needed yet
  }

  declareResult(){
      // the implementation is not needed yet
  }
}

class GameBoard{

  setAndHandleCellClick(){
      // the implementation is not needed yet
  }

  updateCellValue(){
    // the implementation is not needed yet
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

  setCellValue(){
    // the implementation is not needed yet
  }
}

class Player{
  constructor(playerToken,currentPlayer){
      this.token = playerToken;
      this.currentPlayer = currentPlayer; //boolean value
  }

  setCurrentPlayer(existingPlayer){
      // the implementation is not needed yet
  }

  getCurrentPlayer(){
      // the implementation is not needed yet
  }
}

class GameMove{
  constructor(moveTokenText){
    this.moveTokenText = moveTokenText;
  }

  createCurrentMoveCombination(currentCell){
    // the implementation is not needed yet
  }

  setCurrentMoveCombination(token){
    // the implementation is not needed yet
  }

  getCurrentMoveCombination(token){
    // the implementation is not needed yet
  }

}

class Result{
  constructor(){
      this.status = false;
  }

  setResult(status){
    // the implementation is not needed yet
  }

  getResult(){
    // the implementation is not needed yet
  }
}
