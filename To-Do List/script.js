const input = document.querySelector('.input');
const submitBtn = document.querySelector('.submit-btn');
const result = document.querySelector('.result');

submitBtn.addEventListener('click', () => {
    const inputVal = input.value;

    if (inputVal != '') {
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="list-item">
                <h2>${inputVal}</h2>
                <button class="close-btn">X</button>
            </div> 
        `;

        input.value = '';

        const closeBtn = div.querySelector('.close-btn');
        closeBtn.addEventListener('click', (e) => {
            const el = e.target.parentElement;
            div.remove(el);
        })

        result.appendChild(div);

    } else {
        return '';
    }
    
})