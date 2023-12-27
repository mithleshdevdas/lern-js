
// classes

// Defining a classes
class personInfo{

}
console.log(personInfo);

const person = new personInfo()
console.log(person);

// class contructor

class Prson { constructor (fame, lname)
{

    console.log(this);
        this.fname = 'mithlesh'
        this.lname = 'devdas'
    }
}
const prson = new Prson()


console.log(prson);

class Person{
    constructor (firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}
const person1 = new Person('mithlesh', 'devdas')

const person2 = new Person('mith','dev')
const person3 = new Person('lesh', 'das')
console.log(person1);
console.log(person2);
console.log(person3);

// Default values with constructor

class Persn {
    constructor (fname = 'mk',
        lname = 'das', age = 25, marieed = true) {
        this.fame = fname
        this.lname = lname
        this.age = age
        this.marieed = marieed
    }
    
}

const persn = new Persn()
console.log(persn);

// class methods

