gsap.to("#page2 h1", {
  x: "-200vw",
  scrollTrigger: {
    trigger: "#page2",
    scoller: "body",

    scrub: 2,
    start: "top 0%",
    end: "top: -150%",
    pin: true,
  },
});
