import "../scss/style-notes.scss";
import "../scss/style-notes-grid.scss";
import singleNote from "../pages/Note.html";

let NotesArr = localStorage.getItem("Notes");
let emptyNote = { title: "Title", noteText: "Note text" };
const firstNote = () => {
  var note = document.createRange().createContextualFragment(singleNote);
  document.querySelector("#notebook").appendChild(note);
  appendDeleteEvent();
};
const appendDeleteEvent = () => {
  let deleteIcon = document.querySelectorAll(".note-paper__delete-button");
  if (deleteIcon) {
    deleteIcon.forEach((element) => {
      element.addEventListener("click", () => {
        let notePaper = element.closest(".note-paper");
        let noteId = parseInt(notePaper.id.slice(5));
        NotesArr = NotesArr.splice(noteId);
        notePaper.remove();
        localStorage.setItem("Notes", JSON.stringify(NotesArr));
      });
    });
  }
};

const newNote = () => {
  //   COPY NOTE-0 AND CREATE NEW NOTE
  let newNote = document.createRange().createContextualFragment(singleNote);
  document.querySelector("#notebook").appendChild(newNote);
  document.querySelector("#notebook").lastElementChild.id =
    "note-" + (document.querySelector("#notebook").childElementCount - 1);
};
const appendEditListener = () => {
  let editSave = document.querySelectorAll(".editSave");
  if (editSave) {
    editSave.forEach((element) => {
      element.addEventListener("click", () => {
        let notePaper = element.closest(".note-paper");
        let noteId = notePaper.id.slice(5);
        if (notePaper.getAttribute("contenteditable") == "true") {
          if (NotesArr[noteId] != null) {
            NotesArr[noteId].title = notePaper.querySelector("h2").innerHTML;
            NotesArr[noteId].noteText = notePaper.querySelector("p").innerHTML;
            localStorage.setItem("Notes", JSON.stringify(NotesArr));
          }
          notePaper.setAttribute("contenteditable", "false");
          notePaper.querySelector(".editSave").innerHTML = "Edit";
        } else {
          notePaper.setAttribute("contenteditable", "true");
          notePaper.querySelector(".editSave").innerHTML = "Save";
        }
      });
    });
  }
};

if (NotesArr == null) {
  firstNote();
  console.log(firstNote)
  NotesArr = []
  NotesArr.push(emptyNote);
  localStorage.setItem("Notes", JSON.stringify(NotesArr));
  appendDeleteEvent();
} else {
  NotesArr = JSON.parse(localStorage.getItem("Notes"));
  NotesArr.forEach((elem, idx) => {
    newNote();
    document.querySelector(`#note-${idx}`).querySelector("h2").innerHTML =
      elem.title;
    document.querySelector(`#note-${idx}`).querySelector("p").innerHTML =
      elem.noteText;
  });
  appendEditListener();
  appendDeleteEvent();
}

let buttonAdd = document.querySelector(".buttonAdd");

if (buttonAdd) {
  buttonAdd.addEventListener("click", () => {
    newNote();
    appendEditListener();
    appendDeleteEvent();
    NotesArr.push(emptyNote);
  });
}

let deleteAllButton = document.querySelector(".buttonDeleteAll");
if (deleteAllButton) {
  deleteAllButton.addEventListener("click", () => {
    Array.from(document.getElementsByClassName("note-paper")).forEach(
      (elem) => {
        elem.remove();
        NotesArr = [];
        localStorage.setItem("Notes", JSON.stringify(NotesArr));
      }
    );
  });
}

