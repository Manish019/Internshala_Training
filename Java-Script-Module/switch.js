// let dayNumber = new Date().getDay();

//

let dayNumber = 5;
console.log("Today is day Number => ", dayNumber);

let day;

let msg;


//  base on day Number, give the day

switch (dayNumber) {
  case 0:
    day = "Sunday";
   break;  /// if you not give break statement than you will not go to the next day number 
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


