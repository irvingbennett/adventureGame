const readline = require('readline-sync')
let playerName = ""
// Get player name using readline-sync
var playererName = readline.question('May I have your name? ')
let playerHealth = 100
let playerGold = 20
let playerLocation = "village"
let gameRunning = true
let inventory = []


/*
Adventure Game
This game will be a text-based game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/

// Display the game title
console.log("Welcome to the Adventure Game " + playererName);

// Add a welcome message
console.log("Prepare yourself for an epic journey!");

console.log(`Your stats are:
    Health:   ${playerHealth}
    Gold:     ${playerGold}
    Location: ${playerLocation}
    `)