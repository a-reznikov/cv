document.addEventListener("DOMContentLoaded", function() {
  const burger = document.querySelector(".hamburger");
  const header = document.querySelector(".header");
  const nav = document.querySelector(".nav");

  burger.addEventListener("click", function() {
    toggleBurger();
    toggleHeader();
    toggleNav();
  });

  function toggleBurger() {
    burger.classList.toggle("hamburger__opened");
  }

  function toggleHeader() {
    header.classList.toggle("header__opened");
  }

  function toggleNav() {
    nav.classList.toggle("nav__opened");
  }

})