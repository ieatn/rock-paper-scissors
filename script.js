// every time a button is pressed i want a random animation of fireworks or meme/anime popping up at random areas on the screen
// and a +5 gold animation coin every time you win, -3 if you lose to make people addicted
// maybe a bonus round of mouse dodging very fast bullets coming out of nowhere like undertale every win
// and then when you win game gets harder, there's a countdown and music and flashing lights
// and the picks keep moving around on the screen HAHA, play again button replaces 3 buttons
// and in 2 wins, let user know the buttons get switched 
// in 3 wins, make play again button 3/4 the screen

let picks = document.querySelectorAll('.picks');
let restart = document.querySelector('#restart');
let output = document.querySelector('.output');

let user; 
let comp = {value: ''};
let userInt = 0;
let compInt = 0;

picks.forEach(element => {
    element.addEventListener('click', () => {
        output.textContent = 'clicked'
        user = element.id;
        output.textContent = user;
        if (user == 'rock') {
            userInt = 0;
        } else if (user == 'paper') {
            userInt = 1;
        } else if (user == 'scissors') {
            userInt = 2;
        }
        compInt = compPlay(comp);
        playGame()
    })
});

// using math random, return and set compInt to a random n and set its value to corresponding
function compPlay(s) {
    let r = Math.floor(Math.random()*3); // random n from 1-3, floor to int
    if (r == 0) {
        s.value = "rock"
    } else if (r == 1) {
        s.value = 'paper'
    } else {
        s.value = 'scissors'
    }
    return r; 
}


function playGame() {
    
}


restart.addEventListener('click', () => {
    window.location.reload();
})
