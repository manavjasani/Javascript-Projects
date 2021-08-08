const height = document.getElementById('height');
const weight = document.getElementById('weight');
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
    const bmi = calcBmi(weight.value, height.value).toFixed(2);

    if(bmi < 18.5) {
        result.innerHTML = `Your BMI is ${bmi}. Category : Underweight`;
    } else if(bmi > 18.5 && bmi < 24.5) {
        result.innerHTML = `Your BMI is ${bmi}. Category : Normal weight`;
    } else if(bmi > 18.5 && bmi < 29.5) {
        result.innerHTML = `Your BMI is ${bmi}. Category : Overweight`;
    } else {
        result.innerHTML = `Your BMI is ${bmi}. Category : Obesity`;
    }
})

function calcBmi(weight, height) {
    return (weight / ((height / 100) * (height / 100)));
}