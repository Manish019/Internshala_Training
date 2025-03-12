//  Every java script object has a special prototype attached to it which is called prototype
//All JavaScript objects inherit properties and methods from a prototype.

// by default attached => java script Engine


 const user = {
  name : "Manish",
  city : "Delhi",

printDetails : function(){
  console.log (`My name is ${this.name}`);

}

 }

// to check on console window user

 const arr = [10, 20, 12, 5, 6]

//  console.log(typeof(arr)); object
// console.log(arr.length); // 5






//////////-------------------------- Prototype chain -------------------//////////////


// --user------->__proto__ ----------------> object.prototype
// --- user.__proto__-------->object.prototype--------------> object.prototype.__proto__----->null



let num = {
  a: 10,
  b: 20,
  resNum: function () {
    console.log(`you are amazing`);
  },
};

console.log(num);
console.log(num.a);
console.log(num.b);
// console.log(todo.desc);
num.resNum();




let todos = {
  a: 10,
  b: 20,
  desc: function () {
    console.log(`you are amazing`);
  },
};

// console.log(todos.c); //property -> undef
// console.log(todos.d()); //method -> error not a function




//   function person (first, last, age, eyecolor) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eyecolor;
// };
// person.prototype.nationality = "Hindu";

//  const newPerson = new person("Manish", "Gupta", 45, "Brown");

//  console.log(newPerson)


//  questions 
const obj ={};
const proto1 = obj.__proto__;
const proto2 = Object.getPrototypeOf(obj);
console.log(proto1 === proto2);

// out put true



//------------ Shadowing properties ---------------//
  
let myDate = new Date(2025, 3, 11); // then this check 

myDate.getFullYear = function(){  // because java script first check of that property it self
   console.log("New date of Year added"); 
    
}

//myDaye ==========> object
// getFullYear ========> function



const users = {
  name : "Manish",
  city : "Delhi",

printDetails : function(){
  console.log (`My name is ${this.name}`);

},

   toString : function(){
  console.log("to string");
}

 }










 //------------Prototypes and Inheritance ----------//

 //Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.





 


