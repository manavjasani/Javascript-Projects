const inputText = document.querySelector('.input-text');
const searchBtn = document.querySelector('.search-btn');
const findBtn = document.querySelectorAll('.find-btn');
const products = document.querySelectorAll('.product');

searchBtn.addEventListener('click', () => {
    const inputValue = inputText.value.toLowerCase();
    inputText.value = "";
    products.forEach(product => {
        if (product.id.indexOf(inputValue) > -1) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    })
})

findBtn.forEach (btn => btn.addEventListener('click', (e) => {

    const btnValue = e.target.innerText.toLowerCase();

    findBtn.forEach (btn => btn.classList.remove('active'));

    products.forEach(product => {

        if (btnValue == 'all'){
            product.style.display = "";
            btn.classList.add('active');
        } else if (product.id != btnValue) {
            product.style.display = 'none';
        } else {
            product.style.display = "";
            btn.classList.add('active');
        }
    })
}))