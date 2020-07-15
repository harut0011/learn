document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.slider-container');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevBtn = document.querySelector('.slider-button-prev');
    const nextBtn = document.querySelector('.slider-button-next');
    console.log(sliderItems[0].offsetWidth)
    console.log(sliderItems[0])
    let translate = 0

    nextBtn.addEventListener('click', () => {
        if (translate < -sliderItems[0].offsetWidth * sliderItems.length) {
            translate = 0
        }
        translate = translate - sliderItems[0].offsetWidth;
        container.style.left = `${translate}px`;

    })
    prevBtn.addEventListener('click', () => {
        translate = translate + sliderItems[0].offsetWidth;
        container.style.left = `${translate}px`;
    })
})