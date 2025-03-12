// Function
//  Function is a block of code designed to perform a particular task.


// Syntax
function name (parameter1, parameter2) {
  // code to be executed
}

//  out side the block

function myName ( add1 , add2 ){

return add1 + add2;

}

const num1 = myName(56, 56);
console.log("Number", num1);

const Name = myName("Manish" , "Kumar");
console.log("Name", Name);


let x = myName(4, 7);
console.log(x);


// 

function hello(){
let myNameIs = "Manish Aryan";
console.log("My name is => ", myNameIs);
}

hello();



// practice question

function checkNumber(num) {
  // Use if-else statements to check the number

// Practice problems

// Write a JavaScript function checkNumber that:

// Takes a single parameter num (a number).
// Uses if-else statements to determine whether the number is positive, negative, or zero, and logs the appropriate message:
// If num is greater than 0, log "The number is positive."
// If num is less than 0, log "The number is negative."
// If num is 0, log "The number is zero."



  if (num > 0){
    console.log("number is Positive");

  }
  else  if( num < 0 ){
    console.log("number is Negative");
  }

  else{
    console.log("number is Zero");
  }
 
};

checkNumber(5);   // Output: The number is positive.
checkNumber(-3);  // Output: The number is negative.
checkNumber(0);   // Output: The number is zero.





// Write a JavaScript function categorizeNumber that:

// Takes a single parameter num (a number).
// Uses a switch-case statement to categorize num as follows:
// If num is 1, log "One".
// If num is 2, log "Two".
// If num is 3, log "Three".
// For any other number, log "Unknown number".

// let msg;
// function categorizeNumber(num) {
//   // Use switch-case to categorize the number

//  switch(num){
//   case 1:
//     num = "One";
//     break;

//     case 2:
//       num = "Two";
// break;
//       case 3:
//         num = "Three";
// break;
//         default:
//           msg = "Unknown Number";

//  }

//  if (msg){
//   console.log(msg);
//  }else{
//   console.log(num);
//  }

// };

function categorizeNumber(num) {
  // Use switch-case to categorize the number
  switch (num) {
      case 1:
          console.log("One");
          break;
      case 2:
          console.log("Two");
          break;
      case 3:
          console.log("Three");
          break;
      default:
          console.log("Unknown number");
  }
}


categorizeNumber(1); // Output: One
categorizeNumber(2); // Output: Two
categorizeNumber(3); // Output: Three
categorizeNumber(5); // Output: Unknown number




let number = 10;
if (number%2 === 0){
  console.log("Happy");
}
else {
  console.log("Not Happy");
}


// let person = {
//   name: "Manish",
//   age: 30,
// }

// console.log(person.name);

let q = "8";
let w = 2;
let e = "3";

const d = q - w + e;

console.log(d);



let f = 5;
let g = 2;

let modules = (f% g); 
console.log(modules);



for (let i = 1; i <= 3; i++) { // Outer loop: i runs from 1 to 3
  let j = 1;
  while (j <= 2) { // Inner loop: j runs from 1 to 2
      console.log(i + ", " + j);
      j++;
  }
}


let text = "Hello";
console.log(text.length);



let str = "";

for (let i = 1; i <= 5; i++) {
    str += i;
}

console.log(str);




var obj = {
  length: 20,
  height: 35
};

if ('breadth' in obj === false) {
  obj.breadth = 12;
}

console.log(obj.breadth);





function test(num) {
  if (num > 100) {
      return "Greater than 100";
  } else if (num < 50) {
      return "Less than 50";
  } else {
      return "Between 50 and 100";
  }
}

const result = test(75);
console.log(result);

