// every time a button is pressed i want a random animation of fireworks or meme/anime popping up at random areas on the screen
// and a +5 gold animation coin every time you win, -3 if you lose to make people addicted
// maybe a bonus round of mouse dodging very fast bullets coming out of nowhere like undertale every win
// and then when you win game gets harder, there's a countdown and music and flashing lights
// and the picks keep moving around on the screen HAHA, play again button replaces 3 buttons
// and in 2 wins, let player know the buttons get switched 
// in 3 wins, make play again button 3/4 the screen

let picks = document.querySelectorAll('.picks');
let restart = document.querySelector('#restart');
const output = document.querySelector('.output');
let score = document.querySelector('.score');

let player; 
let comp = {value: ''};
let playerInt = 0;
let compInt = 0;
let playerScore = 0;
let compScore = 0;

output.textContent = "Choose Rock, Paper, or Scissors";

picks.forEach(element => {
    element.addEventListener('click', () => {
        player = element.id;
        if (player == 'rock') {
            playerInt = 0;
        } else if (player == 'paper') {
            playerInt = 1;
        } else if (player == 'scissors') {
            playerInt = 2;
        }
        compInt = compPlay(comp);
        playGame()
    })
});

// using math random, return and set compInt to a random n and set its value to corresponding
function compPlay(computerChoice) {
    let n = Math.floor(Math.random()*3); // random n from 1-3, floor to int
    if (n == 0) {
        computerChoice.Value = "rock"
    } else if (n == 1) {
        computerChoice.Value = "paper"
    } else {
        computerChoice.Value = "scissors"
    }
    return n; 
}

function playGame() {
    playRound();
    if (playerScore == 5) {
        output.textContent = "You Won the Game! Congrats";
        playerScore = 0;
        compScore = 0;
    } else if (compScore == 5) {
        output.textContent = "You LOST TO A BOT HAHA🤣 Get out of here find something else to do"
        playerScore = 0;
        compScore = 0;
    }
}

function playRound() {
    let win_arr =   [[0, 2, 1],
                    [1, 0, 2],
                    [2, 1, 0]];
    let result = win_arr[playerInt][compInt];
    if (result == 0) {
        output.textContent = `Its a tie! You chose ${player} and The computer chose ${comp.Value}`;
        score.textContent = `${playerScore} : ${compScore}`
    } else if (result == 1) {
        output.textContent = `You won! You chose ${player} and The computer chose ${comp.Value}`;
        playerScore++;
        score.textContent = `${playerScore} : ${compScore}`
    } else if (result == 2) {
        output.textContent = `You lost! You chose ${player} and The computer chose ${comp.Value}`;
        compScore++;
        score.textContent = `${playerScore} : ${compScore}`
    }
}


restart.addEventListener('click', () => {
    window.location.reload();
})
