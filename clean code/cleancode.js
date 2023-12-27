// writing clean code
// varibles
let firstName = 'mithlesh'
let lastName = 'devdas'
const PI = Math.PI
console.log(firstName);
console.log(lastName);
console.log(PI);

// arraays
const names = ['mk', 'das', 'raj', 'dk']
const numbers = [1, 2, 3, 4, 5, 6]
console.log(numbers);
console.log(names);

// functions
const printFullName = (fname, lname) => `${fname} ${lname}`

console.log(printFullName('mith', 'das'));

// loop
for (let i = 0; i <= 10; i++){
    console.log(i);
}

// object
const person = {
    fname: 'wow',
    lname: 'jao',
    code: 25,

}
console.log(person);

// conditions

let num = 3
if (num > 0) {
    console.log(`${num} is positive number`);
} else {
    console.log(`${num} is negative number`);
}

// switch

switch (num) {
    case 3:
        console.log('woo');
        break
    case -3:
        console.log('ohh');
        break
    default:
        console.log('bhag jao');
        
}

// class
class Person{
    constructor (fname, lname) {
        this.fname = fname
        this.lname=lname
    }
}
const per = new Person('mk','das')
console.log(per);
