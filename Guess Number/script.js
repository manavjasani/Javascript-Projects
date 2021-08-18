const inputText = document.querySelector('.input-text');
const btn = document.querySelector('.btn');
const prevVal = document.querySelector('.prev-val');
const guessVal = document.querySelector('.guess-val');
const valueMes = document.querySelector('.value-mes');
const winMes = document.querySelector('.win-mes');

let guessNum = 9;

const randomNum = Math.trunc(Math.random() * 100) + 1;
console.log(randomNum);

btn.addEventListener('click', () => {
    if (guessNum >= 0) {
        const div = document.createElement('span');
        div.classList.add('newDiv');
        div.innerHTML = `${inputText.value}`;
        prevVal.prepend(div);

        if (inputText.value > randomNum) {
            valueMes.textContent = `Too High ! Try Again !`;
            guessVal.textContent = guessNum--;
            inputText.value = "";
        } else if (inputText.value < randomNum) {
            valueMes.textContent = `Too Low ! Try Again !`;
            guessVal.textContent = guessNum--;
            inputText.value = "";
        } else if (inputText.value == randomNum) {
            valueMes.textContent = `You Winner`;
            winMes.classList.toggle('hide');
            inputText.value = "";
        }
    } else return;
})

winMes.addEventListener('click', () => {
    valueMes.textContent = '';
    prevVal.textContent = '';
    guessNum = 9;
    guessVal.textContent = 10;
    winMes.classList.add('hide');
})