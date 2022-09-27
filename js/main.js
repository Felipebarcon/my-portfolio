"use strict";

const modal = document.querySelector(".modal");
const btnOpenModal = document.querySelectorAll(".btn--show-modal");
const loaderTexts = document.querySelectorAll(".loader--text");
const main = document.querySelector(".main");
const header = document.querySelector(".header");
///////////////////////////////////////
// Loader Text Animation

///////////////////////////////////////////////////////////
loaderTexts.forEach((t) => {
  window.addEventListener("load", (e) => {
    t.classList.add("target");
  });
});

setInterval(function () {
  main.classList.add("hidden");
  header.classList.remove("hidden");
}, 1500);

/* TITLE ANIMATION */
let didScroll = false;
let paralaxTitles = document.querySelectorAll(".paralax-title");

const scrollInProgress = () => {
  didScroll = true;
};

const raf = () => {
  if (didScroll) {
    paralaxTitles.forEach((element, index) => {
      console.log(window.scrollY);
      element.style.transform = "translateX(" + window.scrollY / 10 + "%)";
    });
    didScroll = false;
  }
  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);
window.addEventListener("scroll", scrollInProgress);
