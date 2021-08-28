const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
const cWord = document.querySelectorAll('.c-word');

btn.addEventListener('click', () => {
    container.classList.toggle('toggle-cont');
    container.style.transition = 'all 0.3s ease-in';

    cWord.forEach(word => {
        word.classList.toggle('toggle-word');
    })

})