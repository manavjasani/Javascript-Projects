const iFeet = document.getElementById('i-feet');
const iInch = document.getElementById('i-inch');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');


btn.addEventListener('click', () => {
    const feetVal = iFeet.value * 30;
    const inchVal = iInch.value * 2.54;
    const fResult = feetVal + inchVal;
    result.textContent = `${fResult} Cm Height`;
});