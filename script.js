//First Page does not touch

gsap.from("#page1 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});
//scoll trigger start from here

gsap.from("#page2 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
  // scrollTrigger: "#page2 #box", we can do this like this but not good
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    // marker: true,
    start: "top 60%",
    end: "bottom 40%",
    scrub: 2, // They take boolean or 1 to 5 num increase smoothness increases
    pin: true,
  },
});
gsap.from("#page3 #box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
});
