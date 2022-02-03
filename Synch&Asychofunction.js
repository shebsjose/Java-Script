//Synchronous Function.
// function fun2() {
//     console.log('Function2 is Starting');   
// };
// function fun1() {
//   console.log('Function1 is Starting');
//   fun2();
//   console.log('Function1 is Ending');    
// };
// fun1();


// ----------------------------------------------------------------------------------------------
//Asynchronous Function
function fun2() {
  setTimeout( () =>{
    console.log('Function2 is Starting');   
  },3000)
  
  };
  function fun1() {
    console.log('Function1 is Starting');
    fun2();
    console.log('Function1 is Ending');    
  };
  fun1();