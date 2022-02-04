
const person = {
    name :"Shebs",
    walk() {
        console.log(this);
    }
};

person.walk();

const walk = person.walk.bind(person);
walk();