import "../scss/main-style.scss";
// import bwBackground from "dist/img/landscape_forest_BW.jpg"

//-----------------Dark/Light Mode

let isDark = localStorage.getItem("isDark");
let imgBw = window
  .getComputedStyle(document.querySelector(".dupa"))
  .getPropertyValue("background-image");
let img = window
  .getComputedStyle(document.querySelector("body"))
  .getPropertyValue("background-image");
let bodyStyle = document.documentElement.style;
let navColor = document.documentElement.style;
let modeSwitch = document.querySelector(".switchInput");
console.log(typeof(isDark))
if (isDark == null) {
  localStorage.setItem("isDark", false);
  console.log("isDark variable in localStorage declared");
} else if (isDark == 'true') {
  console.log("dark mode enabled");
  setToDarkMode();
} else if (isDark == 'false') {
  console.log("dark mode disabled");
  setToNormalMode();
}

if (modeSwitch) {
  modeSwitch.addEventListener("input", () => {
    console.log(modeSwitch);
    modeSwitch.value == "true" ? setToDarkMode() : setToNormalMode();
  });
}

function setToDarkMode() {
  bodyStyle.setProperty("--background-img", imgBw);
  navColor.setProperty("--nav-color", "#d86c46");
  modeSwitch.value = false;
  localStorage.setItem("isDark", true);
}
function setToNormalMode() {
  bodyStyle.setProperty("--background-img", img);
  navColor.setProperty("--nav-color", "black");
  modeSwitch.value = true;
  localStorage.setItem("isDark", false);
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
