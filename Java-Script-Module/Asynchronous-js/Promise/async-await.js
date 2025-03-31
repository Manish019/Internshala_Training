// The async keyword is used before a function to indicate that it always returns a promise.


// norml way written
function fetchData(){
   fetch("https://dummyjson.comss/products/1")
   .then(response => response.json())
   .then(result => console.log(result))
   .catch(err => console.log(err) // using error written this
  )

   
}

fetchData();


// Async / Await
async function fetchDataResponse(){
  // using try and catch  ==>>>>  hander error
try{
  const response =  await fetch("https://dummyjson.com/products/1"); // await is reserve keyword
  const result = await response.json();
  console.log(result);
}

catch(error){
  console.log(error);
}
}

fetchDataResponse();


// hander error


// problems
// Write a JavaScript function fetchUserData that:

// Returns a Promise.
// Simulates a network request using setTimeout to delay the operation by 2 seconds.
// Resolves the Promise with user data { id: 1, name: 'John Doe' } if the request is successful.
// Rejects the Promise with an error message "Failed to fetch user data" if the request fails.
// Next, create an async function getUserData that:

// Calls the fetchUserData function.
// Uses await to wait for the Promise to be resolved or rejected.
// Logs the user data if the Promise is resolved.
// Catches and logs the error if the Promise is rejected.
function fetchUserData(success) {
  // Return a Promise
  return new Promise((resolve, reject) => {
      // Simulate a network request with setTimeout
      setTimeout(() => {
          if (success) {
              // Resolve the Promise with user data
              resolve({ id: 1, name: 'John Doe' });
          } else {
              // Reject the Promise with an error message
              reject("Failed to fetch user data");
          }
      }, 2000);
  });
}

async function getUserData(success) {
  try {
      // Try to call fetchUserData with await
      const userData = await fetchUserData(success);
      // Log the user data if successful
      console.log(userData);
  } catch (error) {
      // Catch and log the error if the request fails
      console.log(error);
  }
}

// Demonstrate successful request
getUserData(true);

// Demonstrate failed request
getUserData(false);


