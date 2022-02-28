// function* sayHiGenerator(){
//     return 'Hello';
// }
// const result = sayHiGenerator();
// console.log(result);


// ----------------------------------------------------------------------------------------------
 function* sayHiGenerator(){
       yield 'Sheba'
       yield 'kushwah'
       yield 'Rajju'
     return 'Hello';
 }
 const result = sayHiGenerator();
 console.log(result.next());
 console.log(result.next());
 console.log(result.next());

 const resultGenertorForOf = sayHiGenerator();

 for (const iterator of resultGenertorForOf) {
     console.log(iterator);   
 }


// function* newGenerator(i) {
//     yield i;
//     yield i + 10;
//     return 'Hello'
//   }
//   const result = newGenerator(10);
  
//   console.log(result.next());
//   console.log(result.next());
//   console.log(result.next());

   

// ----------------------------------------------------------------------------------------------
// Pass a value back to ther Generator.
// function* newGenerator(){
//     yield 'Something'
//     const final = yield 'give me the value.'
//     return final
// }
// const result = newGenerator();

// console.log(result.next());
// console.log(result.next());
// console.log(result.next());

