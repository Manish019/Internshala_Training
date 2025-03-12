// 
const arr = [1, 2, 3]
console.log(arr[arr.length]);

// output undefine

//Suppose you have an array
//  fruits = ['apple', 'banana', 'orange', 'grape']. 
// How can you access the last element of the array?

const  fruits = ['apple', 'banana', 'orange', 'grape']
console.log(fruits[fruits.length-1]);



//Suppose you have an array words = ['hello', 'world', 'javascript'].
//  How can you convert it to a string with each word separated by a space?


const words = ['hello', 'world', 'javascript']
 console.log(words.join(' '));



 //What is the output of the following code?
 //  <br> const arr = ['a', 'b', 'c', undefined, null]; console.log(arr.join('*'));

 const arr1 = ['a', 'b', 'c', undefined, null];
  console.log(arr1.join('*'));

  // but system is giveb a*b*c**
  //  "a*b*c*undefined*null" out is this answer

  //You have an array numbers = [10, 20, 30, 40, 50].
  //  How can you access the second-to-last element of the array?


  const numbers = [10, 20, 30, 40, 50];

  console.log(numbers[numbers.length-2]);



  const numbers2 = [10, 20, 30, 40, 50];

  console.log(numbers2.join(""));



  //What is the output of the following code?  const arr = [1, 2, 3]; arr.push(4, 5); console.log(arr);
const arrs = [1, 2, 3]; 
arrs.push(4, 5); 
console.log(arrs);

//What is the output of the following code?
//  const arr = [1, 2, 3]; const lastElement = arr.pop(); console.log(arr, lastElement);

const arr5 = [1, 2, 3]; 
const lastElement = arr5.pop();
 console.log(arr5, lastElement);


// What is the output of the following code?
//  const arr = [1, 2, 3]; arr.unshift(0, -1); console.log(arr);

const arr3 = [1, 2, 3];
arr3.unshift(0, -1);
console.log(arr3);



// Write a JavaScript function manageTasks(tasks) that takes a one-dimensional array (tasks) as input and performs the following tasks:

// Add Task: Add a new task to the end of the list using push().
// Remove Task: Remove the last task from the list using pop().
// Complete Task: Complete the first task in the list using shift().
// Add Priority Task: Add a high-priority task to the beginning of the list using unshift().
// Display Tasks: Display all tasks in the list after each operation.



function manageTasks(tasks) {
console.log("Intial Task", tasks);

// add task

tasks.push("New Task");
console.log("Adding after task", tasks);

// remove task
tasks.pop("Remove Task");
console.log("Remove the last task", tasks)

// shift
tasks.shift("Complete Task");
console.log(" Complete the first task", tasks)


// unshift
tasks.unshift("high-priority task ");
console.log(" Add a high-priority task ", tasks)


}
const tasks = ["Task 1", "Task 2", "Task 3", "Task 4"];
manageTasks(tasks);

//What is the output of the following code? <br> 
// const arr = [1, 2, 3, 2, 1]; 
// console.log(arr.indexOf(2));

const ind = [1, 2, 3, 2,1]; // puting 10 to times
 console.log(ind.indexOf(2)); // last occurance of the given elements



 //What is the output of the following code? <br> 
 // const arr = [1, 2, 3, 4, 5]; arr.splice(2, 1); console.log(arr);
 const arrs1 = [1, 2, 3, 4, 5];
  arrs1.splice(2, 1); 
  console.log(arrs1);


  //What is the output of the following code? 
  //  const arr1 = [1, 2]; const arr2 = [3, 4]; const arr3 = arr1.concat(arr2); console.log(arr3);

  const arr55 = [1, 2]; 
  const arr6 = [3, 4]; 
  const arr7 = arr55.concat(arr6);
   console.log(arr7);