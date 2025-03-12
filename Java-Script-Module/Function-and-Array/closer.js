// A closure is the combination of a function bundled together (enclosed) with 
// references to its surrounding state (the lexical environment)


// A function along with its Lexical Environment is called as Closer

// function sum(){
//   var a = 10;

//   function num(){
//     console.log(a);
//   }

// num();

// }

// sum();   //----- 10



// function sum(){
//   var a = 10;

//   function num(){
//     console.log(a);
//   }

// return num;
// }


// const store = sum();  
// console.log(store);  // function : num
// store();  // 10





// to print the value of outer side of Scope and innner side of scope using lexical environment
// Hello Manish 5
// 25


// var sum = function(a){

//   console.log("Hello Manish", +a);
//   var c= 10;

//  return function (b){
// return a+b+c;

// }
// }

// const store = sum(5);
// console.log(store(10));



var a = "Hello";

first();
function first(){
  var b = "Hi";
  console.log(a);
  second();
  function second(){
    var c =  "world";
    console.log(c + b);
  }
}