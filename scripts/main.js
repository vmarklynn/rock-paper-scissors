// userr JavaScript goes here!
const choices = ["rock", "paper", "scissor"];
let playerScore = 0;
let computerScore = 0;
//max random function that picks a number between 0 to max.
function random(max){
    return Math.floor(Math.random() * max) ;
}

//Generate a number between 0 to 2 then the random number is used as an index for the choices array.
function computerSelection(){
    let rand = random(choices.length);
    return choices[rand];
}

function playerSelection(){
    let select = prompt("rock, paper, or scissor?");
    let choice = select.toLowerCase();
    if ((choice !== "rock") && (choice !== "paper") && (choice !== "scissor")){
        playerSelection();
    }
    return choice;
}

function scoreCheck(result)
{
    const pScore = document.querySelector('.player-score');
    const cScore = document.querySelector('.comp-score');
    const rDisplay = document.querySelector('.display-board')

    if(result === "playerWin")
    {
        pScore.textContent = playerScore;
    }
    else{
        cScore.textContent = computerScore;
    }

    if(playerScore === 5)   
    {
        rDisplay.textContent = "Humans won!"
        playerScore = 0;
        computerScore = 0;
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
    }else if(computerScore === 5)
    {
        rDisplay.textContent = "Computer won!"
        playerScore = 0;
        computerScore = 0;
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
    }

}

//main function for rock paper and scissors
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection)
    {
        return "draw";
    }else if(((playerSelection === "paper") && (computerSelection === "rock")) || ((playerSelection === "scissor") && (computerSelection === "paper")) || ((playerSelection === "rock") && (computerSelection === "scissor"))){
        playerScore++;
        return "playerWin";
    }else{
        computerScore++;
        return "computerWin";
    }
}


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
const playerButtons = document.querySelectorAll('button');

playerButtons.forEach((button) => {
    button.addEventListener('click', () => {
        result = playRound(button.id, computerSelection())
        scoreCheck(result);
    })
})

// rock.addEventListener('click', function(e){
//     result = playRound(e.target.id, computerSelection());

    
// })

// paper.addEventListener('click', function(e){
//     result = playRound(e.target.id, computerSelection());
//     if(result === "playerWin")
//     {
//         const pScore = document.querySelector('.player-score');
//         pScore.textContent = playerScore;
//     }
//     else{
//         const cScore = document.querySelector('.comp-score');
//         cScore.textContent = computerScore;
//     }
// })

// scissor.addEventListener('click', function(e){
//     result = playRound(e.target.id, computerSelection());
//     if(result === "playerWin")
//     {
//         const pScore = document.querySelector('.player-score');
//         pScore.textContent = playerScore;
//     }
//     else{
//         const cScore = document.querySelector('.comp-score');
//         cScore.textContent = computerScore;
//     }
// })

// const player = playerSelection();
// const computer = computerSelection();
// console.log(playRound(player, computer));









