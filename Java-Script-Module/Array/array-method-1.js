// Array Literal
// readable, faster, and always create array literal method

// const num = ["Manish", "Sweta", "Rina"];
// console.log(num);

// const lap = new Array("Manish", "Ram", "Anish");
// console.log(lap);



const num = [24];
console.log(num);

const lap = new Array(12); // crate an array of Length 12
console.log(lap);


// to create lenght property

const color = ["red", "Yellow", "pink"];

// check length

console.log(color.length); // out put is 3
// to access first element of this array

console.log(color[0]);

// to Access last elements of this array

console.log(color[color.length-1]);


// to convert any array to string
// there are two Methos
//1. tostring()
// 2. join()


// 1. tostring()

console.log(color.toString());


// to store new variable of result
const result = color.toString();

//to check typeof this color

console.log(result);
console.log(typeof(result)); // string
console.log(result.length);



// 2. join()-------------- usiging Operator

const holi = ["red", "Yellow", "pink"];
console.log(holi.join(" % "));


function manageNumbers(numbers) {
console.log(numbers.toString);

console.log(numbers.join( ' - '));

};
const numbers = [1, 2, 3, 4, 5];
const results = manageNumbers(numbers);

console.log(results);
 // "1,2,3,4,5"
// console.log(results);    // "1-2-3-4-5"





