window.addEventListener("DOMContentLoaded", ()=> {
let button = document.getElementById("button");
let paragraph = document.getElementById("paragraph");
// console.log(paragraph);
const words1 = new Array(
  "24/7",
  "multi-Tier",
  "30,000 foot",
  "B-to-B",
  "win-win"
);
const words2 = new Array(
  "empowered",
  "value-added",
  "oriented",
  "focused",
  "aligned"
);
const words3 = new Array(
  "process",
  "solution",
  "tipping-point",
  "strategy",
  "vision"
);

// console.log(Math.floor(Math.random() * 10));
function makePhrase() {
  // let test = true;
  let rand1 = Math.floor(Math.random() * words1.length);
  let rand2 = Math.floor(Math.random() * words2.length);
  let rand3 = Math.floor(Math.random() * words3.length);
  let phrase = words1[rand1] + " ," + words2[rand2] + " ," + words3[rand3];
  // console.log(phrase);
  paragraph.innerHTML = phrase;
  // function func() {

  // if (test) {
  //     paragraph.style.color = "aquamarine";
  //     test = false;
  // }
  // else {
  //     test = true;
  //     paragraph.style.color = "red";
  // }
  //}
  // paragraph.style.color = "aquamarine";
}

// const contactCheck = new Object();
// contactCheck.firstname = "Tunji"
// This is how to create a constructor

const contactCheck = {
  firstname: "Tunji",
  lastname: "Akanbi",
};
// const form_Content = document.getElementById("form-content");
// form_Content.classList.add("hidden");
let formC = document.getElementById("form-content").classList;

function getFormInput() {
// function getFormInput(e) {
  // let formContent = document.getElementById("form-content");
  // e.prevent.default();
  // let formContent = document.getElementById("form-content");

  // let firstName = document.getElementById("firstname");
  // form_Content.textContent = firstName.value;
  // form_Content.classList.remove("hidden");
  // form_Content.classList.add("show");

  formC.remove("hidden");
  formC.add("show");
  console.log("what the f.$%%!!!");
  //   if (firstName.value == contactCheck.firstname) {
  // alert(" Your firstname is " + firstName.value);
  // alert("Ok, it works");
  //   }
}
let button2 = document.getElementById("button2");
button2.addEventListener("click", getFormInput);

});