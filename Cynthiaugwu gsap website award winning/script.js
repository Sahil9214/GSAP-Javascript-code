const circles = document.querySelector("#minicircle");
let timeout = 0;
function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotiveAnimation();

function circleMouseFollower(xScale, yScale) {
  //   const circles = document.querySelector("#minicircle");
  window.addEventListener("mousemove", function (dets) {
    const x = dets.clientX;
    const y = dets.clientY;

    circles.style.transform = `translate(${x}px, ${y}px) scale(${xScale}, ${yScale})`;
  });
}
circleMouseFollower();

function firstPageAnimation() {
  var tl = gsap.timeline();
  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 2,
  });

  tl.to(".boundary .boundingelem", {
    y: 0,
    opacity: 1,
    ease: Expo.easeInOut,
    duration: 2,
    delay: -1,
    stagger: 0.2,
  });
  tl.from("#herofooter", {
    y: -10,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 1.5,
    delay: -1,
  });
}

firstPageAnimation();
//!VEry Important concepts 👇👇👇👇👇
function minCircleAnimation() {
  clearTimeout(timeout);
  var xScale = 1;
  var yScale = 1;
  var xPrev = 0;
  var yPrev = 0;
  document.addEventListener("mousemove", function (dets) {
    const x = dets.clientX;
    const y = dets.clientY;
    var xDiff = dets.clientX - xPrev;
    xPrev = dets.clientX;

    var yDiff = dets.clientY - yPrev;
    yPrev = dets.clientY;

    xScale = gsap.utils.clamp(0.9, 1.2, xDiff);
    yScale = gsap.utils.clamp(0.9, 1.2, yDiff);
    circleMouseFollower(xScale, yScale);
    timeout = setTimeout(function () {
      circles.style.transform = `translate(${xPrev}px, ${yPrev}px) scale(${1}, ${1})`;
    }, 100);
  });
  document.addEventListener("mouseleave", function (e) {
    circles.style.width = "7px";
  });
}
minCircleAnimation();

function SecondsAnimation() {
  document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });

    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
}
SecondsAnimation();
function menu() {
  let menu = document.getElementById("menu");

  if (!menu) {
    console.error("Menu element not found");
    return;
  }

  menu.addEventListener("click", function () {
    // Fade out the menu text
    gsap.to("#menu h4", {
      opacity: 0,
      duration: 0.5,
      ease: Expo.easeInOut,
      onComplete: () => {
        // Animate the menu-category list into view from the left
        gsap.to(".menu-category", {
          opacity: 1,
          x: 0, // Move to its original position
          duration: 0.5,
          ease: Expo.easeInOut,
        });
      },
    });
  });
}

// Call the menu function
menu();
