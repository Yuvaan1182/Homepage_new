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

//========================== GH FETCH API

// if(!Projects)
fetch("https://api.github.com/users/galinowsky/repos?sort=created")
  .then((resp) => resp.json())
  .then((resp) => {
    console.log(resp);
    localStorage.setItem("Projects", JSON.stringify(resp));
  })
  .catch(console.log((error) => console.log("error")));

let Projects = JSON.parse(localStorage.getItem("Projects"));

const repoList = document.querySelector(".repo-list");
for (let proj of Projects) {
  const { name, html_url } = proj;
  const rowTemplate = `
  <li><strong>${name}</strong> - <a href="${html_url}" class="github-ext-link"
  title ="link do repozytorium na github.com"
  target="_blank">Link do github</a></li>`;
  repoList.innerHTML += rowTemplate;
}
