// Ummmmmm

const min = 1;
const numberOfChances = 3;

let max = 2;
let stage = 1;
let playerPoints = 0;
let numberOfTries = 1;

let userName = prompt("Username: ")


let capitalizedUserName = userName.toUpperCase()


let guess = prompt(`--> HEY! WELCOME TO STAGE ${stage} Guess a number between ${min} and ${max} `)

let formattedGuess = Number(guess)

// --> function that defines the game
function startGame(guess, formattedGuess){

while(isNaN(formattedGuess) || guess === ""){
  console.log("==>WARNING: Your guess has to be a valid number")
  guess = prompt(`HELLO WELCOME TO STAGE ${stage} Guess a number between ${min} and ${max} `)
  formattedGuess = Number(guess)
}

// --> Generate  correct answer
const correctAnswer = Math.floor(Math.random() * max) + min
  
// --> while  player has not guessed  correct answer and has more than 0 tries.
while(formattedGuess !== correctAnswer && numberOfTries < numberOfChances  ){
  // -->alert  user that the guess is incorrect and they have x number of tries left
  console.log(`==>SORRY!: You guessed the number ${formattedGuess}, it is incorrect, try again. You have ${numberOfChances - numberOfTries} ${numberOfChances - numberOfTries > 1 ? "tries" : "try" } left`)
  // -->Increase  numberOftries by 1
  numberOfTries += 1
  //--> Prompt the user to guess again
  guess = prompt("Try Harder: ")
  formattedGuess = Number(guess)

    while(guess === "" || isNaN(formattedGuess)){
      console.log("Input a valid number")
      guess = prompt("Try Harder: ")
  formattedGuess = Number(guess)
    }
}

// --> For wrong guesses
if( formattedGuess !== correctAnswer && numberOfTries === numberOfChances){
  if(guess === "" || isNaN(formattedGuess)){
    while(guess === "" || isNaN(formattedGuess) ){
      console.log("Input a valid number")
      guess = prompt("Try Harder: ")
  formattedGuess = Number(guess)
    }
  }
  console.log(`${capitalizedUserName}, Seems you couldn't get the number. The correct guess was: ${correctAnswer}`)
  let playAgain = confirm(`Would you like to play again? (press "y" to continue, "n" to end) `)
  if(playAgain){
    numberOfTries = 1
    guess = prompt(`--> WELCOME TO STAGE ${stage} Guess a number between ${min} and ${max} `)
    formattedGuess = Number(guess)
    startGame(guess, formattedGuess)
  }else{
    console.log(`--> Goodbye ${capitalizedUserName}, you had ${playerPoints} ${ playerPoints > 1 ? "points" : "point" }. Come back again.`)
    return
  }
}

// --> For a correct guess
if(formattedGuess === correctAnswer){
  // --> increase the stage by 1
  stage += 1
  // --> increase the player point by 1
  playerPoints += 1

  // --> congratulatory message
  console.log(`OMG ${capitalizedUserName}, you got it in ${numberOfTries} ${numberOfTries > 1 ? "tries" : "try"}.
You have ${playerPoints} ${playerPoints > 1 ? "points" : "point"}
  `)
// --> Continue game?
  let continueGame = confirm(`Would you like to continue to stage ${stage}? (Press "y" to continue, "n" to end)`)

  if(continueGame){
    // --> increase  max value
    max += 1
    // --> reset player parameters
     numberOfTries = 1
    guess = prompt(`--> WELCOME TO STAGE ${stage} Guess a number between ${min} and ${max} `)
    formattedGuess = Number(guess)
    startGame(guess, formattedGuess)
  }else{
    console.log(`--> Goodbye ${capitalizedUserName}, you had ${playerPoints} ${ playerPoints > 1 ? "points" : "point" }. Come back again.`)
  }
} 
}

// --> start  game
startGame(guess, formattedGuess)
