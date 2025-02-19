// Comparison Operators

// > greater than sign 
// < less than sign 
// == equal to sign
// != not equal to sign
// 

let age = 18;

const adult = age <= 18; // greater than operator

 console.log("adult", adult); //  output true

let x = 10;
let y = 30;

const isXlessThanY = x >= y ; // less than operator

// console.log("comparing between this two number => ", isXlessThanY);


// == and === operator

let num1 = "30";
let num2 = 30;

console.log(num1 == num2);    //only comapare values

console.log(num1 === num2); // compare values and types of variable



// != and !== operator

let num3 = "50";
let num4 = 50;

console.log(num3 != num4); // true only comapre values  or  // they are equal values false
console.log(num3 !== num4);   // here comapre values or types  false or true ==> true





function isInt(num){
  return num % 1 == 0;
  }
  console.log(isInt(4));
  console.log(isInt(12.3));
  console.log(isInt(0.5));
  


  
