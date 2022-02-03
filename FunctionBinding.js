
    // const person = {
    //     name : "feba",
    //      showName() {
    //          console.log(`My name is ${this.name} Jose`);
    //      }
    // }
    // // person.showName();

    // const humanBeing = person.showName.bind(person);
    // humanBeing();

    // const person = {
    //     name: 'Sheba'
    // }
    // const person1 = {
    //     name: 'Feba'
    // }

    // function showName() {
    //     console.log(`My name is ${this.name} Jose`);
    // }

    // const humanBeing = showName.bind(person);
    // humanBeing(); 

    // const humanBeing1 = showName.bind(person1);
    // humanBeing1(); 


// Passing the parameter.
const person = {
    name: 'Sheba'
}
const person1 = {
    name: 'Feba'
}

function showName(city) {
    console.log(`My name is ${this.name} Jose.And live in ${city}.`);
}

const humanBeing = showName.bind(person);
humanBeing('Indore'); 

const humanBeing1 = showName.bind(person1);
humanBeing1('Mandsour'); 