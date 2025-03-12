// function foo() {
//   var x = 10;
//   console.log(x);
// }

// foo();


//------------------------------*******--------------------------//

// function foo() {
//   var x = 10;
// }
// console.log(x);   // x is not define because  variable of x does not print to the outside of the block

// foo();

//------------------------------*******--------------------------//

// var x = 10;          // declaring a  varible outside
// function foo() {
//   console.log(x);   // x is  define because  variable of x is  to print inside of the block

// }

// foo();


//------------------------------*******--------------------------//


// function foo() {
//   var x = 50;
//   console.log(x);   // x is  define because  variable of x is  to print inside of the block
// function bar(){
//   console.log(x);
// }


// bar();

// }
// foo();


//------------------------------*******--------------------------//


// function foo() {
//   var x = 50;
//   console.log(x);   // x is  define because  variable of x is  to print inside of the block
// console.log(y);
// function bar(){
//   let y = 20;
//   console.log(x);
// }
// bar();
// }
// foo();

//------------------------------*******--------------------------//

function foo() {
  var x = 50;
//   console.log(x);   // x is  define because  variable of x is  to print inside of the block
// console.log(y);
function bar(){
  var y = 20;
  console.log(a);
}
bar();
}
var a = 35;
foo();