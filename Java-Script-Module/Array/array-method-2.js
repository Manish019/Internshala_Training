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


/////////---------------------------------- Delete, splice, slice method -------------------------//////////////////////

// 1. delete method 

// delete method is used to delette any element from an array

const a = ["Manish" , "Ram" , "Sita"];

delete a[1]; // delete  method will maintain theempty space inside the array after delete the element
console.log(a);


///////------------- Splice() method--------------////////////////

// splice()
 // Splice method for rmoving and addng the new element from an array 
 // and only removing and only adding also


 const x = [1, 5, 52, 8, 10, 25, 66]
 x.splice(2,4); // to start index 0,1,2 == 52 of index two
                 // now counnt the  four element starting from index 2  to 4 [ 52, 8, 10, 25];
 console.log(x); // out put[1,5,66]


 const arr = [1, 5, 52, 8, 10, 25, 66]

 arr.splice(0, 3)
console.log(arr)

// adding new Element


const arr1 = [1, 5, 52, 8, 10, 25, 66]

arr1.splice(4, 2 , 250, 300, 400)
console.log(arr1) // [1, 5, 52, 8, 250,300,400,66]




const arr2= [1, 5, 52, 8, 10, 25, 66]

arr2.splice(0, 2 , 250)
console.log(arr2) // [250, 52, 8, 10, 25, 66]


//-------------- Slice ()---------------/////

// slice() it is used to bassically slicing of an array
// The slice() method selects from a given start, up to a (not inclusive) given end.



const ft1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// const frts = ft1.slice(1); modified the original array

const frts = ft1.slice(1 , 3); // End Index is not Included only
console.log(frts);

console.log(ft1);




const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const myBest = fruits3.slice(-3, -1); // second last element of an array

console.log(myBest);



// const fruits4 = ["Banana", "Orange", "Lemon", "Apple", "Mango" , 1, 5, 52, 8, 10, 25, 66];
// const myBest1 = fruits4.slice(-6, -2); // second last element of an array

// console.log(myBest1);



//-------------- tosplice()--------------//////////

// tospliced()
// The toSpliced() method adds and/or removes array elements.
// The toSpliced() method returns a new array.
// The toSpliced() method does not change the original array.


// const frt1 = ["Banana", "Orange", "Apple", "Mango"];
//  const rust = frt1.toSpliced (2, 0 , "Litchi", "Papaya");
//  console.log(rust); // it will add new array of index 2 to 0

//  console.log(frt1); // it will not change original array

const frt1 = ["Banana", "Orange", "Apple", "Mango"];
 const rust = frt1.toSpliced (2, 1 , "Litchi", "Papaya");
 console.log(rust); // it will add new array of index 2 to 0

//  console.log(frt1); // it will not change original array




///---------------- concatinate ---------------------------///

// concat


const numbs = [1, 3, 5, 8, 7]
const numbs1 = [10, 50, 60, 70]
const num3 = [10, 11, 12, 13, 14]

// const newArray = numbs.concat(numbs1,); /// concat two digit of an array

const newArray = numbs.concat(numbs1, num3);  /// concat three digit of an array
console.log("Adding to array from concat => ",newArray);
console.log("starting Arrya =>", numbs);



/// concat three digit of an array
// const numbs = [1, 3, 5, 8, 7]
// const numbs1 = [10, 50, 60, 70]
// const num3 = [10, 11, 12, 13, 14]


// const newArray = numbs.concat(numbs1, num3);
// console.log("Adding to array from concat => ",newArray);
// console.log("starting Arrya =>", numbs);



//------------- flat --------------------///

// The flat() method concatenates sub-array elements.

// and the original array remains un changed

// const myArr = [[1,2],[3,4],[5,6]]; //  nested array
//     const newFlatend = myArr.flat();
//     console.log("New flated array =>", newFlatend);

//     console.log(myArr);

const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
    const newFlatend = myArr.flat(2);
    console.log("New flated array =>", newFlatend);

    console.log(myArr);

///----------------------  searching of an array -----------------------///


// 1. indexOf
//The index of the first element with a specified value
// The findIndex() method executes a function for each array element.


const ft2 = ["Banana", "Orange", "Apple", "Mango"];

//  const index = ft2.indexOf("Apple");
//  console.log("Index of my array is =>", index);


const index = ft2.indexOf("Mango");
//const index = ft2.indexOf("25000"); means this element is not present of my array -1 is alays return

console.log("Index of my array is =>", index);



//--------------- last index --------------------//

// lastIndexOf()
// The lastIndexOf() starts at a specified index and searches
//  from right to left (from the given postion to the beginning of the array).

const add = [5, 50, 10, 70, 55, 20 , 10]; // puting 10 to times
 console.log("Last index array of  ten => ",add.lastIndexOf(10)); // last occurance of the given elements

 console.log(add);


 // includes
  // to check whether the element is present in an array or not


    console.log(add.includes(55)); // true given

    console.log(add.includes(70, 3)); // And check the indexing position also




























