// create  empty object 
const emtObj = {}
console.log(emtObj);

const person = {
    fname: 'mithlesh',
    lname: 'devdas',
    age: 25,
    country: 'india',
    skills: [
        'html','css','javascript'
    ],
    ismarrid: true,
     fullname: function  (){
return `${this.fname} ${this.lname}`
    }
}
console.log(person);

// acceing value using
console.log(person.fname, person.age);

// value can be access using square backet[]
console.log(person['skills']);
console.log(person['ismarrid']);

// creting object method
console.log(person.fullname());

// setting new key for an object
person.nation = 'india'
person.country = 'bharat'
person.job = 'web devloper'
person.skills.push('react')
person.ismarrid = false
console.log(person);

// object methods
const copy = Object.assign({}, person)
console.log(copy);

// object keys
const key = Object.keys(copy)
console.log(key);
// onject values
const value = Object.values(copy)
console.log(value);
// object entris
const enteris = Object.entries(copy)
console.log(enteris);

// check properties
console.log(copy.hasOwnProperty('fname'));
console.log(copy.hasOwnProperty('age'));
