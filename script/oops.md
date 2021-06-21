class Game
 has_one :GameBoard
 has_many :Players
 has_one :result

class GameBoard
 setup game board
 handles click
 display game status
 
class Player
 has_many :moves
 belongs to game

class Moves
 //tracks moves for both players
 belongs to player

class Result
 //takes care of result
 belongs to game
  