const inputText = document.querySelector('.input-text');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
    const inputTextVal = inputText.value;
    const arr = inputTextVal.split(' ');
    result.innerText = `${arr.length} word in your sentence.`
})