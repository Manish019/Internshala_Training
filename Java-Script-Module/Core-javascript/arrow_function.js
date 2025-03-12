// If the function has only one statement, and the statement returns a value, 
// you can remove the brackets and the return keyword:

// syntax  ES

const functionName = (parameter1 , parameter2) => {
  // do some work
}


const  myFunction = (a, b) => a * b; // shorthen 


// to print Hello world using arrow function

// const Hello = "";

const hello = (name) => {  /// where (name) is argument of paranthesis 
return "Hello World " + name;

};
console.log(hello("print"));

// exapmle


const sqrt = num => {
return num * num;
};

console.log(sqrt(5));



// example 3

const sum = (a, b) => {
return a * b;

}

const result = sum (5, 6);
console.log("results",result);



// const double = x => x * 2;
// console.log(double(5));


// const greet = (name = 'Guest') => Hello,  ${name}!;
// console.log(greet('Jhon'));
// console.log(greet());


const message  = `i am ${2 + 3}`;
console.log(message);


const greet = `Hello,  ${name}`;

console.log(greet);
