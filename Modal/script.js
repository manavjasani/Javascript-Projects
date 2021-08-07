const openBtn = document.querySelector('.open-btn');
const container = document.querySelector('.container');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');

function toggleClass() {
    openBtn.classList.toggle('hide');
    container.classList.toggle('hide');
    overlay.classList.toggle('hide');
}

openBtn.addEventListener('click', toggleClass)

closeBtn.addEventListener('click', toggleClass)

overlay.addEventListener('click', toggleClass)