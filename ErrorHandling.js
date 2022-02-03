
let a = " Hello Sheba!"
a = undefined;
if(a != undefined){
    throw new Error('This is not a undedined');
}
else{
    console.log('This is undedined'); 
}
try {
    //  jhjkhjknn;
    console.log('We are in try Block');
    // funtionShow();
} catch (error) {
    console.log('Are You Fine ?');
    // console.log(error.name);
    // console.log(error.message);
}finally{
    console.log('Finally will run atleast always');
}