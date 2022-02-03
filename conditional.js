// let accessAllowed;
// let age = 'How old are you?'

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// console.log(accessAllowed);

let age = ('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
 (age < 18) ? 'Hello!' :
 (age < 100) ? 'Greetings!' :
 'What an unusual age!';

console.log( message );
