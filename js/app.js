// Setup Animation
function effectX(obj, translatePX, delay) {
    anime({
        targets: obj,
        translateX: [-translatePX, 0],
        easing: 'easeInQuad',
        duration: delay,
        opacity: [0, 1]
      });
}

effectX("#app-left", 50, 1600);
effectX("#app-right", -50, 1600);

function FadeIn(obj, delay) {
    anime({
        targets: obj,
        opacity: [0, 1],
        duration: delay,
        easing: 'easeOutExpo',
    })
}

// Fade Main Title
let headtitle = document.getElementsByClassName("main");

FadeIn(headtitle, 2000)

// Slide Up Effect
let imgflex = document.getElementsByClassName("imgflex");

anime({
    targets: imgflex,
    translateY: [80, 0],
    duration: 4000,
    opacity: [0, 1],
    ease: "easeInQuad"
});
