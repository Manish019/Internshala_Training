localStorage.setItem("Name", "Manish");  // get any key of item
const value = localStorage.getItem("Name");
console.log(value); // print => Manish

const value1 = localStorage.getItem("Name1"); 
console.log(value1); // print => null



localStorage.setItem("Roll No", "10");

// // remove any key item

localStorage.removeItem("Name");


// // basically used for clear the entire local storage value are present
 localStorage.clear()

// to check the length of local stogare of items

localStorage.setItem("Name", "Manish");
localStorage.setItem("Roll No", "10");
console.log(localStorage.length); // out put  me 2
console.log(localStorage.key(0)); // to check index of the kye 


localStorage.hobby = "Cricket";
// if you delete the hobby than we use
delete localStorage.hobby;



