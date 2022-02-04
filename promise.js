/ const promiseFunction = new Promise((resolve, reject) => {

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