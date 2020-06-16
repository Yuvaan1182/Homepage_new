import '../scss/forms-style.scss';
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
