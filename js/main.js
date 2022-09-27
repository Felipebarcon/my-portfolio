"use strict";

const modal = document.querySelector(".modal");
const btnOpenModal = document.querySelectorAll(".btn--show-modal");
const loaderTexts = document.querySelectorAll(".loader--text");
const main = document.querySelector(".main");
const header = document.querySelector(".header");
const imgLoading = document.querySelector(".loader--img");
///////////////////////////////////////
// Loader Text Animation

///////////////////////////////////////////////////////////
loaderTexts.forEach((t) => {
  window.addEventListener("load", (e) => {
    t.classList.add("target");
  });
});

setTimeout(function () {
  main.classList.add("hidden");
  header.classList.remove("hidden");
  header.classList.add("animation");
}, 4000);

setTimeout(function () {
  header.classList.remove("animation");
}, 7000);

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
