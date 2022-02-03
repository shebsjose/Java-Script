// Break Statement
// function testBreak(x) {
//     var i = 0;
//     while (i < 6) {
//       if (i == 3) {
//         break;
//       }
//       i = i + 1;
//     }
//     return i * x;
//   }
//   console.log(testBreak(2));


// ---------------------------------------------------------------------------------------------
// Continue Statement
// let text = '';
// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     continue;
//   }
//   text = text + i;
// }
// console.log(text);


// ---------------------------------------------------------------------------------------
// For of Loop
// const names = ['React', 'JavaScript'];
// for( let name of names){
//     console.log(name);
// }

// const arr = [3, 5, 7];
// for (let i of arr) {
//    console.log(i); 
// };


// -------------------------------------------------------------------------------------------
// For in loop
// const names = {
//     yt : 'YouTube',
//     fb : 'FaceBook' 
// };
// for( let n in names){
//     console.log(n);
// };

// const arr = [3, 5, 7];
// arr.foo = 'hello';  // it gives index 
// for (let i in arr) {
//     console.log(i); 
//  }


// ------------------------------------------------------------------------------------------------
// For Each Loop
const arr = [ 4,2,3];
arr.forEach(a => {
    console.log(a);
})