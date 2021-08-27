const divC = document.querySelectorAll('.divc');
const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');
const div3 = document.querySelector('.div3');
const div4 = document.querySelector('.div4');
const div5 = document.querySelector('.div5');
const div6 = document.querySelector('.div6');
const div7 = document.querySelector('.div7');
const div8 = document.querySelector('.div8');
const div9 = document.querySelector('.div9');
let counter = 1;

divC.forEach(el => el.addEventListener('click', function() {
    el.classList.add('divp');

        if (counter <= 9){
            if(counter % 2 != 1) {
                el.textContent = 'X';
            } else {
                el.textContent = 'O';
            }
            
            if(winner()) {
                setTimeout(() => {
                    alert ('you are winner');
                    reset();
                }, 500);
            }
        } else {
            setTimeout(() => {
                alert ('match draw');
                reset();
            }, 500);
        }
        counter++;
    
    
}, false));

function reset() {
    divC.forEach(el => el.innerHTML = "");
    counter = 1;
}

function winner() {
    if(getData(div1, div2, div3) || getData(div1, div4, div7) || getData(div1, div5, div9) || getData(div3, div5, div7) ||
        getData(div3, div6, div9) || getData(div7, div8, div9) ||
        getData(div2, div5, div8) || getData(div4, div5, div6))
        return true;
}

function getData(a, b, c) {
    return (a.innerHTML !== '' && b.innerHTML !== '' && c.innerHTML !== '' && a.innerHTML == b.innerHTML 
            && b.innerHTML == c.innerHTML);
}