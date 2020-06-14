import "../scss/main-style.scss";
import bwBackground from "../assets/img/landscape_forest_BW.jpg"


//-----------------Dark/Light Mode
let modeSwitch = document.querySelector(".switchInput");
if (modeSwitch) {
  modeSwitch.addEventListener("input", () => {
    let bodyStyle = document.documentElement.style;
    let navColor = document.documentElement.style
    if (modeSwitch.value == "true") {
      bodyStyle.setProperty(
        "--background-img",
        "url('../../public/landscape_forest_BW.jpg')"
      );
      navColor.setProperty( "--nav-color", "#d86c46")
      modeSwitch.value = false;
    } else if ((modeSwitch.value = "false")) {
      bodyStyle.setProperty(
        "--background-img",
        "url('../../public/landscape_forest.jpg')"
      );
      navColor.setProperty( "--nav-color", "black")
      modeSwitch.value = true;
    }
  });
}
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
const showVal = (val) => {};
//-------------------------- Range rate us
const myRange = document.querySelector(".form__item--range");
if (myRange) {
  myRange.addEventListener("input", () => {
    let fieldSet = document.querySelector(".rangeValue");

    myRange.value <= 7
      ? (fieldSet.textContent = "Grade: " + myRange.value)
      : (fieldSet.textContent =
          "Grade:  " + myRange.value + "                 Thanks!!");
  });
}
