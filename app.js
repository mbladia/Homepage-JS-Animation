const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");
const menu = document.querySelector(".menu");

const tl = new TimelineMax();
tl.fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power1.easeInOut })
  .fromTo(
    hero,
    1.3,
    { width: "100%" },
    { width: "80%", ease: Power1.easeInOut }
  )
  .fromTo(
    slider,
    1.2,
    { x: "-100%" },
    { x: "0%", ease: Power1.easeInOut },
    "-=1.3"
  )
  .fromTo(logo, 0.5, { opacity: 0, x: 40 }, { opacity: 1, x: 0 }, "-=0.5")
  .fromTo(menu, 0.5, { opacity: 0, x: 40 }, { opacity: 1, x: 0 }, "-=0.3");
