const inputText = document.querySelector('.input-text');
const tipInput = document.getElementById('tip-input');
const tipText = document.querySelector('.tip-text');
const container = document.querySelector('.container');


tipInput.addEventListener('change', () => {
    tipText.value = tipInput.value;
    let tip = (tipText.value * inputText.value) / 100;
    let totalBill = +inputText.value + +tip;

    const div = document.createElement('div');
    div.classList.add('result');
    div.innerHTML = `
            <div class="tip-amount">
                <span class="tip-label">Tip amount : </span>
                <span class="f-tip_amount">${tip}</span>
            </div>
            <div class="final-amount">
                <span class="final-label">Total Bill with Tip : </span>
                <span class="final_amount">${totalBill}</span>
            </div>
    `;
    container.appendChild(div);
})