let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideShow = () => {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
    slideIndex = (slideIndex + 1) % slides.length;
};

setInterval(slideShow, 3000); 