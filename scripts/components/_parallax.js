// Init ScrollMagic controller
var controller = new ScrollMagic.Controller();

// Section 01a
// // Parallax scene for the text card
new ScrollMagic.Scene({
    triggerElement: "#section1a",
    triggerHook: 0,
    duration: "150%",
    offset: -150,
})
    .setTween(gsap.fromTo(".text-card.one-a", { y: "0%" }, { y: "60%", ease: "power2.inOut" }))
    .addTo(controller);

// Parallax scene for the visual elements
new ScrollMagic.Scene({
    triggerElement: "#section1a",
    triggerHook: 0,
    duration: "110%",
    offset: 150,
})
    .setTween(gsap.fromTo(".visual.one-a", { y: "0%" }, { y: "20%", ease: "power1.inOut" }))
    .addTo(controller);

// Section 01b
// Parallax scene for the text card
new ScrollMagic.Scene({
    triggerElement: "#section1b",
    triggerHook: 0,
    duration: "150%",
})
    .setTween(gsap.fromTo(".text-card.one-b", { y: "0%" }, { y: "40%", ease: "power2.inOut" }))
    .addTo(controller);

// Parallax scene for the visual elements
new ScrollMagic.Scene({
    triggerElement: "#section1b",
    triggerHook: 0,
    duration: "110%",
})
    .setTween(gsap.fromTo(".visual.one-b", { y: "0%" }, { y: "20%", ease: "power1.inOut" }))
    .addTo(controller);

// Section 02a
// Parallax scene for the text card
new ScrollMagic.Scene({
    triggerElement: "#section2a",
    triggerHook: 0,
    duration: "150%",
})
    .setTween(gsap.fromTo(".text-card.two-a", { y: "0%" }, { y: "0%", ease: "power2.inOut" }))
    .addTo(controller);

// Parallax scene for the visual elements
new ScrollMagic.Scene({
    triggerElement: "#section2a",
    triggerHook: 0,
    duration: "110%",
    offset: -500,
})
    .setTween(gsap.fromTo(".overlay.two-b", { y: "0%" }, { y: "50%", ease: "power1.inOut" }))
    .addTo(controller);

// Parallax scene for the visual elements
new ScrollMagic.Scene({
    triggerElement: "#section2a",
    triggerHook: 0,
    duration: "110%",
    offset: -500,
})
    .setTween(gsap.fromTo(".overlay.two-c", { y: "0%" }, { y: "-30%", ease: "power1.inOut" }))
    .addTo(controller);

// Section 03

new ScrollMagic.Scene({
    triggerElement: "#section3a",
    triggerHook: 0,
    duration: "110%",
    offset: -400,
})
    .setTween(gsap.fromTo(".visual.three-a", { y: "10%" }, { y: "-20%", ease: "power1.inOut" }))
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section3b",
    triggerHook: 0,
    duration: "110%",
    offset: -400,
})
    .setTween(gsap.fromTo(".visual.three-b", { y: "-20%" }, { y: "10%", ease: "power1.inOut" }))
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section3c",
    triggerHook: 0,
    duration: "110%",
    offset: -400,
})
    .setTween(gsap.fromTo(".visual.three-c", { y: "10%" }, { y: "-20%", ease: "power1.inOut" }))
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section3d",
    triggerHook: 0,
    duration: "110%",
    offset: -400,
})
    .setTween(gsap.fromTo(".visual.three-d", { y: "-20%" }, { y: "10%", ease: "power1.inOut" }))
    .addTo(controller);

// Section 04a
// Parallax scene for the visual elements
new ScrollMagic.Scene({
    triggerElement: "#section4a",
    triggerHook: 0,
    duration: "110%",
    offset: -750,
})
    .setTween(gsap.fromTo(".visual.four-a", { y: "10%" }, { y: "-10%", ease: "power1.inOut" }))
    .addTo(controller);

// Parallax scene for the visual elements
new ScrollMagic.Scene({
    triggerElement: "#section4b",
    triggerHook: 0,
    duration: "110%",
    offset: -750,
})
    .setTween(gsap.fromTo(".visual.four-b", { y: "0%" }, { y: "20%", ease: "power1.inOut" }))
    .addTo(controller);

// Parallax scene for the visual elements
new ScrollMagic.Scene({
    triggerElement: "#section4b",
    triggerHook: 0,
    duration: "110%",
    offset: -500,
})
    .setTween(gsap.fromTo(".visual.four-e", { y: "-30%" }, { y: "0", ease: "power1.inOut" }))
    .addTo(controller);

// Parallax scene for the visual elements
new ScrollMagic.Scene({
    triggerElement: "#section4c",
    triggerHook: 0,
    duration: "110%",
    offset: -750,
})
    .setTween(gsap.fromTo(".overlay.four-c", { y: "0%" }, { y: "40%", ease: "power1.inOut" }))
    .addTo(controller);

// Parallax scene for the visual elements
new ScrollMagic.Scene({
    triggerElement: "#section4c",
    triggerHook: 0,
    duration: "110%",
    offset: -750,
})
    .setTween(gsap.fromTo(".overlay.four-d", { y: "0%" }, { y: "20%", ease: "power1.inOut" }))
    .addTo(controller);

// Section 05a

new ScrollMagic.Scene({
    triggerElement: "#section5a",
    triggerHook: 0,
    duration: "110%",
    offset: -750,
})
    .setTween(gsap.fromTo(".visual.five-a", { y: "0%" }, { y: "-20%", ease: "power1.inOut" }))
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section5b",
    triggerHook: 0,
    duration: "110%",
    offset: -750,
})
    .setTween(gsap.fromTo(".visual.five-b", { y: "0%" }, { y: "20%", ease: "power1.inOut" }))
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section5b",
    triggerHook: 0,
    duration: "110%",
    offset: -200,
})
    .setTween(gsap.fromTo(".visual.five-c", { y: "30%" }, { y: "-10%", ease: "power2.inOut" }))
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#swamp-bg",
    triggerHook: 0,
    duration: "110%",
    offset: -750,
})
    .setTween(gsap.fromTo(".overlay.five-d", { y: "0%" }, { y: "-20%", ease: "power2.inOut" }))
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#swamp-bg",
    triggerHook: 0,
    duration: "110%",
    offset: -750,
})
    .setTween(gsap.fromTo(".overlay.five-e", { y: "0%" }, { y: "100%", ease: "power2.inOut" }))
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section5d",
    triggerHook: 0,
    duration: "110%",
    offset: 0,
})
    .setTween(gsap.fromTo(".visual.five-f", { y: "10%" }, { y: "-20%", ease: "power2.inOut" }))
    .addTo(controller);

// Section 07

new ScrollMagic.Scene({
    triggerElement: "#section7a",
    triggerHook: 0,
    duration: "110%",
    offset: -400,
})
    .setTween(gsap.fromTo(".visual.seven-a", { y: "-20%" }, { y: "20%", ease: "power1.inOut" }))
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section7b",
    triggerHook: 0,
    duration: "110%",
    offset: -750,
})
    .setTween(gsap.fromTo(".visual.seven-b", { y: "-10%" }, { y: "30%", ease: "power1.inOut" }))
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section7c",
    triggerHook: 0,
    duration: "110%",
    offset: -750,
})
    .setTween(gsap.fromTo(".visual.seven-c", { y: "10%" }, { y: "-40%", ease: "power1.inOut" }))
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section7d",
    triggerHook: 0,
    duration: "110%",
    offset: -750,
})
    .setTween(gsap.fromTo(".visual.seven-d", { y: "-40%" }, { y: "10%", ease: "power1.inOut" }))
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section7e",
    triggerHook: 0,
    duration: "110%",
    offset: -750,
})
    .setTween(gsap.fromTo(".visual.seven-e", { y: "10%" }, { y: "-20%", ease: "power1.inOut" }))
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section7e",
    triggerHook: 0,
    duration: "110%",
    offset: -750,
})
    .setTween(gsap.fromTo(".visual.seven-f", { y: "-10%" }, { y: "30%", ease: "power1.inOut" }))
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section7g",
    triggerHook: 0,
    duration: "110%",
    offset: -750,
})
    .setTween(gsap.fromTo(".visual.seven-g", { y: "-50%" }, { y: "0", ease: "power1.inOut" }))
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#section7h",
    triggerHook: 0,
    duration: "110%",
    offset: -750,
})
    .setTween(gsap.fromTo(".visual.seven-h", { y: "30%" }, { y: "-10", ease: "power1.inOut" }))
    .addTo(controller);

// Section 08

new ScrollMagic.Scene({
    triggerElement: "#section8a",
    triggerHook: 0,
    duration: "110%",
    offset: -600,
})
    .setTween(gsap.fromTo(".visual.eight-a", { y: "-40%" }, { y: "0%", ease: "power1.inOut" }))
    .addTo(controller);
