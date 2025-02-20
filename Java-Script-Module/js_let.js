var a = 80;  // var is global scope variable

var a = 15; // we can assign and redeclare = a variables

let x = 55; // let is block scope variable

// let x = 40;  we can not re-declare =  x variables

x = 40; // but we can assign value

// 40 print because 55 is override new value and print it.


{

let z = 40;   // inside the block
var a = 45;
let x = "Manish"
console.log(x);
// console.log(z);
// console.log(a); // var variable print both side of block 

}

//console.log(z);  // reference Error because z is inside the block but we are checking out side the
                  // block then this type of error given


  console .log(a);   
  console.log(x)



  // let keywords was introduce in ES6
  // let variable are block scoped variables
  // can not redeclare these variables in same scope