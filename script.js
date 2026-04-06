let menu = document.querySelector("#nav i");

let cross = document.querySelector("#full i");

var tl = gsap.timeline();
tl.to("#full", {
  right: 0,
  duration: 0.3,
  scrub: 2,
});

tl.from("#full h4", {
  x: 150,
  duration: 0.3,
  stagger: 0.3,
  opacity: 0,
  scrub: 2,
});

tl.from("#full i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", () => {
  tl.play();
});

cross.addEventListener("click", () => {
  tl.reverse();
});
