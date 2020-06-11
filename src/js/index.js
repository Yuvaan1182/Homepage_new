import '../scss/main-style.scss';

// -------------------NOTES MANAGING



//------------------------ Hamburger Menu and responsivity

let buttonChange = document.querySelector('.js-hamburger')
let screen = document.documentElement.clientWidth
let nav = document.querySelector('.navigation')
if(buttonChange) {
    buttonChange.addEventListener('click', () => {
      nav.classList.toggle('navigation__open')
      console.log(screen)
    })
  }

if(window){
 window.addEventListener("resize", () => {

   if (window.innerWidth >= 520 &&  nav.classList.contains('navigation__open')) {
    nav.classList.toggle('navigation__open')
  
  }
 }
 )
  
}
const showVal = (val)  => {
  

}
//-------------------------- Range rate us 
const myRange = document.querySelector('.form__item--range')
if (myRange) {
myRange.addEventListener('input', ()=>{
  let fieldSet = document.querySelector('.rangeValue')
 
 myRange.value <= 7  ? fieldSet.textContent = 'Grade: ' + myRange.value  : fieldSet.textContent = 'Grade:  ' + myRange.value + '                 Thanks!!'
})

}