// Array is single variable which can store multiple value

// let name = ["Manish" , "Ram" , "Sita"];
// let car = ["Bus", "Volvo", "BMW"]

const car = ["Bus", "Volvo", "BMW"]

// console.log("Name of Arrya is =>", name);
// console.log(typeof("Name of Arrya is =>", name));
// console.log("Car of Arrya is =>", car);



// const fruits = ["Mango", "Banana", "Guava", "Grapes"];
// console.log("Name of Fruits is=> ", fruits);


// suppose add new array in zero index
// Array Literal

const fruits = ["Mango", "Banana", "Guava", "Grapes"];
// to check

fruits[0]= "Litchi"  // Litchi to replace Mango



console.log(fruits[0]); // Litchi
console.log("Previous array remove and place new array => ",fruits);

//   to print color in array
// Index ---- access any element inside an array
// Array follow zero base index

const color = [];
color[0] = "red"
color[1] = "yellow"

console.log("Color of Array => ", color);
// to check the index of color one
console.log("Color of Array => ", color[1]);


// one more written of Array using ne Keyword

const number = new Array(1,2.3,4);
console.log("type of this array => ",(number));
console.log("type of this array => ", typeof(number)); // check the type of this array is always print in objecy


