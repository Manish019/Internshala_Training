
// synchronous code start
console.log("Learning Java Script"); // first print this

// set time out
// Macrotasks execute after Microtask Queue
setTimeout(() => {
  console.log("Learning Development"); // fourt print this after web api
  
}, 2000); // 2 second => 2000


// web api Fetch
// The Microtask Queue executes before the Macrotask Queue

fetch('https://dummyjson.com/products')
.then(res => res.json())           // Promises (.then() callbacks) always run before setTimeout callbacks, even with setTimeout(..., 0).
.then(json => console.log(json)); // third print this

// now again Print normal Execution
// synchronous code End
 console.log("Start React Js"); // second print this
 



 //Example: Callback Queue vs. Microtask Queue
// 1. "Start" (Synchronous)
 console.log("Start");  

// 5. "setTimeout" (Macrotask from Callback Queue)
 setTimeout(() => {
   console.log("setTimeout");
 }, 0);
 
 // 3. "Promise 1" (Microtask)
 Promise.resolve().then(() => {
   console.log("Promise 1");
 })
 //"Promise 2" (Microtask)
 .then(() => {
   console.log("Promise 2");
 });
 
 //2. "End" (Synchronous)
 console.log("End");



//  Execution Order
// "Start" (Synchronous)

// "End" (Synchronous)

// "Promise 1" (Microtask)

// "Promise 2" (Microtask)

// "setTimeout" (Macrotask from Callback Queue)
 
//========================//

// 1. How the Callback Queue Works

//1. Synchronous code runs first.
//2.  Microtasks (from the Microtask Queue) execute next.
//3. Macrotasks (from the Callback Queue) execute after all Microtasks are cleared.
//4.  The event loop picks the first task from the Callback Queue and executes it.
//5. Steps 2–4 repeat in each event loop cycle.