const minBtn = document.querySelector('.min-btn');
const addBtn = document.querySelector('.add-btn');
const resetBtn = document.querySelector('.reset-btn');
let count = document.querySelector('.count');

let num = 0;

minBtn.addEventListener('click', () => {
    count.textContent = --num;
})

addBtn.addEventListener('click', () => {
    count.textContent = ++num;
})

resetBtn.addEventListener('click', () => {
    count.textContent = 0;
    num = 0;
})
