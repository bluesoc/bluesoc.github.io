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
        ease: "linear"
    });
}

SlideUp(".intro-page", 4000);

FadeIn("header", 1000);

// Fade carousel
// FadeIn('.carousel', 3000);

SlideUp(".stack", 2000);

(function() {
    const contact = document.querySelector(".profile-buttons").cloneNode(true);
    document.querySelector("#contact-btn").appendChild(contact);

    // loops: how many times the carousel will be duplicated
    const CAROUSEL_LOOPS = 2;

    const carouselTopInner = document.querySelector('.carousel-inner');
    const carouselTop = document.querySelector(".carousel");

    for (let i = 0; i < CAROUSEL_LOOPS; i++) {
        const clone = carouselTopInner.cloneNode(true);
        carouselTop.appendChild(clone);
    }
}) ();
