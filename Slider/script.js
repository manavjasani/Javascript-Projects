const cont1 = document.querySelector('.cont1');
const img = document.querySelectorAll('.img');
const prevC = document.querySelector('.prev-c');
const nextC = document.querySelector('.next-c');

const cont2 = document.querySelector('.cont2');
const img1 = document.querySelectorAll('.img1');
const prevZ = document.querySelector('.prev-z');
const nextZ = document.querySelector('.next-z');

const image = document.querySelectorAll('.image');


class slider {
    counter = 1;
    size = img[0].clientWidth;

    nextBtn(next, cont) {
        next.addEventListener('click', () => {
            this.counter < img.length - 1 ? this.counter++ : this.counter = 0;
            cont.style.transform = `translateX(${-this.size * this.counter}px)`;
        });
    }
    prevBtn(prev, cont) {
        prev.addEventListener('click', () => {
            this.counter != 0 ? this.counter-- : this.counter = img.length - 1;
            cont.style.transform = `translateX(${-this.size * this.counter}px)`;
        });
    }
}

function loadImg() {
    let i = 1;
    image.forEach(imgX => {
        setInterval(() => { 
            i < 5 ? imgX.src = `./imgs/pic${i}.jpg` :  i = 0;
            i++;
        }, 2000)
    });
};
loadImg();

const slider1 = new slider();
slider1.nextBtn(nextC, cont1);
slider1.prevBtn(prevC, cont1);

const slider2 = new slider();
slider2.nextBtn(nextZ, cont2);
slider2.prevBtn(prevZ, cont2);
