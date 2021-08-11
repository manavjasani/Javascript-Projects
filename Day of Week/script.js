const day = document.querySelector('.day');


function findDay() {
    const dayV = new Date().getDay();
    if (dayV == 0) {
        day.textContent = `Sunday It's Weekend`;
    } else if (dayV == 1) {
        day.textContent = `Monday 5 More days to the Weekend`;
    } else if( dayV == 2) {
        day.textContent = `Tuesday 4 More days to the Weekend`;
    } else if (dayV == 3) {
        day.textContent = `Wednesday 3 More days to the Weekend`;
    } else if(dayV == 4) {
        day.textContent = `Thursday 2 More days to the Weekend`;
    } else if(dayV == 5) {
        day.textContent = `Friday 1 More days to the Weekend`;
    } else if(dayV == 6) {
        day.textContent = `Saturday 5 More days to the Weekend`;
    }
}

window.addEventListener('load', findDay);