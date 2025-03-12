
// filter () filter out the  contents from an array based on some condition
// not modifiy original array
// return new array after filtering


 const arr = [ 2, 50, 8, 10, 15];

 // to print even numer of each array

//  function even(num){
//   return num  % 2 == 0;
//  }

//  const filteredArray =  arr.filter(even);
// console.log(filteredArray);  //  out put [ 2, 50, 8, 10]
// console.log(arr); // original array output [ 2.50,8,10,15]


// or


 const filteredArray =  arr.filter(
  function even(num){
    return num  % 2 == 0;
    // return num  % 2 !== 0; //  15 not  divisible by 2 

   });

console.log(filteredArray);  //  out put [ 2, 50, 8, 10]
console.log(arr); // original array output [ 2.50,8,10,15]

// to print   number is grether than 8 

const  newNum =  arr.filter( num => num > 8);
console.log(newNum); // output [50, 10, 15]


// array an object

const students = [
  {
 firstName: "Manish",
 lastName: "Kumar",
 age: 20,
 marks: 45
},

{
  firstName: "Ram",
  lastName: "kapoor",
  age: 30,
  marks: 55
 },

 {
  firstName: "Shayam",
  lastName: "Gupta",
  age: 50,
  marks: 75
 }

];


// find the students whose marks are greater than 45;

  //const listOfstudent=  students.filter(students => students.marks > 45);
  const listOfstudent=  students.filter(students => students.lastName);

  console.log(listOfstudent);



// Write a function that takes an array of numbers, doubles each value, 
// and then filters out the values greater than 10.



