  // Loops can execute a block of code a number of times.



// types of loop

// 1. for loop  =>>>> loops through a block of code a number of times

/* syntax

for (statement 1; statement 2; statement 3) {
  // code block to be executed
}

// i= 0 (statement 1)
// i<= 100 (statement 2)
// i++ (statement 3)

*/
    // to print the Number of 1 to 100?
 
let a = 1;

for(a=1; a<=100; a++){
  console.log(a);
}

// to print the car name

const car = ['BMW', 'Volvo', 'Maruti', 'Dsizer'];
let text;

 for(let i= 0; i< car.length; i++) {
  // text += car[i] + "<br>";
  console.log(car[i]);

 }



// end for loop  





// 2. for in loop =>>>>> loops through the properties of an object


/* syntax

for (key in object) {

  //  code block to be executed

    }

    */

// exapmles 

const user = {Harry:"56", Ram:"55", Manish:"25"}

for (key in user){
console.log(user[key]);
}


// second exapmles


const numbers = [45, 4, 9, 16, 25];

for (var x in numbers){
console.log(numbers[x]);
}

// end


// 3. for of Loop =>>>>>> The JavaScript for of statement loops through the values of an iterable object.

/* syntax

for (variable of iterable) {
// code block to be executed
}
*/
// exaples 1. to print paper value 

const paper = ['Newspaper', 'Books', 'Copy', 'Hand writing copy'];

for (let papers of paper ){
console.log(papers);
}


// 2. exapmle
const cars = ["BMW", "Volvo", "Mini"];

for (var i of cars){
console.log(i);
}

// to print one by one words of java script
let language = "JavaScript";
for(let x of language){
console.log(x);
}


// 4.  While Loop =>>>> Loops can execute a block of code as long as a specified condition is true.

/* syntax

while (condition) {
// code block to be executed
}
*/

// to print the value from 1 to 10?

let value = 1;

while (value < 10) {
console.log(value);
value++;
}



// 6. Do While Loop =>>> The do while loop is a variant of the while loop. 
// This loop will execute the code block once, before checking if the condition is true,
//  then it will repeat the loop as long as the condition is true.

// code will execute altleast one

/*

syntax 
do {
// code block to be executed
}
while (condition);

*/

// print the number 1 to 5

let num = 1;

do {
console.log(num);
num++;
} while(num < 5);













