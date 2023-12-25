//@ts-nocheck
// array
// create emty arr using Array construtor

const arr = Array();
console.log(arr);

// create emty arr using squre backet
const emtyarr = [];
console.log(emtyarr);


// print the arry and its lenght
const num = [1, 2, 3, 4, 5, 6, 7];
console.log('numbers:',num);
console.log('numbers:', num.length);

// arr with diffent data type
const difftypearr = ['mithlesh', 25, true,
    {
        city: 'mumbai',pincode:12345
    }, {
    skill:['javascript ','html']
    }]
console.log(difftypearr);

// create array using split
let js = 'java';
console.log(js.split(''));

let devices = "tv mobile pc.";
console.log(devices.split(','));

let text =
    "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
console.log(text.split(' '));
  
// array items using index
let fruit = ['apple', 'banna', 'lemon', 'organge'];
console.log(fruit.length);
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit[4]);
// last index of array
let last = fruit.length - 1;

console.log(fruit[last]);

// modifiying array element

const nom = [10, 20, 30, 40, 50];
console.log(nom);
nom[0] = 60;
nom[1] = 70;
nom[2] = 80;
console.log(nom);

// methods to manipulate array
// for emty arrays
let myarr = Array(8);
console.log(myarr);

// fill emty arr ko barane ke liye
myarr.fill('mk');
console.log(myarr);

// array concat
let myarr2 = Array(8).fill('das');
let concating = myarr.concat(myarr2);
console.log(concating);

// array index of
let myarr3 = ['m', 'k', 'd', 'r', 'l','m','r','d'];
console.log(myarr3.length);
console.log(myarr3.indexOf('d'));
console.log(myarr3.indexOf('m'));
// lastindexof
console.log(myarr3.lastIndexOf('m'));
console.log(myarr3.lastIndexOf('l'));

// incudes
console.log(myarr3.includes('m'));
console.log(myarr3.includes('p'));

// checking array

let numbers = [1, 2, 3, 4, 5, 6];
console.log(Array.isArray(numbers));
let number = 150;
console.log(Array.isArray(number));

// convert arry to sting
let nomber = [1, 2, 3, 5, 6];
console.log(nomber.toString());

// joining array elemnt
console.log(nomber.join(''));
console.log(nomber.join(' '));
console.log(nomber.join(', '));
console.log(nomber.join('/ '));

// slice array element


console.log(nomber.slice(1,4));
console.log(nomber.slice(1));
console.log(nomber.slice(0, -1));

// splice method in array
console.log(nomber.splice());
console.log(nomber.splice(0, 1));
console.log(nomber.splice(1, 2));
console.log(nomber);

// adding array for end
// push array ke end me add krta hai
let arr2 = ['item1', 'item2', 'item3'];
arr2.push('new item');
console.log(arr2);

// remove arry form end
let arr3 = ['a', 'b', 'c', 'd'];
console.log(arr3);
console.log(arr3.pop());

// remove arry form start
let arr4 = [1, 2, 3, 4, 5];
console.log(arr4);
console.log(arr4.shift());

// add arry form start

let arr5 = ['b', 'c']
console.log(arr5);
arr5.unshift('a');
console.log(arr5);

// reverce array

let reved = [1, 2, 3, 5, 6, 7, 8, 9, 10];
console.log(reved);
console.log(reved.reverse());

// sortiong element in array
let sorting = ['well', 'i', 'am', 'not', 'good', 'to', 'codig'];
console.log(sorting.sort());

// array of arrays
let arrofarry = [1, 2, 3, [5, 6, 7], [8, 9, 10]];
console.log(arrofarry);
