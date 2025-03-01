// Default Parameter


// First Examples
function sumOfNumber (a , b) {
return a + b;

}

const result = sumOfNumber( 10 , 20);

console.log(result);
// out put 30

function sumOfNumber (a = 5 , b = 5) {
  return a + b;
  
  }

const results = sumOfNumber();

console.log(results); 

// output  10

// function sumOfNumber (a , b) {
//b = (b == undefined) ? 1:b;  // value of b
//   return a + b;
  
//   }
  
//   const res = sumOfNumber( 10 );
  
//   console.log(res);

  // out put Nan given



  ///++++++++++++++++++ 2. ++++++++++++++++++++++++

// spread Syntax
// The ... operator expands an iterable (like an array) into more elements:


function monthDay (q1 , q2, q3, q4){
   return month;

}


const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4]; // array form

 const years = {...q1, ...q2, ...q3, ...q4}; 


console.log("Month is print Array Form => ", year);


console.log("Month is print Object Form => ", years);


// Rest Parameters
// The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
// Q What is the purpose of the rest parameter (...rest) in JavaScript functions?
//  The rest parameter (...rest) gathers remaining arguments into an array.

function sum( a, b, ...args) {

  console.log("value of a", a);
  let sum = 0;
  for (let value of args){
  sum = sum + value;
    
}
  return sum;
}

const resultSum = sum(5, 7, 8, 10 , 25);
console.log("The value of total sum is => ", resultSum);



