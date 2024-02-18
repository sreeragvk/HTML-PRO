// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function circleFlatten(){
    window.addEventListener("mousemove",function(debts){

    });
}

function firstPageAnim() { 
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10px',
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut
    }) 
    .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: .2
    })
    .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    });
}

function circleMouseFollower() {
    window.addEventListener("mousemove", function(event) {
        var mouseX = event.clientX;
        var mouseY = event.clientY;

        document.querySelector("#minicircle").style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });
}

// Ensure circleMouseFollower() and firstPageAnim() are called after the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    circleMouseFollower();
    firstPageAnim();
});
// scroll.update();
