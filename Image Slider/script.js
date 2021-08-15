const frontImg = document.querySelector('.front-img');
const imgs = document.querySelectorAll('.imgs');

imgs.forEach (img => img.addEventListener('mouseenter', () => {
    img.style.opacity = 0.5;
    frontImg.src = img.src;
}))

imgs.forEach (img => img.addEventListener('mouseleave', () => {
    img.style.opacity = 1;
}))