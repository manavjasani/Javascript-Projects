const lastName = document.querySelector('.last-name');
const firstName = document.querySelector('.first-name');
const email = document.querySelector('.email');
const address = document.querySelector('.address');
const address1 = document.querySelector('.address1');
const password = document.querySelector('.password');
const password1 = document.querySelector('.password1');
const btn = document.querySelector('.btn');
const newsletter = document.getElementById('newsletter');
const textarea1 = document.getElementById('textarea1');
const txtCl = document.querySelectorAll('.txtCl');


btn.addEventListener('click', () => {
    
    // lastname validation
    if(!lastName.value) alert(`Please enter valid text in lastname`);

    // firstname validation
    if(!firstName.value) alert(`Please enter valid text in firstname`);

    // email validation
    const x = email.value;
    const atPosition = x.indexOf('@');
    const atDot = x.indexOf('.');

    if(atPosition < 2 || atPosition + 2 > atDot || atDot + 2 > x.length) alert('Please enter valid emailid');

    // address validation
    if(!address.value) alert('please enter valid address');

    // address1 validation
    if(!address1.value) alert('Only numbers are valid in address');

    // password validation
    const pass = password.value;
    const pass1 = password1.value;
    if(pass !== pass1) alert('Enter the same password as you type before');

    // textarea1 validation
    if(!textarea1.value) alert('Please enter valid text in textarea');

    txtCl.forEach(text => text.value = "");
    alert(`You submitted successfully !`);
});