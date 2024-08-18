gsap.to(".imagecontainer", {
  ease: Expo.easeInOut,
  width: "100%",
  duration: 2,
  stagger: 2,
  repeat: -1,
});

//text

let textTimeline = gsap.timeline({ repeat: -1 }); // Infinite loop

textTimeline
  .to(".text h1:nth-child(1)", {
    ease: Expo.easeInOut,
    duration: 2,
    top: 0,
  })
  .to(".text h1:nth-child(1)", {
    ease: Expo.easeInOut,
    duration: 2,
    top: "-100%",
  })
  .to(
    ".text h1:nth-child(2)",
    {
      ease: Expo.easeInOut,
      duration: 2,
      top: 0,
    },
    "-=1.5"
  ) // Overlap the animations slightly for smooth transition
  .to(".text h1:nth-child(2)", {
    ease: Expo.easeInOut,
    duration: 2,
    top: "-100%",
  })
  .to(
    ".text h1:nth-child(3)",
    {
      ease: Expo.easeInOut,
      duration: 2,
      top: 0,
    },
    "-=1.5"
  )
  .to(".text h1:nth-child(3)", {
    ease: Expo.easeInOut,
    duration: 2,
    top: "-100%",
  });
