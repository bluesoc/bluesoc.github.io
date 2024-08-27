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
function FadeIn(obj, delay) {
    anime({
        targets: obj,
        opacity: [0, 1],
        duration: delay,
        easing: 'easeOutExpo',
    })
}
function SlideUp(obj, delay) {
    anime({
        targets: obj,
        translateY: [80, 0],
        duration: delay,
        opacity: [0, 1],
        ease: "easeInQuad"
    });
}
effectX("#app-left", 50, 1600);
effectX("#app-right", -50, 1600);

// Fade Main Title
let headtitle = document.getElementById("head-intro");

// Slide Up Effect
let imghead = document.getElementById("head-img");

FadeIn(headtitle, 2000)
SlideUp(imghead, 4000);

SlideUp(".stack", 2000);