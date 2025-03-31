

//Callback Hell (also known as "Pyramid of Doom") occurs when multiple nested callbacks make the code difficult to read and maintain. 
// Piramid Of DOOM
function firstFunction (val , callback ){
setTimeout(() =>{
  const result = val + 1;
  callback(result);
}, 1000);
};

function secondFunction (val , callback){
 const result1 = val + 2;
 callback(result1);
};

function thirdFunction (val , callback){
  const result2 = val + 3;
  callback(result2)
};


// function doOperation (){
//   let result = 0;
//   result = firstFunction(result);
//   result = secondFunction(result);
//   result = thirdFunction(result);

// console.log(`result ${result}`);

// }

function doOperation(){
  firstFunction(0, (result) => {
    secondFunction(result, (result1) => {
      thirdFunction(result1, (result2) =>{
          console.log(`result ${result2}` );
          
      });
    });
  });
};

doOperation();

// problems question

// step1- selecting image 4s
// step2- filtered image 2s
// step3- captioned image 5s 
// step4- upload image 3s

 function selectImage (callback){
   setTimeout(() => {
   console.log("Step 1 => Selecting Image in 4 second");
    callback();
   }, 4000);
 }


 function filterImage (callback , image){
  console.log(`please wait i am applying filter to ${image}...`);
   setTimeout(() => {
    console.log("Step 2 => Filtering Image in 2 second");
     callback (image);
   }, 2000);

 }
 function captionImage (callback , caption){
  console.log(`please Add i am Caption ${caption}...`);
    setTimeout(() => {
      console.log("Step 3 => image add Caption successfuly"); 
      callback (caption);
   }, 5000);

 }

 function uploadImage (callback , upload){
  console.log(`please wait i am uploading ${upload}...`);
    setTimeout(() => {
      console.log("Step 4 => image uploaded successfuly"); 
      callback (upload);
   }, 3000);

 }



 selectImage(() => {
  filterImage(() => {
   captionImage (() => {
     uploadImage (() => {
      console.log("All Step Completed");
     });
   });
  });
 });




 
