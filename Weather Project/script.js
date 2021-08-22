const result = document.querySelector('.result');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

const apiKey = '3ceee8e7b482f1c6cc343598afb32499';

btn.addEventListener('click', () => {
    const inputVal = input.value;
    const weatherData = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}`)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            const { name } = data;
                            const { feels_like } = data.main;
                            const { temp_min } = data.main;
                            const { temp_max } = data.main;
                            const { main } = data.weather[0];

                            const div = document.createElement('div');
                            div.innerHTML = `
                                <h2 class="city">City Name : <span class="result-num">${name}</span></h2>
                                <h3 class="temp">Min-Temprature : <span class="result-num">${temp_min}</span></h3>
                                <h3 class="temp">Temprature : <span class="result-num">${feels_like}</span></h3>
                                <h3 class="temp">Max-Temprature : <span class="result-num">${temp_max}</span></h3>
                                <h3 class="temp">Weather : <span class="result-num">${main}</span></h3>
                                <button class="btn-reset">Reset</button>
                            `;
                            const btnReset = div.querySelector('.btn-reset');
                            const city = div.querySelector('.city');
                            const temp = div.querySelectorAll('.temp');
                            btnReset.addEventListener('click', () => {
                                temp.forEach(x => x.innerHTML = "");
                                city.innerHTML = '';
                                div.removeChild(btnReset);
                            })

                            result.prepend(div);
                        });
                        input.value = '';
})
