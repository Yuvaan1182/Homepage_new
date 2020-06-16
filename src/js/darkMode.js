
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


if (isDark == null) {
  localStorage.setItem("isDark", false);
} else if (isDark == "true") {
  setToDarkMode();
} else if (isDark == "false") {
  setToNormalMode();
}

if (modeSwitch) {
  modeSwitch.addEventListener("input", () => {
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
