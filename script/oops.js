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
        this.moveCount = 0;
        this.result = false;
    }

    hasValidGameSize(){
       return (this.size >=3 && this.size <= 100)?true:false
    }
    start(){
        gameBoard.createGameBoardLayout(newGame.size);
        gameBoard.setAndHandelClickEvents();
    }
    end(){
        gameBoard.endGame();
    }
    restart(){
        location.reload(true);
    }
    updateMoveCount(){
        this.moveCount +=1
    }
    currentPlayer(){
         if(this.moveCount % 2 != 0){
              var currentPlayer = playerX;
         }else{
               var currentPlayer = playerO;
         }
         return currentPlayer
        
    }
    checkResult(){
        var test =  this.currentPlayer().playerMove;
        if(Object.values(test).includes(this.size)) {
            this.result = true;
        }
    }
    checkDraw(){

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
    setAndHandelClickEvents(){
        $("#game_board_table").on("click",".box",function() {
            $(this).css("pointer-events", "none");
            newGame.updateMoveCount();

            var currentPlayer = newGame.currentPlayer()
            var cell = {
                "row" : $(this).data('row'),
                "col": $(this).data('col'),
                "pDiagonal" : $(this).data("primary-diagonal"),
                "sDiagonal" : $(this).data("secondary-diagonal"),
                "value" : currentPlayer
            }
            gameBoard.setCurrentCellDOM($(this),currentPlayer);

            currentPlayer.setCurrentPlayerMove(cell);
            var minimumMovesToGetResult = newGame.size * 2 - 1;
            if(newGame.moveCount >= minimumMovesToGetResult){
                newGame.checkResult()
            }
            var totalMoves = newGame.size * newGame.size
            if(newGame.moveCount === totalMoves && !newGame.result){
                gameBoard.declareDraw();
            }
            gameBoard.declareResult(currentPlayer);
        });
    }
    setCurrentCellDOM(currentCellDOM,currentPlayer){
        currentCellDOM.addClass("disabled1")
        currentCellDOM[0].innerText = currentPlayer.token;
    }
    declareResult(currentPlayer){
        if (newGame.result == true){
            $("#result").html(`<p>Congratulations!! 🎉🎉 <strong> Player "${currentPlayer.token}" is the winner.</strong></p>`)
            newGame.end();
        }
    }
    declareDraw(){
            $("#result").html(`<p>Oops!! &#128529; <strong> Its a Draw.</strong>Play Again.</p>`)
            newGame.end();
        }
    
    endGame(){
        $(".restart").show();
        $("#game_board_table").css("pointer-events", "none");
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
