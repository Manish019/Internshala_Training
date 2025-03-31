// Promise allow the program to continue with other task  without waiting for the asynchronous 
// operation to complete
//  A promise is basically an object inside in java script . which is basically used in asynchronous programming



const promise = new Promise ( function(resolve , reject){  // promise is a object
let promiseResult;
setTimeout(() => {
   promiseResult = true;
   if (promiseResult){
    resolve("Successfull");
  }
  else{
    reject("Not Successfull");
  }
  
}, 1000);

})

console.log("promise", promise);


// consuming Code

promise.then(result => console.log(result)); // Fulfilled → The operation was successful, and .then() is called.
promise.catch(err => console.log(err));  // Rejected → The operation failed, and .catch() is called.

 console.log("Hello");
 //------A Promise has three possible states:---------//
// Pending → Initial state, operation not yet completed.
// Fulfilled → The operation was successful, and .then() is called.
// Rejected → The operation failed, and .catch() is called.


// practice  question

// Write a JavaScript function simplePromiseDemo that:

// Returns a Promise.
// Logs "Promise is pending..." immediately when the function is called.
// Simulates a network request using setTimeout to delay the operation by 2 seconds.
// After the delay, resolves the Promise with a success message "Promise fulfilled: Data received!" if the operation is successful.
// After the delay, rejects the Promise with an error message "Promise rejected: Error occurred!" if the operation fails.


function simplePromiseDemo(success){

return new Promise((resolve, reject) => {
  console.log("Promise is pending...");

  setTimeout(() => {
    if (success){
      resolve("Promise fulfilled: Data received!");
    }
    else{
      reject("Promise rejected: Error occurred!");
    }
    
  }, 2000);

})
}
  
simplePromiseDemo(true)
.then((message) => {
  console.log(message);

})

.catch((error) => {
  console.log(error);
});
  
simplePromiseDemo(false)
.then((message) => {
  console.log(message);
})
.catch((error) => {
  console.log(error);
});


// simplePromiseDemo(false) // Change to false to simulate failure
//   .then((message) => console.log(message))
//   .catch((error) => console.error(error));



// question using promise
// Amazone seller
// login 2 second
// upload image 5 second
// set price $ disc  3second
// form submit  4 second
// check the list 6 second


function step1 (){
  console.log ("please wait we are login...");

 return new Promise ((resolve , reject) => {
  setTimeout(() => {
    resolve("Login completed in 2 seconds!");
  }, 2000);
 })
}
function step2(){
  console.log(`please wait upload image to.....`);
  return new Promise ((resolve , reject) => {
    setTimeout(() => {
      resolve("Image uploaded in 5 seconds!");
    }, 5000);
   })
}

function step3(){
  console.log("Please wait, setting price & discount...");
  return new Promise ((resolve , reject) => {
    setTimeout(() => {
      resolve("Price & discount set in 3 seconds!");
    }, 3000);
   })
}
function step4(){
  console.log("Please wait, submitting the form...");
  return new Promise ((resolve , reject) => {
    setTimeout(() => {
      resolve("Form submitted in 4 seconds!");
    }, 4000);
   })
}

function step5(){
  console.log("Please wait, checking the list...");
  return new Promise ((resolve , reject) => {
    setTimeout(() => {
      resolve("List checked in 6 seconds!");
    }, 6000);
   })
}


step1()
.then((res) => {
  console.log(res);
  return step2(res)

})
.then((res) => {
  console.log(res);
  return step3(res);

  
})
.then((res) => {
  console.log(res);
  return step4(res);

  
})

.then((res) => {
  console.log(res);
  return step5(res);

  
})

.then((res) => {
  console.log(res);
  console.log("All steps completed successfully!");

})
.catch(err => console.log(`Error in fetch ${err}`));

// second method  call back hell


function step1(callback){
  console.log("Please wait the login ........");

  setTimeout(() => {
    resolve("Login completed in 2 seconds!");
    callback();

  }, 2000);
  
}

function step2(image, callback){
  console.log(`please wait upload image to.....`);
  setTimeout(() => {
    resolve("Image uploaded in 5 seconds!");

      callback(image);
  }, 5000 )
}

function step3(price, callback){
  console.log("Please wait, setting price & discount...");
  setTimeout(() => {
    resolve("Price & discount set in 3 seconds!");
      callback(price);
  }, 3000 )
}
function step4(form, callback){
  console.log("Please wait, submitting the form...");
  setTimeout(() => {
    resolve("Form submitted in 4 seconds!");

      callback(form);
  }, 4000 )
}

function step5(list, callback){
  console.log("Please wait, checking the list...");
  setTimeout(() => {
    resolve("List checked in 6 seconds!");
    callback(list);
  }, 6000 )
}

step1 (function(image){
  step2(image , function(price){
    step3(price , function(form){
      step4(form, function(list){
        step5(list)
      })
    });
  });
});




//Function to simulate an asynchronous task with a delay
function fetchTask (resolve, reject) {
  return new Promise((resolve1) => {
    setTimeout(() => {
      console.log(`Step ${resolve}: Completed`);
      resolve1();
    }, reject);
  });
}
fetchTask(1, 4000)
  .then(() => fetchTask(2, 2000))  
  .then(() => fetchTask(3, 5000))
  .then(() => fetchTask(4, 3000))
  .then(() => console.log("All steps completed!"))
  .catch((error) => console.log("Error:", error));
