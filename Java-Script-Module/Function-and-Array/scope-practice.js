

 let a = 1;

 function outerFunction (){
  let b = 2;

 function innerFunction (){

  let c = 3;

  console.log("a:", a);  // Accessing global variable
  console.log("b:", b);  // Accessing outer function variable
  console.log("c:", c);  // Accessing inner function variable

 }
 innerFunction();

 }

 outerFunction();





