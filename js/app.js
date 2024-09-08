// Setup Animation
function effectX(obj, translatePX, duration) {
    anime({
        targets: obj,
        translateX: [-translatePX, 0],
        easing: 'easeInQuad',
        duration: duration,
        opacity: [0, 1]
      });
}

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
        duration: duration,
        opacity: [0, 1],
        ease: "easeInQuad"
    });
}

// Fade Main Title
FadeIn("#head-intro", 2000);

// Slide Up Effect
SlideUp("#head-img", 4000);

effectX("#app-left", 50, 1600);
effectX("#app-right", -50, 1600);

SlideUp(".stack", 2000);

// Fade carousel
FadeIn('.carousel', 3000);

// Carousel Handling
(function() {
    // loops: how many times the carousel will be duplicated
    const CAROUSEL_LOOPS = 5;

    const carouselTop = document.querySelector(".carousel");
    const carouselBottom = document.querySelector(".carousel-2")

    const carouselTopInner = document.querySelector('.carousel-inner');
    const carouselBottomInner = document.querySelector('.carousel-inner-2');

    // Duplicate top carousel
    for (let i = 0; i < CAROUSEL_LOOPS; i++) {
        const clone = carouselTopInner.cloneNode(true);
        carouselTop.appendChild(clone);
    }

    // Append bottom carousel with top carousel
    while (carouselTopInner.lastChild) {
        carouselBottomInner.appendChild(carouselTopInner.lastChild);
    }

    // Duplicate bottom carousel
    for (let i = 0; i < 3; i++) {
        const reclone = carouselBottomInner.cloneNode(true);
        carouselBottom.appendChild(reclone);
    }
}) ();