const API_URL = 'https://api.github.com/users/';

const search = document.getElementById('search');
const subBtn = document.querySelector('.sub-btn');
const container = document.querySelector('.container');

subBtn.addEventListener('click', () => {
    fetch(API_URL + search.value).then(res => res.json()).then(data => {
        console.log(data);
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
                <div class="image">
                    <img src="${data.avatar_url}" >
                </div>
                <div class="pro-data">
                    <h2>${data.name}</h3>
                    <p class="pro-bio">${data.bio}</p>
                    <div class="pro-ana">
                        <p><span>${data.followers}</span>Followers</p>
                        <p><span>${data.following}</span>Following</p>
                        <p><span>${data.public_repos}</span>Repo</p>
                    </div>
                    <button class="clear">Clear</button>
                </div>
        `;
        const clear = card.querySelector('.clear');
        clear.addEventListener('click', () => {
            card.remove();
        })
        container.appendChild(card);
        search.value = "";
    });
})