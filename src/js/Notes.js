import "../scss/style-notes.scss";
import singleNote from "../pages/Note.html";

let Notes = localStorage.getItem("Notes");
let NotesArr = []
let emptyNote = {title : 'Title', noteText : 'Note text'}
if (Notes == null) {
  Notes = [emptyNote];
  localStorage.setItem("Notes", JSON.stringify(Notes));
} else {
 NotesArr = JSON.parse(localStorage.getItem("Notes"))
document.querySelector('#note-1').querySelector('h2').innerHTML = NotesArr[0].title
document.querySelector('#note-1').querySelector('p').innerHTML = NotesArr[0].noteText
}
// console.log(NotesArr)
let buttonAdd = document.querySelector(".buttonAdd");

if (buttonAdd) {
  buttonAdd.addEventListener("click", () => {
    console.log("add new note");
    let newNote = document.querySelector("#note-0").cloneNode(true);
    newNote.style.display = "inline";
    newNote.id =
      "note-" + document.querySelector("#notebook").childElementCount;
      console.log(newNote)
    newNote.childNodes[1].addEventListener("click", (e) => {
        newNote.style.display='none'
    });
    document.querySelector("#notebook").appendChild(newNote);

  });
}

let deleteAllButton = document.querySelector(".buttonDeleteAll");
if (deleteAllButton) {
  deleteAllButton.addEventListener("click", () => {
    Array.from(document.getElementsByClassName("note-paper")).forEach(
      (elem) => {
        elem.style.display = "none";
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

let editSave = document.querySelectorAll(".editSave");
console.log(NotesArr)
if (editSave) {
  editSave.forEach((element) => {
    element.addEventListener("click", () => {
      let notePaper = element.closest(".note-paper")
      if(notePaper.getAttribute('contenteditable') == 'true'){    // TRIGGERING THE SAVE EVENT
     
        NotesArr[0].title = notePaper.querySelector('h2').innerHTML
        NotesArr[0].noteText = notePaper.querySelector('p').innerHTML
        console.log(NotesArr)
        localStorage.setItem("Notes", JSON.stringify(NotesArr));
         notePaper.setAttribute('contenteditable','false')
         notePaper.querySelector('.editSave').innerHTML = "Edit"
        } else {notePaper.setAttribute('contenteditable','true')
        notePaper.querySelector('.editSave').innerHTML = "Save"
      }
     
    });
  });
}

