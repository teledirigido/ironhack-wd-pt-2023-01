// Example of a VERY simple Monopoly game simulation

// Each square represents the cash earned when a player is on it. For example:
// - If a user is at position 0, the cash will increase by 100€
// - If a user is at position 4, the cash will decrease by 40€
const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

// --- Initialization ---
let dice;

let player1 = {
  name: 'Joaquim',
  color: 'red',
  position: 0,
  cash: 30
};

 

let player2 = {
  name: 'Maxence',
  color: 'blue',
  position: 0,
  cash: 1000
};


let player3 = {
  name: 'Mostafa',
  color: 'black',
  position: 0,
  cash: 1000
};


// --- Turn of Player 1 ---

// The dice is a random integer between 1 and 6
let canPlayer1play = true;

for (let i = 0 ; i < 20 ; i++) {
  if (canPlayer1play) {
    
    dice = 1 + Math.floor(6 * Math.random());
    console.log(`Dice: ${dice}`);
    // The position is always between 0 and 15 (the numbers of squares - 1)
    player1.position = (player1.position + dice) % squares.length;
    player1.cash += squares[player1.position];
    console.log(player1);
    
    if (player1.cash < 0) {
      console.log(`Game over for ${player1.name}.`);
      canPlayer1play = false;
    }

  }
}

// The cash is updated based on the values of squares and player1.position
// If the player doesn't have anymore cash, player is out of game
