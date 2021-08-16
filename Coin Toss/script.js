const plSel = document.querySelector('.pl-sel');
const coSel = document.querySelector('.co-sel');
const message = document.querySelector('.message');
const tossImg = document.querySelector('.toss-img');
const plCou = document.querySelector('.pl-cou');
const coCou = document.querySelector('.co-cou');
const headBtn = document.querySelector('.head-btn');
const tailBtn = document.querySelector('.tail-btn');
const btns = document.querySelectorAll('.btns');


// let heads = 1;
// let tails = 0;
let userScore = 0;
let computerScore = 0;

//add an event listener to the buttons
btns.forEach(function(button){
    button.addEventListener('click', function(e){
        const random = Math.round(Math.random()) + 1;
        const computerPick = Math.round(Math.random()) + 1;
        
        let computerSelection;
        computerPick === 1 ? computerSelection = 'heads' : computerSelection = 'tails'
        
        const userSelection = e.target.id;
        let userPick;

        userSelection === 'heads' ? userPick = 1 : userPick = 2;

        plSel.innerHTML = `${userSelection}`;
        coSel.innerHTML = `${computerSelection}`;
        tossImg.src = `./img/coin${random == 1 ? 1 : 2}.png`;

        if (userPick === random){
            userScore++;
        }
        if (computerPick === random){
            computerScore++;
        }

        plCou.textContent = `${userScore}`;
        coCou.textContent = `${computerScore}`;

        if (userScore === 5 && computerScore === 5){
            init();
            message.innerHTML = `<h1>It's a Tie</h1>`;
        } else if (userScore === 5){
            init();
            message.innerHTML = `<h1>You Win!!!</h1>`;
        } else if (computerScore === 5){
            init();
            message.innerHTML = `<h1>Computer Wins!!!</h1>`;
        }
    })
})

function init() {
        plCou.textContent = '';
        coCou.textContent = '';
        userScore = 0;
        computerScore = 0;
        plSel.innerHTML = '';
        coSel.innerHTML = '';
}