function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var clutter = "";
  var splittedH1Text = h1Text.split("");
  var halfValue = Math.floor(splittedH1Text.length / 2);
  splittedH1Text.forEach((el, idx) => {
    if (halfValue > idx) {
      clutter += `<span class='a'>${el}</span>`;
    } else {
      clutter += `<span class='b'>${el}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakTheText();

gsap.from("h1 .a", {
  y: 80,
  opacity: 0.6,
  duration: 0.8,
  stagger: 0.15,
  delay: 0.5,
});

gsap.from("h1 .b", {
  y: 80,
  opacity: 0.6,
  duration: 0.8,
  stagger: -0.15,
  delay: 0.5,
});
