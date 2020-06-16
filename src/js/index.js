import "../scss/main-style.scss";
import "./darkMode.js";
// import bwBackground from "dist/img/landscape_forest_BW.jpg"

//-----------------Dark/Light Mode

//------------------------ Hamburger Menu and responsivity

let buttonChange = document.querySelector(".js-hamburger");
let screen = document.documentElement.clientWidth;
let nav = document.querySelector(".navigation");
if (buttonChange) {
  buttonChange.addEventListener("click", () => {
    nav.classList.toggle("navigation__open");
  });
}

if (window) {
  window.addEventListener("resize", () => {
    if (
      window.innerWidth >= 520 &&
      nav.classList.contains("navigation__open")
    ) {
      nav.classList.toggle("navigation__open");
    }
  });
}
//-------------------------- Range rate us
