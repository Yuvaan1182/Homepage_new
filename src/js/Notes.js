import '../scss/style-notes.scss';
import singleNote from '../pages/Note.html';

let Notes = localStorage.getItem("Notes");
console.log(Notes);
if (Notes == null)  {
  Notes = []
  localStorage.setItem("Notes", Notes) 
}
let buttonAdd = document.querySelector(".buttonAdd")

  if (buttonAdd){ 
    buttonAdd.addEventListener('click', () => {
    let newNote = document.querySelector('#note-0').cloneNode(true)
    newNote.style.display = 'inline'
    newNote.id = "note-" + document.querySelector("#notebook").childElementCount
    document.querySelector("#notebook").appendChild(newNote);
})
 }

let deleteAllButton = document.querySelector('.buttonDeleteAll')
 if(deleteAllButton){ deleteAllButton.addEventListener('click', () => {
    Array.from(document.getElementsByClassName('note-paper')).forEach( elem => {
      elem.style.display = 'none'

    })
  })
}

let note = document.querySelector(".note-paper__delete-button")
  
if(note){

  note.addEventListener('click', () =>{

    // console.log(document.querySelector(".note-paper__delete-button"))
    // this.closest('.note-paper')
  })
// let deleteNote = (elem) => {elem.style.display ='none'};
}
