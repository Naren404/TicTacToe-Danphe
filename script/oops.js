$('form').on('submit', function(event){
    $(this).hide();
    event.preventDefault();

    var enteredGameSize = parseInt($("#gameSize").val());

    game = new Game(enteredGameSize);

    if (game.hasValidGameSize()){
        gameBoard = new GameBoard
        playerO = new Player("O");
        playerX = new Player("X");
        game.start();
    } 
    else{
        alert("Enter valid Game Size:3 to 100");
        game.restart();
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
       return (this.size >=3 && this.size <= 100) ? true : false
    }
    start(){
        gameBoard.createGameBoardLayout(this.size);
        gameBoard.setAndHandleBoardClickEvents();
        gameBoard.displayFirstPlayerTurn();
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
        var currentPlayer = this.setCurrentPlayer();
        var currentPlayerMove =  currentPlayer.playerMove;
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
            game.updateMoveCount();

            var currentPlayer = game.setCurrentPlayer()
            var currentCell = gameBoard.setCurrentCellAttributes($(this), currentPlayer)

            gameBoard.updateCurrentCellUI($(this),currentPlayer);

            currentPlayer.setCurrentPlayerMove(currentCell);
            
            game.checkResult()

            gameBoard.declareResult(currentPlayer)
            
            gameBoard.togglePlayerTurn()
            
        });
    }

    setCurrentCellAttributes(currentCell, currentPlayer){
        return {
            "row" : currentCell.data('row'),
            "col": currentCell.data('col'),
            "pDiagonal" : currentCell.data("primary-diagonal"),
            "sDiagonal" : currentCell.data("secondary-diagonal"),
            "value" : currentPlayer.token
        }
    }

    displayFirstPlayerTurn(){
        $('#playerX').show();
    }

    updateCurrentCellUI(currentUICell,currentPlayer){
        currentUICell.addClass("visited-cell")
        currentUICell[0].innerText = currentPlayer.token;
    }

    togglePlayerTurn(){
        $("#playerX,#playerO").toggle();
    }

    declareResult(currentPlayer){
        if(game.hasWinner()){
            gameBoard.declareWinner(currentPlayer);
        } else if(game.moveCount == game.totalMoves){
            gameBoard.declareDraw();
        }
    }
    
    declareWinner(currentPlayer){
        $("#result").html(`<p>Congratulations!! 🎉🎉 <strong> Player "${currentPlayer.token}" is the winner.</strong></p>`)
        game.end();
    }

    declareDraw(){
            $("#result").html(`<p>Oops!! &#128529; <strong> Its a Draw.</strong>Play Again.</p>`)
            game.end();
        }
    

    setGameBoardInactive(){
        $(".restart").show();
        $("#game_board_table").css("pointer-events", "none");
        $("#player-turn-display").hide();
    }

    handleClickOnRestartButton(){
        $("#restart").click(function(){
            game.restart();
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
