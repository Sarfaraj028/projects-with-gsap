let tl = gsap.timeline({paused: true});

let navIcon = document.querySelector("#nav i");
let closeIcon = document.querySelector(".gsap-div i");

tl.to(".gsap-div", {
  right: 0,
  duration: .4,
});
tl.from(".gsap-div h4", {
  opacity: 0,
  x: 150,
  duration: .5,
  stagger: 0.2,
});
tl.from(".gsap-div i", {
  opacity: 0,
});

navIcon.addEventListener("click", () => {
    tl.play()
});

closeIcon.addEventListener("click", () => {
    tl.reverse()
});