let playerScore = 0;
let compScore = 0;


function getComputerChoice(){
var randomNumber = Math.floor(Math.random() * 3) + 1;
if (randomNumber == 1){
    return "rock";
} else if (randomNumber == 2){
    return "paper";
}else if (randomNumber == 3){
    return "scissors";
}else{
    console.log("Error: Computer didn't choose correctly.");
}
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' &&  computerSelection==='scissors') {
        console.log('You win! Rock beats Scissors');
        playerScore +=  1;
     }else if (playerSelection === 'scissors' &&  computerSelection==='rock') {
        console.log('You Lose! Scissors beats Rock');
         compScore +=  1;
    }else if (playerSelection === 'rock' &&  computerSelection==='paper') {
         console.log('You Lose! Paper beats Rock');
          compScore +=  1;
    }else if (playerSelection === 'paper' &&  computerSelection==='rock') {
        console.log('You Win! Paper beats Rock');
         playerScore +=  1;
    }else if (playerSelection === 'scissors' &&  computerSelection==='paper') {
        console.log('You Win! Scissors beats Paper');
         playerScore +=  1;
   }else if (playerSelection === 'paper' &&  computerSelection==='scissors') {
       console.log('You Lose! Scissors beats Paper');
        compScore += 1;
    } else if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    }else{
    console.log('Invalid input. Please enter rock, paper or scissors');
}

console.log(`Your score is; ${playerScore}, Computer score is: ${compScore}`);
}

function gameWinner(playerScore, compScore){
if(playerScore > compScore){
    console.log(`Congratulations! You won the game! with: ${playerScore} points` );
}else if(compScore > playerScore){
    console.log(`Better luck next time! The computer won with ${compScore} points`);
}else{
    console.log('The game ended in a draw.');
}
}
  //const playerSelection = getPlayerChoice();

    function getPlayerChoice(){
    let str = prompt('Pick Rock, Paper or Scissors: ');
    let string = str.toLowerCase();
    return string;
  }

 // const computerSelection = getComputerChoice();
  //  console.log(playRound(playerSelection, computerSelection));
  
function playGame(){
    for(let i = 0; i < 5; i++){
    const playerSelection= getPlayerChoice();
    const computerSelection = getComputerChoice();
    playRound(playerSelection,computerSelection,);
}
}

playGame();
gameWinner(playerScore,compScore);