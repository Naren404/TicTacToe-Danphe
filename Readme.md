# TicTacToe Game
# OOPs Structure
class GameBoard
    : create Game()
    : create Player()  # create 2 players: X and O
    : createGameBoard() # create input layout box with unique row_id & col_id
    
    # after cell is clicked
    : create cell() object and set values as per the layout box ids.
    : createMoveCombination(currentCell)  # output: [ooo, ooo, ooo, xxx]
    : create GameMove(createMoveCombination())
    # value of game move object ["oo", 'xx', 'ox', 'xo']
    : declareResult(result.status)
    : updateCurrentPlayer()
    : updateMoveCount()

class Cell
    - Row
    - Column
    - pDiagonal
    - sDiagonal
    - value

    : create()

# These classes has to be totally detached from DOM
class Game
    - size
    - moveCount # changes
    - winningCombination[]

    : updateMoveCount()
    : create()
    
    
class GameMove
    - currentMoveTokens
    
class Player
    - token
    - current_player
​
    : create()
    : setCurrentPlayer()
​
class Result
    - status  # default: false
    
    :checkForTheResult(currentMoveTokens, winningCombina)

