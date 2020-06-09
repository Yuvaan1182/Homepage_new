// -------------------NOTES MANAGING
function newNote() {
  let Note = document.querySelector("#note-0");

  let newNote = Note.cloneNode(true);
 
   newNote.style.display = 'inline'
 let elemId = "note-" + document.querySelector("#notebook").childElementCount
 newNote.id = elemId

  document.querySelector("#notebook").appendChild(newNote);
}

let deleteNote = (elem) => {elem.style.display ='none'}

let deleteAllNotes =  () =>{ 
  Array.from(document.getElementsByClassName('note-paper')).forEach( elem => {
    elem.style.display = 'none'
  });
  
}

//------------------------ Hamburger Menu and responsivity

let buttonChange = document.querySelector('.js-hamburger')
let screen = document.documentElement.clientWidth
let nav = document.querySelector('.navigation')

buttonChange.addEventListener('click', () => {
  nav.classList.toggle('navigation__open')
  console.log(screen)
})


window.addEventListener("resize", () => {
  console.log()
  if (window.innerWidth >= 520 &&  nav.classList.contains('navigation__open')) {
   nav.classList.toggle('navigation__open')
  
 }
}
)

const showVal = (val)  => {
  

}

const myRange = document.querySelector('.form__item--range')

myRange.addEventListener('input', ()=>{
  let fieldSet = document.querySelector('.rangeValue')
  //  console.log(myRange.value )
  // //  console.log(fieldSet.textContent)
  //  console.log(fieldSet)
  // fieldSet.textContent = 'Grade: ' + myRange.value 
  
 myRange.value <= 7  ? fieldSet.textContent = 'Grade: ' + myRange.value  : fieldSet.textContent = 'Grade:  ' + myRange.value + '                 Thanks!!'
})


