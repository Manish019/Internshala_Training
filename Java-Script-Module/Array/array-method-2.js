// at ()  is basissically used to axisis of any element of an array

const numbers = [4, 10, 50, 20];

// to axis elements of any index of this array

console.log(numbers[2]);
console.log(numbers.at(1)) // we can also write  this type

// this is also called one ay of indexing of an array

///------------------------///////////-----------------------//////////

/// araya method like

// 1. POP() method ----------- Basicaly removes to last element from an array
// pop() method retun pop of the element


const colors = ["Red" , "Yello", "Green" , "Pink"]

// remove last element of  array

colors.pop();
console.log(colors)

// no we have to check pop element of an array

const result = colors.pop();
console.log("Last element of array is pop => ", result);

 colors.pop();
 console.log(colors);


 //////////////-------------------/////////////----------------------------------------------/////



// 2. PUSH() method ---------- Bassically push the last element at the End of array
// push () return ne length of an array

const color1 = ["Red" , "Yello", "Green" , "Pink"]

// color1.push("Orange");
const res = color1.push("Orange");
console.log("New color is => ", res);

// push again 
color1.push("Gray");
color1.push(25); // push number also
console.log(color1);

// check length of this all array

console.log("Length of This array is => ", color1.length);

// check Index of this all array

console.log("Index of this aarya is => ", color1[5]);



////////////////////-------------------- Next Method -------------------//////////////////////////

// Shifting

//1. Shift() method - to removes element from beginning/starting of an array

const fruit = ["Mango", "Banana", "Grapes"];

// fruit.shift();

// to check 
const fru1 = fruit.shift();
console.log("Remove First Element of fruit is => ",fru1);

console.log(fruit);


// unshift() method  add elements at first/beginning of an array

// to return new length of an array

const fruits = ["Mango", "Banana", "Grapes"];

// fruits.unshift("Papaya");
const res3 = fruits.unshift("Papaya");
console.log("Length of the fruit an array => ",res3);

const ress= fruits.unshift(5);
console.log(ress); // length check
console.log(fruits);



















