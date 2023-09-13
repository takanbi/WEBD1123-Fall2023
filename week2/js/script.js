/*var heading1 = document.getElementById("heading1");
console.log(heading1);
heading1.innerHTML = "JavaScript Rules!";*/
let paragraph = document.getElementById("paragraph");
paragraph.classList.add("hide");
// var btn = document.getElementById("btn");
let content = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, fugit qui aliquam, consequuntur molestiae quo nostrum aspernatur delectus sapiente facere odio autem quia blanditiis nisi nobis libero consequatur ea excepturi!";
function showParagraph() {
    paragraph.innerHTML = content;
    paragraph.classList.remove("hide");
}

