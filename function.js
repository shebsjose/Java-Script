// function getWeekDay(day) {
//   switch (day) {
//     case 1:
//       return "Sunday"
//     case 2:
//       return "Mon"
//     case 3:
//       return "Tue"
//     case 4:
//       return "Wed"
//     case 5:
//       return "Thu"
//     case 6:
//       return "Fri"
//     case 7:
//       return "Sat"

//     default:
//         return 'Not a Day'
    
//   }
// }
// console.log(getWeekDay(3));


// -------------------------------------------------------------------------------------------------
// const checkCondition = (x) =>{
//     if(x % 2 ==0)
//     return 'Even';
//     else
//     return 'Odd';
// }
// const a = checkCondition();
// console.log(a);


// ----------------------------------------------------------------------------------------------
// Local Variable
// function showMessage() {
//     let message = "Hello, I'm JavaScript!";
//     console.log( message );
//     //return message;
//     return 'hello';
//   }
// console.log(showMessage());


// ----------------------------------------------------------------------------------------------
// Outer variable
// let userName = 'John';  
// function showMessage() {
//   userName = "Bob";
//   let message = 'Hello, ' + userName;
//   console.log(message);
// }
//  console.log( userName );
// showMessage();
// console.log( userName );


// ----------------------------------------------------------------------------------------------
// With Variable
// function showMessage() {
//         let message = "Hello, I'm JavaScript!";
//         console.log( message );
//       }
//       showMessage();


// ----------------------------------------------------------------------------------------------
//With Parameter
//  function showMessage(name, text) {
//     console.log(name + ': ' + text);
//   }
//   showMessage('Ann', 'Hello!');
//   showMessage('Ann', "What's up?");

//   function showMessage(from, text) {
//     from = '*' + from + '*';
//     console.log( from + ': ' + text );
//   }
//   let from = "Ann";
//   showMessage(from, "Hello");
//   console.log( from );

// function showMessage(name, text){
//     console.log(name + ':' + text);
//      name = 'shebs';
//     console.log(name + ':' + text);
// }
// showMessage('Kushwash','hello');

// function sum(a, b) {
//    return a + b ;
// }
// console.log(sum(5,2));
// console.log(sum(5,5));

// let name = 'sheba';
// function getName() {
//     let a = 10;
//      let b = 20;
//     function sum() {
//         return name + ':' + (a + b);
//     }
//     return sum();
// }
// console.log(getName());


// -------------------------------------------------------------------------------------------------
// Function Recursion
// function loop(x) {
//   if (x >= 10) {
//     return 0;
//   }
// //   console.log(loop(x + 1));
// //   return x;
// }
// // loop(0);
// console.log(loop(2));

// function show(i) {
//     if (i < 0)
//       return;
//     console.log('begin: ' + i);
//     show(i - 1);
//     console.log('end: ' + i);
//   }
//   show(3);


// ----------------------------------------------------------------------------------------------
// Default values
// function showMessage(from, text) {
//     console.log( from + ": " + text );
//   }
//   showMessage("Ann");

//   function showMessage(text = "hello!") { // default parameter
//     if (text === undefined) {
//     //   text = 'empty message';
//     }
//     console.log(text);
//   }
//   showMessage('kuute');



//------------------------------------------------------------------------------------------------

// Closure Function
// var i = 10;    //  Parent Scope
// function show() {
//     var j = 20;
//     console.log(j,i);   
// }
// show();

// function outerFun() {
//     var i = " I a local variable of Outer function";
//     console.log(i);
//     function innerFun() {
//         var j = " j a local variable of Inner function";
//         console.log(j);  
//     }
//     innerFun();
//     function innerSubFun() {
//         var k = " k a local variable of Inner function";
//         console.log(k);     
//     }
//     innerSubFun();
// }
// outerFun();