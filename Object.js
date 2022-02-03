// Object
// let user = {
//     name: "John",
//     age: 30,
//   };
//   console.log(user);
//   console.log(user.name);

// user['Helolo Girl!'] = true;
//   console.log(user['Helolo Girl!']);


// let user = {
//     name: "John",
//     age: 30,
//   };
//   let key = 'Hello!' + 'name';
//   console.log(user[key]);
  

// -----------------------------------------------------------------------------------------------
function makeUser(name, age) {
    return {
      name: name,
      age: age,

    };
  } 
  let user = makeUser("John", 30);
  console.log((user.name)); 