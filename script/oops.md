$('form').on('submit', function(event){
    // starts game on form submit and calls hasValidGameSize() for input size
    // creates and starts game
}); 

class Game{
    constructor(size){
        this.size = size;
        this.minimumMovesToGetResult = size*2 -1;
        this.totalMoves = size * size;
        this.moveCount = 0;
        this.winner = false;
    }

    hasValidGameSize(){
       // returns true if input size is from 3-100
    }
    start(){
      // creates board layout, sets and handle board click and displays first player turn.
    }

    end(){
      // sets gameboard inactive and sets click to restart button
    }
    restart(){
        // reload page
    }
    updateMoveCount(){
    }
    
    setCurrentPlayer(){
    }

    checkResult(){
        // calls hasWinner() if moveCount equals to minimum moves to get result
    }

    hasWinner(){
        // checks if current player move value equals to game size and returns winner
    }

}

class GameBoard{

    createGameBoardLayout(size){
        // creates board layout with rows and cells
    }
    setAndHandleBoardClickEvents(){
    }


    displayFirstPlayerTurn(){
        
    }

    setCurrentCellDOM(currentCellDOM,currentPlayer){
        // sets background color and text of cell. 
    }

    togglePlayerTurn(){
        // toggles players
    }

    declareWinner(currentPlayer){
        // declares and displays winner and ends game 
    }

    declareDraw(){
            // declares and displays draw and ends game
        }
    

    setGameBoardInactive(){
      // sets click inactive using css. Hides player turn and displays restart button.
    }

    handleClickOnRestartButton(){
        
    }
}

class Player{
    constructor(playerToken){
        this.token = playerToken;
        this.playerMove = {};
    }

    setCurrentPlayerMove(cell){
    }
}
