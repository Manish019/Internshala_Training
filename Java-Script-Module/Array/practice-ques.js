


function  manageNumbers(numbers){

  console.log('Initial Numbers:', numbers);


// to string
// function toStrings(){
//   const spstring = numbers.toString();
//   console.log(spstring);
// }

function numString(){
const spr = numbers.toString();
console.log(spr)
}
  // join

  // function joinString(){
  // const spjoin = numbers.join( ' - ');
  // console.log(spjoin);
function joinstring(){
  const joint = numbers.join(' - ');
  console.log(joint);


}
numString();
joinstring();
}
// toStrings();
// joinString();

// }

const numbers = [1, 2, 3, 4, 5];
manageNumbers(numbers);



//

// Write a JavaScript function manageShoppingCart(cart)
//  that takes an array of arrays (representing items in the cart)
//  as input and performs the following tasks:

// Add Item: Add a new item to the cart.
// Remove Item: Remove an item from the cart at index 1 using splice().
// Slice Cart: Create a sliced copy of the cart using slice() and log the 
// sliced cart.


function manageShoppingCart(cart) {

  console.log("Intial cart", cart);


  const addItem = "Keyboard";
   cart.push(addItem);
  console.log("Cart after adding item: => ", cart);

  // slice 

  cart.splice(1 , 1);
  console.log("Cart after removing item at index 1: => ", cart);

 // Slice Cart
  const slicedCart = cart.slice();
  console.log("Sliced Cart=> ", slicedCart);

}
const cart = ["Mouse", "Monitor"];
manageShoppingCart(cart);




