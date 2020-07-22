import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

const saveBtn = document.querySelector(".btn__save--js");
const loadBtn = document.querySelector(".btn__load--js");

const entry = localStorage.getItem("entry");
let result = "";

if (entry) {
  result = entry;
}

const textarea = document.querySelector(".editor__textarea--js");
textarea.value = result;

saveBtn.addEventListener("click", () => {
  localStorage.setItem("entry", textarea.value);
});

loadBtn.addEventListener("click", () => {
  textarea.value = localStorage.getItem("entry");
  console.log(123);
});
