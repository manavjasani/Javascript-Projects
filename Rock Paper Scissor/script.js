const playerGuess = document.querySelector('.player-guess');
const computerGuess = document.querySelector('.computer-guess');
const message = document.querySelector('.message');
const btn = document.querySelectorAll('.btn');
const startBtn = document.querySelector('.start-btn');


const arr = ['Rock', 'Paper', 'Scissor'];
let randomNum = Math.trunc(Math.random() * 3);

btn.forEach(x => x.addEventListener('click', (e) => {
    const playId =  e.target.id;
    playerGuess.textContent = `${playId}`;
    computerGuess.textContent = `${arr[randomNum]}`;

    if(playId == "Rock") {
        if(randomNum == 0) {
            message.textContent = "Match Tie";
        } else if (randomNum == 1) {
            message.textContent = "Computer Win !";
        } else {
            message.textContent = "You Win !";
        }
    }
    if(playId == "Paper") {
        if(randomNum == 0) {
            message.textContent = "You Win !";
        } else if (randomNum == 1) {
            message.textContent = "Match Tie";
        } else {
            message.textContent = "Computer Win !";
        }
    }
    if(playId == "Scissor") {
        if(randomNum == 0) {
            message.textContent = "Computer Win !";
        } else if (randomNum == 1) {
            message.textContent = "You Win !";
        } else {
            message.textContent = "Match Tie";
        }
    }
}))

startBtn.addEventListener('click', () => {
    message.textContent = "";
    playerGuess.textContent = "";
    computerGuess.textContent = "";
    randomNum = Math.trunc(Math.random() * 3);
})