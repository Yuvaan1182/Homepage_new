import "../scss/style-notes.scss";
import "../scss/style-notes-grid.scss";
import singleNote from "../pages/Note.html";

let Notes = localStorage.getItem("Notes");
let NotesArr = [];
let emptyNote = { title: "Title", noteText: "Note text"};
const firstNote = () => {
  var z = document.createRange().createContextualFragment(singleNote);
  document.querySelector("#notebook").appendChild(z);
};

const newNote = () => {
  //   COPY NOTE-0 AND CREATE NEW NOTE
  let newNote = document.createRange().createContextualFragment(singleNote);
  document.querySelector("#notebook").appendChild(newNote);
  document.querySelector("#notebook").lastElementChild.id =
    "note-" + (document.querySelector("#notebook").childElementCount - 1);

};
console.log(NotesArr);
if (Notes == null) {
  console.log("jaja");
  firstNote();
  NotesArr.push(emptyNote);
  NotesArr.push({title:"dupa", noteText: "jajajajaja"})
  localStorage.setItem("Notes", JSON.stringify(NotesArr));
} else {
  console.log(localStorage.getItem("Notes"));
  NotesArr = JSON.parse(localStorage.getItem("Notes"));
console.log(NotesArr)
  NotesArr.forEach((elem, idx) => {
    newNote();
    document.querySelector(`#note-${idx}`).querySelector("h2").innerHTML =
      elem.title;
    document.querySelector(`#note-${idx}`).querySelector("p").innerHTML =
      elem.noteText;
  });
}
// console.log(NotesArr)
let buttonAdd = document.querySelector(".buttonAdd");

if (buttonAdd) {
  buttonAdd.addEventListener("click", () => {
    newNote();
    // document.querySelector('#notebook').lastChild
    appendEditListener();
    NotesArr.push(emptyNote);
    console.log(NotesArr);
  });
}

let deleteAllButton = document.querySelector(".buttonDeleteAll");
if (deleteAllButton) {
  deleteAllButton.addEventListener("click", () => {
    Array.from(document.getElementsByClassName("note-paper")).forEach(
      (elem) => {
        elem.remove();
      }
    );
  });
}

let note = document.querySelector(".note-paper__delete-button");

if (note) {
  note.addEventListener("click", () => {
    console.log(document.querySelector(".note-paper__delete-button"));
    // this.closest('.note-paper')
  });
  // let deleteNote = (elem) => {elem.style.display ='none'};
}
const appendEditListener = () => {
  let editSave = document.querySelectorAll(".editSave");
  if (editSave) {
    editSave.forEach((element) => {
      element.addEventListener("click", () => {
        console.log('onclick starts')
        let notePaper = element.closest(".note-paper");
        if (notePaper.getAttribute("contenteditable") == "true") {
          // TRIGGERING THE SAVE EVENT
          console.log(NotesArr)
           updateNote(notePaper.id,NotesArr);

          notePaper.setAttribute("contenteditable", "false");
          notePaper.querySelector(".editSave").innerHTML = "Edit";
        } else {
          console.log(NotesArr)
          notePaper.setAttribute("contenteditable", "true");
          notePaper.querySelector(".editSave").innerHTML = "Save";
        }
      });
    });
  }
};

const updateNote = (id, NotesArr) => {
  console.log(id);
  console.log(NotesArr);
  let notePaper = document.getElementById(id);
  let arrId = id.slice(5);
  // console.log("console log: " + NotesArr[arrId].title);
  if ((NotesArr[arrId] = null))
    NotesArr[arrId].title = notePaper.querySelector("h2").innerHTML;
  NotesArr[arrId].noteText = notePaper.querySelector("p").innerHTML;
  localStorage.setItem("Notes", JSON.stringify(NotesArr));
};
