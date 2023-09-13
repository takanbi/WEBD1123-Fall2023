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
    let test = true;
    let rand1 = Math.floor((Math.random() * words1.length));
    let rand2 = Math.floor((Math.random() * words2.length));
    let rand3 = Math.floor((Math.random() * words3.length));
    let phrase = words1[rand1] + " ," + words2[rand2] + " ," + words3[rand3];
    // console.log(phrase);
    paragraph.innerHTML = phrase;
    // function func() {
        
        if (test) {
            paragraph.style.color = "aquamarine"; 
            test = false;
        }
        else {
            test = true;
            paragraph.style.color = "red"; 
        }
    //}
    // paragraph.style.color = "aquamarine";
} 