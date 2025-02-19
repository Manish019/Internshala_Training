// let dayNumber = new Date().getDay();

//

 let dayNumber = 5;
 let day;
 let msg;
// console.log("Today is day Number => ", dayNumber);



//  base on day Number, give the day

switch (dayNumber) {
  case 0:
    day = "Sunday";
   break;  /// if you do not give break statement then you will not go to the next day's number 
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thrusday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";

default:
  msg = "Please Provide a correct day Number";

}


if (msg) {
  console.log("message => ", msg);
}
else{
  console.log("Today is the day of Week =>", day);
}


// quiz question
 

var days = "Monday";
var message;

switch (days) {
 case "Monday":
   message = "It is the start of the week";
   break;  
 case "Tuesday":
 case "Wednesday":
   message = "Hello";
   break;
 case "Thursday":  // Fixed spelling
 case "Friday":
   message = "Goodbye";
   break;
 case "Saturday":
 case "Sunday":
   message = "Good morning";
   break;
 default:
   message = "Invalid day";
}

console.log(message);


// out put is Monday



// next qustion



