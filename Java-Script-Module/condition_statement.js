// use if to execute a block of code if condition is true
// use else to execute a block of code if condition is false
// use else if to execute block of code to bassically check new condition
// switch statement

// whether number is positive or not?


let num = 25;

if (num > 0){
  console.log("Number is Positive")
}
else{
  console.log("Number is Negative");
}


// questions To print Grade of students , marks > 90 ----> grade 'A'
// marks > 80 and marks <=90 ----> grade 'B'
// marks > 70 and marks <=80 -----> grade 'C'
//  and below this -----> Fail

let marks = 85;
let grade;

if (marks > 90){
  grade = 'A';
}
else if (marks > 80 && marks <= 90){
  grade = "B";
}
else if (marks > 70 && marks <= 80){
  grade = 'C';
}
else{
  grade = 'FAIL';
}

console.log("Grade of Students is => ", grade);