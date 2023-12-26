//  function
function sqr() {
    let num = 2;
    let sq = num * num;
    console.log(sq);
}
sqr()

// function without parameter

function addTwoNum() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
    console.log(sum);
}
addTwoNum();

function fullname() {
    let Fname = 'mithlesh'
    let Lname = 'devdas'
    let fullName = Fname + Lname
    return fullName
}
console.log(fullname());

// function with one parameter

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(10));

function square(num) {
    return num * num
}
console.log(square(10));

function add (num) {
    return num + num
}
console.log(add(100));

function minus(num) {
    return num - num
}
console.log(minus(10));



function divid(num) {
    return num / num
}
console.log(square(50));

// function with two parametr

function sumTwoNum(num1,num2) {
    let sum = num1 + num2;
    return sum
}
console.log(sumTwoNum(10, 5));

// function with many parameter

function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum =sum + arr[i]
    }
    return sum
}
const numbers = [1, 2, 3, 4, 5, 6];
console.log(sumArr(numbers));


// function with unlimited number of parameter in regular function

function sumAllNum() {
    console.log(arguments);
}
sumAllNum(1,2,3,4,5)

function sumAllNums() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
console.log(sumAllNums(1,2,3,4,5));
console.log(sumAllNums(10, 15, 25));

// Unlimited number of parameters in arrow function

const sumAllNumbers = (...args) => {
    console.log(args);
}
sumAllNumbers(1, 2, 3, 4)

const sumofnums = (...args) => {
    let sum = 0;
    for (const element of args) {
        sum += element
    }
    return sum
}
console.log(sumofnums(2, 5, 3, 20));

const anonymousfun = function () {
    console.log('i am mithlesh');
}
anonymousfun()

// expresion function
const plus = function (n) {
    return n+n
}
console.log(plus(5));

// arrow function
const div = n => {
    return n / n
}
console.log(div(5));

// functin to defult paramiter
const greeting = (nam = 'mithlesh')=> {
    let mgs = `${nam}, welcome to coding `
    return mgs
}
console.log(greeting());
console.log(greeting('devdas'));

// calcute age
const calcAge = (bithyear, curryear = 2023) => {
    let age = curryear - bithyear
    return age
    
}
console.log('age:', calcAge(1997));


