
//-----------------------------------------------------------------------------------------------------
// 3. sum the all array Element.
// let sum =0;
// const array = [1, 90, 24, 0, 7, 35, 89, 68, 5, 2];
// array.forEach(myfunction);

// function myfunction(items) {
//     sum += items;  
// }
// console.log(sum);


// ----------------------------------------------------------------------------------------------------
// 1. find all number grater than 10.
// const array = [1, 90, 24, 0, 7, 35, 89, 68, 5, 2];

// const greaterno = array.filter((a) =>{
//     return a > 10;
// })
// console.log(greaterno);


// ----------------------------------------------------------------------------------------------------
// 5. Short the array given array.
// const array = [1, 90, 24, 0, 7, 35, 89, 68, 5, 2];

//  array.sort();
//  console.log(array);


// ----------------------------------------------------------------------------------------------------
// 4. find all number grater than 10 and less than 70.
// const array = [1, 90, 24, 0, 7, 35, 89, 68, 5, 2];

// const number = array.filter((a) => {
//     return( a > 10 && a <70);
// })
// console.log(number);


// ----------------------------------------------------------------------------------------------------
// 5. find there is 0 value present in array.
//  const array = [1, 90, 24, 0, 7, 35, 89, 68, 5, 2];
  
//  const number = array.filter((a) => {
//      return a==0;
//  })
//  console.log(number);


// ----------------------------------------------------------------------------------------------------
//  // 6. reverse the array.
//  const array = [1, 90, 24, 0, 7, 35, 89, 68, 5, 2];

//  array.reverse();
//  console.log(array);


// ----------------------------------------------------------------------------------------------------
// 1. find all friend which length grater than 4.
// const friendsArray = [ 'Shubham', 'Sheba', 'Omar', 'Rajat', 'Om'];

// const array = friendsArray.filter((a) => {
//     return a.length > 4
// })
// console.log(array);


// ----------------------------------------------------------------------------------------------------
// 2. sort friendsArray.
// const friendsArray = [ 'Shubham', 'Sheba', 'Omar', 'Rajat', 'Om'];

// friendsArray.sort();
// console.log(friendsArray);


// ----------------------------------------------------------------------------------------------------
// 4. find all friend which length grater than 2 and less than and equal to 5.
// const friendsArray = [ 'Shubham', 'Sheba', 'Omar', 'Rajat', 'Om'];

// const number = friendsArray.filter((a) =>{
//     return (a.length > 2 && a.length <= 5)  
// })
// console.log(number);


// ----------------------------------------------------------------------------------------------------
// 5. find the index of sheba present in friendsArray.
// const friendsArray = [ 'Shubham', 'Sheba', 'Omar', 'Rajat', 'Om'];

// const indexOfSheba = friendsArray.indexOf('Shubham');
// console.log(indexOfSheba);


// ---------------------------------------------------------------------------------------------------
// 6. reverse the friendsArray.
// const friendsArray = [ 'Shubham', 'Sheba', 'Omar', 'Rajat', 'Om'];

// friendsArray.reverse();
// console.log(friendsArray);


// ---------------------------------------------------------------------------------------------------

// hint - methods Pop, push , Includes

// 6.find friendsArray have omar present Inside it.
// const friendsArray = [ 'Shubham', 'Sheba', 'Omar', 'Rajat', 'Om'];

// const includemethod = friendsArray.includes('pagal');
// console.log(includemethod);


// ----------------------------------------------------------------------------------------------------
// 8. Add kushwah in friendsArray.
// const friendsArray = [ 'Shubham', 'Sheba', 'Omar', 'Rajat', 'Om'];

// friendsArray.push('kushwah');
//  console.log(friendsArray);


// ----------------------------------------------------------------------------------------------------
// 10. Remove last element from friendsArray.
// const friendsArray = [ 'Shubham', 'Sheba', 'Omar', 'Rajat', 'Om'];

//  friendsArray.pop();
// console.log(friendsArray);


// ---------------------------------------------------------------------------------------------------
//concat()

// const friendsArray = [ 'Shubham', 'Sheba', 'Omar', 'Rajat', 'Om'];
// const friends=['shebs', 'Jose'];

// const  friend = friendsArray.concat(friends);
// console.log(friend);


// ---------------------------------------------------------------------------------------------------
// shift()

// const friendsArray = [ 'Shubham', 'Sheba', 'Omar', 'Rajat', 'Om'];
// friendsArray.shift();

// console.log(friendsArray);


// ---------------------------------------------------------------------------------------------------
// unshift()
// const friendsArray = [ 'Shubham', 'Sheba', 'Omar', 'Rajat', 'Om'];
// friendsArray.unshift('kushwah');

// console.log(friendsArray);


// ---------------------------------------------------------------------------------------------------
// splice()
// const friendsArray = [ 'Shubham', 'Sheba', 'Omar', 'Rajat', 'Om'];

// friendsArray.splice(1,0,'kushwah');
// console.log(friendsArray);


// ---------------------------------------------------------------------------------------------------
// slice()
// const friendsArray = [ 'Shubham', 'Sheba', 'Omar', 'Rajat', 'Om'];

// friendsArray.slice(2,4);
// console.log(friendsArray);


// ---------------------------------------------------------------------------------------------------
// Fill()
// const friendsArray = [ 'Shubham', 'Sheba', 'Omar', 'Rajat', 'Om'];
// friendsArray.fill(5);

// console.log(friendsArray);


// ----------------------------------------------------------------------------------------------------
// find()
// const friendsArray = [ 4,2,9,8];
// const findMethod = friendsArray.find((a) => {
//     return a > 9;
// });

// console.log(findMethod);


// ----------------------------------------------------------------------------------------------------
//map()

// const friendsArray = [ 4,2,9,8];

// const mapMethod = friendsArray.map((a,index) => {
//     return a * 2;
// });
// console.log(mapMethod);


// ----------------------------------------------------------------------------------------------------
//filter()

// const friendsArray = [ 4,2,9,8]; 

// const filterMethod = friendsArray.filter((a) => {
//    return a > 5;
// });
// console.log(filterMethod);


// ----------------------------------------------------------------------------------------------------
// reduce()

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// const reduceMethod = numbers.reduce((p,n) => {
//     console.log(p + '----' + n);
// return (p + n);
// },0);
// console.log(reduceMethod );

// ----------------------------------------------------------------------------------------------------
// charAt()

// const string = "sheba";

// const charAtMethod = string.charAt(2);
// console.log(charAtMethod);


// ----------------------------------------------------------------------------------------------------
// split() and join()

// const string = "sheba";

// const splitMethod = string.split('');
// console.log(splitMethod );

// // join ()
// const joinMethod = splitMethod.join('-');
// console.log(joinMethod );


// ----------------------------------------------------------------------------------------------------
// object

// const user = {
//     firstName : "sheba",
//     lastName : "Jose",
//     Age : 25,
// }
// console.log(user);
// console.log(user.firstName);
// console.log(user.Age);


// ----------------------------------------------------------------------------------------------------
// object with parameter

// const user = {
//          firstName : "sheba",
//          lastName : "Jose",
//          age : 25,

//          changeAge : function (params) {
//              console.log(this.age);
//          }
//      }
//      user.changeAge();


// ----------------------------------------------------------------------------------------------------
// function 

// function showName(){
//     console.log("my name is Sheba Jose");
// }
// showName();


// ----------------------------------------------------------------------------------------------------
//  function stored in variable

// const showfirstName = function(){
//     console.log("My first name is sheba");
// }
// showfirstName();


// ----------------------------------------------------------------------------------------------------
// Arrow function
 
// const showLastName = () => {
//     console.log("My last name is Jose");
// }
// showLastName();


// ----------------------------------------------------------------------------------------------------
// Arrow function with paramters

// const showUser = (myName) => {
//     console.log(myName);
// }
// showUser('sheba Jose');


// ----------------------------------------------------------------------------------------------------

// const sumOfNumber = (number) =>{
//     const sum = number.reduce((p,n) => {
//         return p+n;
//         })
//         console.log(sum);
// };
// sumOfNumber([1,2,3]);


// ----------------------------------------------------------------------------------------------------
// Spread Operator

// function sum( a,b,c){
//     return a+b+c;
// }
// const number = [1,2,3] ;
// console.log(sum(...number));

//Spread operator with array

// const arrg1 = [ 1,2,3];
// const arrg2 = [...arrg1];
// console.log(arrg2);5

// Spread operator with object

// const arrg1 = [ 1,2,3];
// const arrg2 = {...arrg1};
// console.log(arrg2);


// ----------------------------------------------------------------------------------------------------



// const promiseFunction = new Promise((resolve, reject) => {

// });

const showMessage = () => {       // callback function called by resolve function
    return "JOb Done....."          
}


function test1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(showMessage());
        // reject(new Error('Whhpos!'))
        console.log("test1");
      }, 1000);
  });
}

async function test2() {
// test1().then((res) => console.log("resolve", res))
// .catch(res => console.log("reject", res))
await test1();
  console.log("test2");
}

test2();


const user = {}

try {
  test1();
  if(!user.name) throw new Error('no user name')
  console.log(user.name)
  // .................................
  //...................ignore code..............
  //..............................
} catch (error) {
  console.log('.....this errorr.....', error);
}


const a = [ 1,2,3,4];

// const newSArray = a.map(val => val * 2)

const newSArray = a.filter(val => val > 2)

console.log(newSArray);

































