

const promiseObj= fetch('https://dummyjson.com/products/1');
console.log(promiseObj);
 promiseObj.then(response => response.json()).then(result => console.log(result));
 promiseObj.catch(er => console.log(er));
 console.log("Started Reuest!");





 const dataObj= fetch('https://api.tvmaze.com/search/shows?q=girls');
 console.log(dataObj);
 dataObj.then(response => response.json()).then(result => console.log(result));
 dataObj.catch(er => console.log(er));
 console.log("Started Reuest!");
 
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


 
 
 
 
 

// Practice Question Write a JavaScript function fetchData that:

// Returns a Promise.
// Simulates a network request using setTimeout to delay the operation by 2 seconds.
// Resolves the Promise with a success message "Data fetched successfully!" if the simulated request is successful.
// Rejects the Promise with an error message "Error fetching data!" if the simulated request fails.
// Additionally, create a function processData that:

// Calls the fetchData function.
// Uses .then() to handle the successful resolution of the Promise and logs the success message to the console.
// Uses .catch() to handle the rejection of the Promise and logs the error message to the console.



function fetchData(success) {
  
return new Promise((resolve, reject) => {

  setTimeout(() => {
    if (success){
      resolve("Data fetched successfully!");
    }
    else{
      reject("Error fetching data!");
    }
    
  }, 2000);
})
}


function processData(success) {
  fetchData(success)
  .then((message) => {
    console.log(message);
    
  })
  .catch((err) => {
    console.log(err);
    
  })
}

processData(true);

processData(false);

