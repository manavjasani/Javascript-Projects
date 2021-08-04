const square = document.querySelector(".square");
const button = document.querySelector(".btn");

const arr = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'violet', 'grey'];

button.addEventListener('click', () => {
    const randomNum = Math.trunc(Math.random() * arr.length);
    square.style.backgroundColor = arr[randomNum];
})






