$('form').on('submit', function(event){
    $(this).hide();
    event.preventDefault();

    var enteredGameSize = parseInt($("#gameSize").val());

    newGame = new Game(enteredGameSize);

    if (newGame.hasValidGameSize()){
        gameBoard = new GameBoard
        playerO = new Player("O");
        playerX = new Player("X");
        newGame.start();
    } 
    else{
        alert("Enter valid Game Size:3 to 100");
        newGame.restart();
    }
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
       return (this.size >=3 && this.size <= 100)?true:false
    }
    start(){
        gameBoard.createGameBoardLayout(this.size);
        gameBoard.setAndHandleBoardClickEvents();
        gameBoard.setGameBoardActive();
    }
    end(){
        gameBoard.setGameBoardInactive();
        gameBoard.handleClickOnRestartButton();
    }
    restart(){
        location.reload(true);
    }
    updateMoveCount(){
        this.moveCount +=1
    }
    setCurrentPlayer(){
         if(this.moveCount % 2 != 0){
              return playerX;
         }else{
            return playerO;
         }
    }

    checkResult(){
        if(this.moveCount >= this.minimumMovesToGetResult){
            this.hasWinner();
        }
    }

    hasWinner(){
        var currentPlayerMove =  this.setCurrentPlayer().playerMove;
        if(Object.values(currentPlayerMove).includes(this.size)) {
            this.winner = true;
        }
        return this.winner;
    }

}

class GameBoard{

    createGameBoardLayout(size){
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
    setAndHandleBoardClickEvents(){
        $("#game_board_table").on("click",".box",function() {
            $(this).css("pointer-events", "none");
            newGame.updateMoveCount();

            var currentPlayer = newGame.setCurrentPlayer()
            var cell = {
                "row" : $(this).data('row'),
                "col": $(this).data('col'),
                "pDiagonal" : $(this).data("primary-diagonal"),
                "sDiagonal" : $(this).data("secondary-diagonal"),
                "value" : currentPlayer.token
            }
            gameBoard.setCurrentCellDOM($(this),currentPlayer);

            currentPlayer.setCurrentPlayerMove(cell);

            
            newGame.checkResult()
            if(newGame.hasWinner()) gameBoard.declareWinner(currentPlayer);
            if(newGame.moveCount === newGame.totalMoves && !newGame.winner){
                gameBoard.declareDraw();
            }
            gameBoard.togglePlayerTurn()
            
        });
    }


    setGameBoardActive(){
        $('#playerX').show();
    }

    setCurrentCellDOM(currentCellDOM,currentPlayer){
        currentCellDOM.addClass("visited-cell")
        currentCellDOM[0].innerText = currentPlayer.token;
    }

    togglePlayerTurn(){
        $("#playerX,#playerO").toggle();
    }

    declareWinner(currentPlayer){
        $("#result").html(`<p>Congratulations!! 🎉🎉 <strong> Player "${currentPlayer.token}" is the winner.</strong></p>`)
        newGame.end();
    }

    declareDraw(){
            $("#result").html(`<p>Oops!! &#128529; <strong> Its a Draw.</strong>Play Again.</p>`)
            newGame.end();
        }
    

    setGameBoardInactive(){
        $(".restart").show();
        $("#game_board_table").css("pointer-events", "none");
        $("#player-turn-display").hide();
    }

    handleClickOnRestartButton(){
        $("#restart").click(function(){
            newGame.restart();
        });
    }
}

class Player{
    constructor(playerToken){
        this.token = playerToken;
        this.playerMove = {};
    }

    setCurrentPlayerMove(cell){
        
      this.playerMove[`row${cell.row}`] = (this.playerMove[`row${cell.row}`] || 0 ) + 1
      this.playerMove[`col${cell.col}`] = (this.playerMove[`col${cell.col}`] || 0 ) + 1 
      if (cell.pDiagonal) this.playerMove[`pDiagonal`] = (this.playerMove[`pDiagonal`] || 0 ) + 1 
      if (cell.sDiagonal) this.playerMove[`sDiagonal`] = (this.playerMove[`sDiagonal`] || 0 ) + 1 
    }
}
