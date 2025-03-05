
// var is a global scope that means override the value of x in out side of variables
// var x = 20;

// {
// var x = 200;
// console.log(x);
// }

// console.log(x);



// var x = 20;

// {
// var x = 200;
// let a = 50;
// const y = 100;

// console.log(x);  // 200
// console.log(a);   // 50
// console.log(y);   // 100

// }

// console.log(x);  //  200



var x = 20;
let a = 15;  // let is block scope that's why not access to the inner side of scope

{
var x = 200;
let a = 50;
const y = 100;
console.log(x);  // 200
console.log(a);   // 50
console.log(y);   // 100

}

console.log(a);   // 15
console.log(x);  //  200


// this is called as iligel showdling
// let a = 25;
// {
//   var a = 30;
// }