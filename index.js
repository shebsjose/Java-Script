// Var
// var firstName = 'Sheba';

// console.log(firstName);

// firstName = 'Shubham';

// console.log(firstName);


//  Const
// const lastName = 'Sheba';

// console.log('from line 3 =>', lastName);

// console.log('from line 6 =>',lastName);

// lastName = 'Shubham';
// console.log(lastName);

// let 
// let myName = 'Sheba';
// let myAge = 25;

// console.log(myAge, myName);

// const myName = 'Shubham'
// console.log(myName);


// const a = 5;
// const b = 5;

// const isTrue = true;
// console.log(typeof isTrue);    // Boolean

// const c = a%b;
// console.log(typeof c);   // Number

// const d = {};
// console.log(typeof d);    // Object

// const f = false;

// f ? console.log('true') : console.log('false');

// if (f) {
//     console.log('if f is true')
// } else {
//     console.log('if f is false');
// }

// if (!f) {
//     console.log(f);
//     f = 'shubham';
//     console.log(f);
//     console.log('if f is false')
// }


// const friends = [ 'Shubham', 'Sheba', 'Omar', 'Rajat', 'Om'];

// console.log(friends.length);

// for (let i = 0; i < friends.length; i++) {
//     const element = friends[i];
//     console.log(i, element);
// }

// friends.forEach((name, index) => {
//     console.log(index, name);
// });

// for (const friend of friends) {
//     console.log(friend);
// }

// const arrowFunc = () => {
   
// };

// const arrowFunc2 = () => {};
// // const filterdData = friends.filter(a => a.length > 5);

// const filterdData2 = friends.filter((a, index) => {
//     return a.length > 4;
// });

// console.log(filterdData2);
// const friendsArray = [ 'Shubham', 'Sheba', 'Omar', 'Rajat', 'Om'];

// 1. find all friend which length grater than 4.
// 2. sort friendsArray.
// 4. find all friend which length grater than 2 and less than and equal to 5.
// 5. find the index of sheba present in friendsArray.
// 6. reverse the friendsArray.

// 6. find friendsArray have omar present Inside it.
// 7. remove shubham from friendsArray.
// 8. remove om from friendsArray.
// 9. remove omar from friendsArray.

// hint - methods Pop, push , includes

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// const mappedData = numbers.map((a, index) => {
//     return a * 2;
// });
// console.log(mappedData);


// const reduceMethod = numbers.reduce((p, n) => {
//     console.log(p + '-----' + n)
//     return (p+n); 
// }, 0);

// console.log(reduceMethod);

// const string = 'Sheba';

// const concatMethod = string.concat(' Jose');
// console.log(concatMethod);

// const charAtMethod = string.charAt(1);
// console.log(charAtMethod);

// const splitMethod = string.split('');
// console.log(splitMethod);

// const joinMethod = splitMethod.join('/');
// console.log(joinMethod);

// const user = {
//     firstName: "Sheba",
//     lastName: 'jose',
//     age: 24,
    // changeAge: function (params) {
    //     console.log(this.age);   
    // }
// };

// console.log(user.age);
// console.log(user['age']);
// console.log(user.lastName);
// user.changeAge();


// Named Function
// function showAge() {
//     console.log('my age is 18');
// }
// showAge();       // calling of function


// const showfirstName = function () {
//     console.log('my name is sheba');
// }

// showfirstName();


// Arrow Function
// const showLastName = () => {
//     console.log('my surname is jose');
// }

// showLastName();


// With Parameter
// const showUser = (myName) => {
//     console.log(myName);
// };
// showUser('sheba_jose');


// const sumOfNumbers = (numbers) => {
//     const sum = numbers.reduce((p, n) => {
//         return p+n;
//     })
//     console.log(sum);
// };
// sumOfNumbers([1, 2, 3, 4, 5]);

// const car = { 
//     name: 'i20', 
//     modal: 2020, 
//     vehicleNo: 'mp091234'
// };

// const showCar = (carObject) => {
//     console.log(carObject.name);
// };

// showCar(car);

// const array = ['a', 'b']
// const object = { a:1, b:2}

// const arrayofobject = [ {a:1, b:2} , {c:3, d:4} ];

// const value = arrayofobject.filter(ele => {
//     return ele.c === 2;
// })
// console.log(value);

// const arry1 = [1, 2, 3];
// const arry2 = {...arry1};
// console.log(arry2);

// var obj1 = {
//     address : "Mumbai,India",
//     getAddress: () => {
//     console.log(this); 
//   }
// }
       
// var getAddress = obj1.getAddress;
//  var obj2 = {name:"akshay",
//              address:"Indore",getAddress};
// obj2.getAddress();  

// // const promiseFunction = new Promise((resolve, reject) => {

// // });

// const showMessage = () => {       // callback function called by resolve function
//     return "JOb Done....."          
// }


// function test1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(showMessage());
//         // reject(new Error('Whhpos!'))
//         console.log("test1");
//       }, 1000);
//   });
// }

// async function test2() {
// // test1().then((res) => console.log("resolve", res))
// // .catch(res => console.log("reject", res))
// await test1();
//   console.log("test2");
// }

// test2();


// const user = {}

// try {
//   test1();
//   if(!user.name) throw new Error('no user name')
//   console.log(user.name)
//   // .................................
//   //...................ignore code..............
//   //..............................
// } catch (error) {
//   console.log('.....this errorr.....', error);
// }

// // Map Method......
// const a = [ 1,2,3,4];

// // const newSArray = a.map(val => val * 2)

// const newSArray = a.filter(val => val > 2)
// console.log(newSArray);

// // Spread and Rest operator

//  spread
// var arr = [1,2,3];
// var arr1 =[...arr,4,5,6]
// console.log(arr1);

// var obj ={
// a:1,
// b:'Test'
// }
// var obj1= {
// ...obj,
// c:'own'
// }
// console.log(obj1);

// Rest
function sum(b,...a){
console.log(b,a);
}
sum(5,6,7);

//-----------------------------------------------------------------------------------------------------

// const a = "6"+"2";
// console.log(a);






