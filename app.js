const menuBtn = document.querySelector(".mobile-navlist h5");
const mobileNav = document.querySelector(".mobile-nav");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("show");
});
