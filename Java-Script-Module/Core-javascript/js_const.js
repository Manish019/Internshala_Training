let a = 100;  // block scope

let z; //initialize
z = 10; // we can access later on




const x = 50; // block scope
const y = 40;
// const y = 55;  we can not re-declared and re-assign  y
// y = 80;

// const p; ================> we can't access later on
// p = 50;




{

const y = 75;
console.log(y); // but e can access inside the block


}

 // console.log(y); // we can not access y out side of block


 // Exapmles

 const fruits = ['Banana', 'Apple', 'Mango'];
 // we can update one more fruits in fist before Banana
  fruits[3] = "Papaya";

  console.log(fruits);

  //fruits = [1, 2, 3]; // type error


  // Example 2

  const user = {firstName:'Manish', lastName:'Aryan'};

// we can update one more object in after last name 

user.hobby = 'Cricket'; // this is right 

console.log(user);

// but e can not access

// user = {}; /// type error














































