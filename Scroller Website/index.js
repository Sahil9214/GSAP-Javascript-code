function pageAnimation() {
  var tl = gsap.timeline();

  tl.from("nav h1", {
    y: -10,
    opacity: 0,
    delay: 1,
    duration: 0.5,
  });
  tl.from("nav h4", {
    y: -30,
    opacity: 0,
    delay: 1,
    duration: 0.2,
    stagger: 0.2,
  });
  tl.from("nav button", {
    y: -30,
    opacity: 0,
    delay: 1,
    duration: 0.6,
  });

  tl.from(
    ".center-part1 h1",
    {
      x1: -200,
      opacity: 0,
      duration: 0.4,
      delay: 1,
    },
    "-=.3"
  );
  tl.from(".center-part1 p", {
    x1: -1000,
    opacity: 0,
    duration: 0.4,
    delay: 1,
  });
  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });
  tl.from(
    ".center-part2 img",
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=.3"
  ); // time delay

  tl.from(".section1bottom", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
  });
}
pageAnimation();

function forImages() {
  var tl1 = gsap.timeline({
    scrollTrigger: {
      target: ".sectio1bottom",
      scroller: "body",
    },
  });
  tl1.from(".section1bottom img", {
    y: 70,
    duration: 1,
    opacity: 0,
  });
}
forImages();

function Section2() {
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section2",
      scroller: "body",
      // markers:true,
      start: "top 90%",
      scrub: 2,
      end: "top 50%",
    },
  });

  tl2.from(".services h3", {
    x: -100,
    opacity: 0,
    duration: 0.5,
  });
  tl2.from(".services ", {
    y: 100,
    opacity: 0,
    duration: 0.5,
  });
  //left and right is random word used to make collab mean dono sath chalenge
  tl2.from(
    ".elem.line1.left",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "right"
  );

  tl2.from(
    ".elem.line1.right",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "right"
  );
  tl2.from(
    ".elem.line2.left",
    {
      x: 300,
      opacity: 0,
      duration: 1,
    },
    "left"
  );
  tl2.from(
    ".elem.line2.right",
    {
      x: -300,
      opacity: 0,
      duration: 1,
    },
    "left"
  );
}

Section2();
