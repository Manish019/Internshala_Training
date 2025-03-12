// // fubction sharing

// // call() method we  can write a method that can be used on different objects.

const users = {
  firstName: " Manish",
  lastName: "Kumar",
};

let printfullName = function (hobby , item) { // parameters
  console.log(
    `My name is ${this.firstName}  ${this.lastName} and My hobby is ${hobby}`
  );
  console.log(
    `My favorite movie is ${item}`
  );
};
printfullName.call(users, "Cricket" , "Jan"); // arguments

// now we have another user

const user1 = {
  firstName: "Ram",
  lastName: "Gupta",
};

printfullName.call(user1, "Music", "Karz"); // arguments

/// const students

// const students = {
//   name: "Manish Kumar",
//   rollNo: 25,
//   class: "Tenth",
// };
// let printStudent = function () {
//   console.log(`My Name is ${this.name}`);
//   console.log(`My Roll No is ${this.rollNo}`);
//   console.log(`My Class  is ${this.class}`);
// };
// printStudent.call(students);

// const newStudents = {
//   name: "Rajesh Kumar",
//   rollNo: 45,
//   class: "nineth",
// };

// // printStudent.call(newStudents); 


// /// 2.  apply() method =======>  takes arguments as an array.


const students = {
  name: "Manish Kumar",
  rollNo: 25,
  class: "Tenth",
};
let printStudent = function ( hobby , color) {
  console.log(`My Name is ${this.name}`);
  console.log(`My Roll No is ${this.rollNo}`);
  console.log(`My Class  is ${this.class}`);
  console.log(`My hobby  is ${hobby}`);
  console.log(`My favorite color is ${color}`);

};
printStudent.apply(students, ["Singing", "Blue"]); // parameter is to pass is an array

const newStudents = {
  name: "Rajesh Kumar",
  rollNo: 45,
  class: "nineth",
};

// printStudent.apply(newStudents, ["Dancing", "Gold"]); // parameter is to pass is an array


// // bind () you can not directlly called the function
// // in case of bind a function is return you can call latter on it

// const printName = printStudent.bind(students,"Singing", "Blue"); // parameter is to pass is an array
// console.log(printName); // out you can give complete function
//  printName(); // retun all  print student value


// // bind examples


// const person = {
//   firstName:"John",
//   lastName: "Doe"
// }

// let personName = function(){
//   console.log(`My name is  ${this.firstName} ${this.lastName}`);
// }

// const newperson = personName.bind(person);
// console.log(newperson);
// newperson();


// //The Difference Between call() and apply()

// // The call() method takes arguments separately.
// // The apply() method takes arguments as an array.










// problems  

// Write a JavaScript function createGreeting that:

// Takes two parameters: firstName (string) and lastName (string).
// Defines an object person with properties firstName and lastName.
// Defines a function greet within createGreeting that logs a greeting message using this.firstName and this.lastName.
// Uses call, apply, and bind to invoke the greet function with different contexts:
// callGreet: Uses call to invoke greet with the person object as context.
// applyGreet: Uses apply to invoke greet with the person object and an array of arguments.
// bindGreet: Uses bind to create a bound function bindGreet that can be invoked later with the person object.

 function createGreeting(firstName, lastName) {

   const person = {
    firstName: firstName,
    lastName: lastName
   };

  // console.log(`My name is ${firstName} ${lastName}`)

  function greet (){
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  }


  function callGreet (){
      greet.call(person);

  }


  function applyGreet (){
    greet.apply(person);

}

// }



  // const callGreet = () => greet.call(person);

  // const applyGreet  = ()  => greet.apply(person);

  const bindGreet  =  greet.bind(person);


  // / / Invoke the functions
  callGreet(); // "Hello, my name is John Doe."
  applyGreet(); // "Hello, my name is John Doe."
  bindGreet(); // "Hello, my name is John Doe."
}

createGreeting("John", "Doe");

// createGreeting("John", "Doe");
// printStudent2.apply( printStudent2, "John", "Doe")


