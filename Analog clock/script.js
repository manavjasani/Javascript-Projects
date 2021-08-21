const hour = document.querySelector('.hand-hour');
const minute = document.querySelector('.hand-minute');
const second = document.querySelector('.hand-seconds');

function getTime() {

    const date = new Date();

    const secondVal = date.getSeconds();
    const secondDeg = ((( secondVal / 60 ) * 360) + 90);
    console.log(secondDeg);
    second.style.transform = `rotate(${secondDeg}deg)`;

    const minuteVal = date.getMinutes();
    const minuteDeg = (( minuteVal / 60 ) * 360 ) + 90;
    minute.style.transform = `rotate(${minuteDeg}deg)`;

    const hourVal = date.getHours();
    const hourDeg = (( hourVal / 60 ) * 360 ) + 90;
    hour.style.transform = `rotate(${hourDeg}deg)`;

}

setInterval(getTime, 1000);
