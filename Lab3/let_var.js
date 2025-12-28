let a = 5;
var b = 10;
console.log("Value of a:", a);
console.log("Value of b:", b);

function showValues() {
    let a = 15;
    var b = 20;
    console.log("Inside function a:", a);
    console.log("Inside function b:", b);
}
showValues();
b = 25;
console.log("Outside function a:", a);
console.log("Outside function b:", b);