// Setup Animation
function FadeIn(obj, duration) {
    anime({
        targets: obj,
        opacity: [0, 1],
        duration: duration,
        easing: 'linear',
    })
}

function SlideUp(obj, duration) {
    anime({
        targets: obj,
        translateY: [80, 0],
        delay: 0,
        duration: duration,
        //opacity: [0, 1],
        ease: "linear"
    });
}

SlideUp(".intro-page", 2000);

(function() {
    // How many times the carousel will be duplicated
    const CAROUSEL_LOOPS = 3;

    const carouselTopInner = document.querySelector('.carousel-inner');
    const carouselTop = document.querySelector(".carousel");

    for (let i = 0; i < CAROUSEL_LOOPS; i++) {
        const clone = carouselTopInner.cloneNode(true);
        carouselTop.appendChild(clone);
    }
}) ();