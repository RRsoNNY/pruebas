const slides = document.querySelectorAll('.slideactive');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
}

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        updateDots();
    });
});

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}