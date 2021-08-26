const addBtn = document.querySelector('.add-btn');
const inputText = document.querySelector('.input-text');
const inputAmount = document.querySelector('.input-amount');
const historyTransaction = document.querySelector('.history-transaction');
const expenseBalance = document.querySelector('.expense-balance');
const incomeBalance = document.querySelector('.income-balance');
const totalBalance = document.querySelector('.total-balance');

let incomeVal = 0;
let expenseVal = 0;
let totalVal = 0;

addBtn.addEventListener('click', () => {
    const inputTextVal = inputText.value;
    const inputAmountVal = inputAmount.value;

    const div = document.createElement('div');
    div.innerHTML = `
        <div class="transaction">
            <h2>${inputTextVal}</h2>
            <span>${inputAmountVal}</span>
            <button class="close-btn">X</button>
        </div>
    `;

    const closeBtn = div.querySelector('.close-btn');
    closeBtn.addEventListener('click', (e) => {
        const targetVal = e.target.parentElement;
        div.remove(targetVal);
    })

    if (inputAmountVal > 0) {
        div.classList.add('in-border');
        incomeVal += +inputAmountVal;
        incomeBalance.textContent = `$${incomeVal}`;
    } else if (inputAmountVal < 0) {
        div.classList.add('ex-border');
        expenseVal += +inputAmountVal;
        expenseBalance.textContent = `$${expenseVal}`;
    }

    historyTransaction.appendChild(div);

    totalVal += +inputAmountVal;
    totalBalance.textContent = totalVal;

    inputText.value = '';
    inputAmount.value = '';
})