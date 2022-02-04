
const person = {
    talk(){
        var self = this;
        setTimeout(() =>{
            console.log("This",this);
        },1000);  
    }
};
person.talk();