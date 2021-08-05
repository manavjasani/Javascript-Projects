const arr = ['two words quoteAccept yourself',
    'Act justl',
    'Aim high',
    'Alive & well',
    'Amplify hope',
    'Baby steps',
    'Be awesome',
    'Be colorful',
    'Be fearless',
    'Be honest',
    'Be kind',
    'Be spontaneous',
    'Be still',
    'Be yourself',
    'Beautiful chaos',
    'Breathe deeply',
    'But why?',
    'Call me',
    'Carpe diem',
    'Cherish today',
    'Chill out',
    'Come back',
    'Crazy beautiful',
    'Dance today',
    'Don’t panic',
    'Don’t stop',
    'Dream big',
    'Dream bird',
    'Enjoy life',
    'Enjoy today'];
    
const randomText = document.querySelector('.random-text');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const randomNum = Math.trunc(Math.random() * arr.length);

    randomText.textContent = arr[randomNum];
})