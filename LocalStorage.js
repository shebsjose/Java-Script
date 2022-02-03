
// To SetItem.
// localStorage.setItem('Name','Sheba');
// localStorage.setItem('Name1','Kushwah');


// -----------------------------------------------------------------------------------------------
// To GetItem.
// const name = localStorage.getItem('Name1');
// console.log(name);


// -----------------------------------------------------------------------------------------------
// To Clear the entrie Local Storage.
// localStorage.clear();


// -----------------------------------------------------------------------------------------------
// To remove the praticular item.
// localStorage.removeItem('name');


// -----------------------------------------------------------------------------------------------
// To Store the array.
let color = ['Red','White','Blue','Pink'];
localStorage.setItem('ColorName',JSON.stringify(color));
const name = JSON.parse(localStorage.getItem('ColorName'));
console.log(name);
