const addList = document.querySelector('.add-list');
const container = document.querySelector('.container');
let draggablePro = null;


addList.addEventListener('click', () => {
    const div = document.createElement('div');
    div.classList.add('list-title');
    div.innerHTML = `
        <input type="text" class="title-text" placeholder="List name">
        <button class="title-btn">✓</button>
    `;
    container.prepend(div);

    const titleText = div.querySelector('.title-text');
    const titleBtn = div.querySelector('.title-btn');
    titleBtn.addEventListener('click', () => {
        if(titleText.value == "") {
            alert('Please enter valid text');
        } else {
            const card = document.createElement('div');
            card.classList.add('card-list');
            card.innerHTML = `
                <h3>${titleText.value}</h3>
                <div class="card-name"></div>
                <div class="list-card hidden">
                    <input type="text" class="list-title-text" placeholder="Card name">
                    <button class="card-btn">✓</button>
                </div>  
                <button class="add-card">+ Add card</button>
            `;
            div.classList.add('hidden');
            container.prepend(card);

            const cardBtn = card.querySelector('.card-btn');
            const listCard = card.querySelector('.list-card');
            const listTitleText = card.querySelector('.list-title-text');
            const addCard = card.querySelector('.add-card');
            const cardName = card.querySelector('.card-name');

            
            addCard.addEventListener('click', () => {
                listCard.classList.remove('hidden');
                addCard.classList.add('hidden');
            });
            cardBtn.addEventListener('click', () => {
                const content = document.createElement('div');
                content.classList.add('content-class');
                content.innerHTML = `
                    <div draggable="true">${listTitleText.value}</div>
                `;
                cardName.appendChild(content);
                listTitleText.value = '';

                const contentClass = document.querySelectorAll('.content-class');
                contentClass.forEach(content => {
                    content.addEventListener('dragstart', dragStart);
                    content.addEventListener('dragend', dragEnd);
                });
            
            });
            const cardNameCo = document.querySelectorAll('.card-name');
            cardNameCo.forEach(card => {
                card.addEventListener('dragenter', dragEnter);
                card.addEventListener('dragover', dragOver);
                card.addEventListener('dragleave', dragLeave);
                card.addEventListener('drop', drop);
            });
        }
    });
    
});
function dragStart() {
    draggablePro = this;
    console.log('dragstart');
}
function dragEnd() {
    draggablePro = null;
    console.log('dragend');
}

function dragEnter() {
    console.log(this);
}
function dragOver(e) {
    e.preventDefault();
    console.log('dragover');
}
function dragLeave(e) {
    console.log('leave', e);
}
function drop() {
    this.prepend(draggablePro);
}
