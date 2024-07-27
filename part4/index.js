var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var imageDiv = document.querySelector("#image");
main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.8,
    ease: "back.out",
  });
});

imageDiv.addEventListener("mouseenter", function (dets) {
  cursor.innerHTML = "View More";

  gsap.to(cursor, {
    scale: 4,
    backgroundColor: "#ffffff5c",
  });
});

imageDiv.addEventListener("mouseleave", function (dets) {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    backgroundColor: "#fff",
  });
});
