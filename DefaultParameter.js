
// let getUser = function (name = 'Sheba', count) {
//     return 'Hello ' + name + ' Good Job ' + count;
// }
// console.log(getUser());



  function showMessage(text = "hello!") { // default parameter
    if (text === undefined) {
    //   text = 'empty message';
    }
    console.log(text);
  }
  showMessage('kuute');