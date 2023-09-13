var description = "This hands-on, project-oriented course focuses on designing and building informative and functional, modern web pages, using industry-standard software and design tools, to meet client needs. Topics include employing the elements and principles of design; using and modifying components of Adobe Dreamweaver; integrating Adobe Animate with Dreamweaver, HTML5, and CSS3; and a cursory introduction to JavaScript and jQuery within the design environment.";

console.log(description);

function displayDescription() {
    var paragraph = document.getElementById("paragraph");
    paragraph.innerHTML = description;
}