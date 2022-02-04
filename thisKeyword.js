
const person = {
    name : "sheba",
    walk() {
        console.log(this);
    }
};
person.walk();

const walk = person.walk;
walk();