import "../scss/style-notes.scss";
import singleNote from "../pages/Note.html";

let Notes = localStorage.getItem("Notes");
let NotesArr = [];
let emptyNote = { title: "Title", noteText: "Note text", id: 0 };
var z = document.createRange().createContextualFragment(singleNote);
document.querySelector("#notebook").appendChild(z);
const newNote = () => {
  let newNote = document.querySelector("#note-0").cloneNode(true);
  newNote.style.display = "inline";
  newNote.id = "note-" + document.querySelector("#notebook").childElementCount;
  newNote.childNodes[1].addEventListener("click", (e) => {
    newNote.style.display = "none";
  });
  document.querySelector("#notebook").appendChild(newNote);
};

if (Notes == null) {
  Notes = [emptyNote];
  localStorage.setItem("Notes", JSON.stringify(Notes));
} else {
  NotesArr = JSON.parse(localStorage.getItem("Notes"));
  console.log(typeof NotesArr);
  newNote();
  NotesArr.forEach((elem, idx) => {
    document.querySelector(`#note-${idx + 1}`).querySelector("h2").innerHTML =
      elem.title;
    document.querySelector(`#note-${idx + 1}`).querySelector("p").innerHTML =
      elem.noteText;
  });
}
// console.log(NotesArr)
let buttonAdd = document.querySelector(".buttonAdd");

if (buttonAdd) {
  buttonAdd.addEventListener("click", () => {
    newNote();
    // document.querySelector('#notebook').lastChild
    appendEditListener()
    
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
}