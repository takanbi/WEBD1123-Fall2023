// let a;
// let b;
// let c;
let a, b, c;
a = "User Name";
b = "Password";
c = "Email";
let name = "Tunji Akanbi";
// let stuff = [a, b, c]; array lteral
let stuff = new Array( a, b, c); //constructor array
stuff[0] = name;
// console.log(stuff[0]);

function sayHello() {
    // console.log("Hello " + name);
}
sayHello();

function getArea(width, height) { //width are parameters
    return width * height;
}
// let test = getArea(3, 5); //width are arguments
// console.log(test);
// console.log(getArea(4, 5));
wallWidth = 5;
wallHeight = 5;
// console.log(getArea(wallWidth, wallHeight));
function calculateArea(width, height) {
    let area = width * height;
    return area;
}
let wallOne = calculateArea(3, 5);
let wallTwo = calculateArea(8, 5);
// console.log(wallOne + " ," + wallTwo);

function getSize(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;
    let sizes = [area, volume];
    return sizes;
}
let areaOne = getSize(3,2,3)[0];
let volumeOne = getSize(3,2,3)[1];
console.log(areaOne);
console.log(volumeOne);

// let area = function(width, height) {
//     return width * height;
// }
// function area(width, height) {
//     return width * height;
// }
// let size = area(10, 10);
// console.log(size);

let area = (
    function() {
        let width = 7;
        let height = 8;
        return width * height;
    }()
);

console.log(area);