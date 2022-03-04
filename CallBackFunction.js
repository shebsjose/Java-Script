// CallBack Function
// function printString(){
//    console.log("Tom"); 
//    setTimeout(function()  { console.log("Jacob"); }, 300); 
//   console.log("Mark")
// }

// printString();

//By Arrow Function.
function printString(){
    console.log("Tom"); 
    setTimeout(() =>  { console.log("Jacob"); }, 300); 
   console.log("Mark")
 }
 
 printString();


// function showOne(callBack) {
//       return callBack();  
// }
// function showTwo() {
//     return 'function 2';
// }
// console.log(showOne(showTwo));


// function greeting() {
//     console.log('Hello');
//   }
//   function processUserInput(callBack) {
//     var name = 'Sheba';
//     console.log(callBack);
//     callback();
//   } 
//   processUserInput(greeting);


    //  function sum(a,b) {
    //      return a + b;   
    //  }
    //  function calc(callBack) {
    //      return callBack();
    //  }
    //  console.log(calc(sum,5,2));