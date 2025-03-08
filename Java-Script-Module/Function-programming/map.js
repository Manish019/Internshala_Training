// your code goes here
const arr = [1, 5, 6, 8, 7];

function square(x) {
    return x * x;

}

const squareArray = arr.map(square);
console.log(squareArray);
console.log(arr);


// second methode

// your code goes here
const arr1 = [5, 10, 16, 18, 17];

const squareArray1 = arr1.map(function square(x) {
    return x * x;

});

console.log(squareArray1);
console.log(arr1);


// now using arrow  method

const arr3 = [9, 5, 6, 8, 2];

const squareArray3 = arr3.map(x => x * x) 
console.log(squareArray3);
console.log(arr3);


// to print each element of an array is double

const doubleArray = arr3.map( x => 2 * x);
console.log(doubleArray);



/// array of an object
// to print first name of all the users
const users = [
  {
      firstName : "Manish",
      lastName : "Kumar",
      age : 45
  },
  
  {
      firstName: "Ram",
      lastName: " Pandit",
      age: 55
  } 
  
  ];
  
  const newUsers = users.map( users =>users.lastName);
  console.log(newUsers);
  