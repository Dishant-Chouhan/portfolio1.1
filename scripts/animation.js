var tl = gsap.timeline();
tl.from(".part1 h2", {
    scale: 0,
    ease: "elastic.out(1, 0.5)",  // Elastic ease for a bubble-like effect
    opacity: 0,
});

tl.from(".part1 .h1", {
    y: 110,
});
gsap.from("#comment", {
    x: "-200%",
});
gsap.from("#experience", {
    x: "200%",
});
gsap.from(".circle", {
    scale: 0,
    ease: "elastic.out(1, 0.5)",  // Elastic ease for a bubble-like effect
    opacity: 0,
    duration:1
});

gsap.from(".image",{
    scale:0,
    scrollTrigger:{
        trigger: ".image",
        scroller: "body"
    }
})

tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top -2%",
        end: "bottom -100%",
        scrub: 1,
        pin: true
    }
})
tl1.to(".card-container", {
    x: "-550%",
},"a");
tl1.to(".roter", {
    rotate:360,
},"a");
tl1.to(".right-roter", {
    rotate:360,
},"a");