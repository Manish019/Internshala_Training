

function createCounter(){

  let count = 0;

  return function counter(){
    //  count += 1;
    count++;
     console.log(count);
  };
}


function createAdder(x){
   return function adder(y){

return x+y;


   };

}


// Create a counter and call it multiple times
const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3

// Create an adder and use it to add another number
const add5 = createAdder(5);
console.log(add5(3)); // 8
console.log(add5(10)); // 15




// quize question 
//  const x = 5;
// { const x = 10; 
// console.log(x);
//  }
//  console.log(x); //What will be the output?


//  What will be the output of the following code? 
//  (function() {
//    console.log("Hello"); 
//   })();


  // What will be the output of the following code?
  //  const x = 5; 
  //  x = 10;
  //   console.log(x);


  // What will be the output of the following code? 
  // let x = 5; 
  // function foo() {
  //    let x = 10; 
  //    console.log(x);
  //    } 
     
  //    foo();
  //     console.log(x);


  // Consider the code:
  //  function demoScope() { 
  //   if (true) { 
  //     var x = 10;
  //    }
  //    console.log(x); 
  //   }
  //     demoScope();
    // What will be the output?



    // What will be the output of the following code?
     function outerFunc(x)
      { return function innerFunc(y) 
        { 
          console.log(x + y);

         } }
         var myInnerFunc = outerFunc(5);
          myInnerFunc(3);