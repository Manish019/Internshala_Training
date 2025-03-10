// globl scope
// this keyword always point to the global object 
// and in case a browser this is called Window object

// console.log(this);


// "this" in Function Scope

// the value of this keyword inside the function is known as window

//In function , this keywords point to global object
// function manish (){
//   console.log("Manish");
//   // console.log(this); // global object

// }

// manish();


///////// But in strict mode, this keywords becomes undefine ////////////////////

// "use strict" // basically provide instructor rule in java script
// function ram (){
//   console.log("Ram");
//   console.log(this); // global object

// }

// ram(); // out => Ram Undefine
// window.ram(); // but in other method value will print browser  will give give window object its self







//////////////////// "this" Inside Object's Method ///////////////////////

// what is method?
// A method is a function that is defined inside a class and is associated with an object

// whenever we have a function which is written as inside an object, this is called method

// this keyword inside object's method point to that object


const sam = {
  x : 10,
  p : "Manish",
 y : function() {

 console.log(this);
 
}

};
sam.y();




//What is this?
//The this keyword refers to different objects depending on how it is used:



//// "this" Inside Arrow Function

// Arrow Function does not have their own its
// It retun the value  of this of enclosing lexical context

 

 const obj = {
 x: 10,

 y: () => {
  console.log(this);
 }
 }

 obj.y();


// or ////



const newObj = {
  x: 10,
 
z: function (){
  
//  let p =  ()  => {

  const y =  () => {  // y function is present in inside 
                      // the Z function so enclosing lexical context is  this method is called newObj()
 console.log(this);
   }
   y();
 }
// p();
  // console.log(this);
 
}
 
  newObj.z();
 




  // problems

//   Write a JavaScript function createCounter that:

// Initializes a property count to 0 within an object counterObj.
// Defines a function increment within createCounter that:
// Increments this.count by 1.
// Logs the current value of this.count.
// Returns the increment arrow function.


// function createCounter() {
//   const counterObj = {

//     count : 0,
//   };

 
//   counterObj.increment = function(){
//      counterObj.count++;
//      console.log(this.count);
//   }

//  return counterObj;

// }

//  const counter = createCounter();

//  counter();
//  counter();
//  counter();





//  const obj5 = {
//   name: "manish",
 
//   sayHello : () => {
//    console.log(` hello, ${this.name} !`);
//   }
//   }
 
//   obj5.sayHello();

 
const logThis = () => {
  console.log(this);
};

const myObj 
= { foo: logThis };
myObj.foo();







