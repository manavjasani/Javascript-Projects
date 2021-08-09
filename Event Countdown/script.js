const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

startBtn.addEventListener('click', () => {
    setInterval(() => {
        timer();    
    }, 1000);
    
})

resetBtn.addEventListener('click', () => {
    hour.value = 0;
    minute.value = 0;
    second.value = 0;
})

function timer() {
    if(second.value != 0) {
        second.value--;
    } else if(minute.value != 0 && second.value == 0) {
        second.value = 59;
        minute.value--;
    } else if(hour.value != 0 && minute.value == 0 && second.value == 0) {
        second.value = minute.value = 59;
        hour.value--;
    }
}
