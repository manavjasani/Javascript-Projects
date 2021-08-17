const input = document.querySelector('.input');
const btn = document.querySelectorAll('.btn');
const eq = document.querySelector('.eq');


btn.forEach(x => x.addEventListener('click', () => {
    if(x.value == '=') {
        if(!input.value) {
            alert('Please enter such valid numbers');
        }
        input.value = eval(input.value);
    } else if(x.value == 'allc'){
        input.value = "";
    } else if(x.value == 'clear') {
        input.value = input.value.slice(0, -1);
    } else {
        input.value += x.value;
    } 
}))
