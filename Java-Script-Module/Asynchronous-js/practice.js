// Write a JavaScript function demonstrateAsync that:

// Logs "Start" to the console.
// Uses setTimeout() to log "Middle" to the console after 2 seconds.
// Immediately logs "End" to the console after setting the timeout.

function demonstrateAsync() {
  // write your code here
  // Log "Start" to the console

  console.log("Start");

  // Use setTimeout() to log "Middle" to the console after 2 seconds

  setTimeout(() => {
    console.log("Middle");
  }, 2000);

  // Log "End" to the console

  console.log("End");
}


// Call demonstrateAsync
demonstrateAsync();
