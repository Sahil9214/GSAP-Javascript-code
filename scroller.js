console.log("hello");
gsap.to("#page2 h1", {
  x: "-200vw",
  scrollTrigger: {
    trigger: "#page2",
    scoller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true, // always apply on parent
  },
});
