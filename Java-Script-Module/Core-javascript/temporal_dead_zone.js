
// Temporal Dead Zone (TDZ)
// Are let and const variables Hoisted?

// Yes

// console.log(a); // First Declearing Value
// // var a =  400; // After Initialization   // output Undefine

// let a = 500; //   Uncaught ReferenceError:----->  Cannot access 'a' before initialization

console.log(b);

let a = 50;
const c = 44;
var x = 20;

console.log(a);
console.log(c);

/// TDZ means let and const variables they stay in the TDZ till the value is initialize to them.

//  We cn only access the value  till the value is given 
// We can not access value of let and const before they are initialize

//Variables defined with let and const are hoisted to the top of the block, but not initialized.


