// higer oder function
// callback

// function that takes other function as a callback

const callback = (n) => {
    return n + 2;
}
function cube (callback, n)  {
    return callback(n)+ n
}
console.log(cube(callback, 3));

// _forEach
const num = [1, 2, 3, 4, 5];
const sumArr = arr => {
    let sum = 0;
    const callback = function (element) {
        sum += element
    }
    arr.forEach(callback)
    return sum
}
console.log(sumArr(num));

// setInterval
function sayHello() {
    console.log('hello mithlesh');
}
// setInterval(sayHello, 1000) 
// sayHello()
// hr ek second me print krega loop me

// setTimeout
function sayHelloAgain() {
     console.log('say hello again');
}
setTimeout(sayHelloAgain, 2000)
 
// forEach
let sum = 0;
const number = [8, 2, 3, 4, 5];
number.forEach(num => sum += num)
console.log(sum);

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];

countries.forEach((ele) => console.log(ele.toUpperCase()))

// map

const numbers = [1, 2, 3, 4, 5];
const plus = numbers.map((ele) => ele + ele)
console.log(plus);

const names = ['mk', 'das', 'rj'];
const bigLetter = names.map((ele) => ele.toUpperCase())
console.log(bigLetter);

const countrTeeLetter = countries.map((county) => county.toUpperCase().slice(0, 3))
console.log(countrTeeLetter);

// filter
const contrycountland = countries.filter((conty) => conty.includes('land'))
console.log(contrycountland);

const contryEndbyia = countries.filter((contry) => contry.endsWith('nd'))
console.log(contryEndbyia);

const countryhaveLetter = countries.filter((contry) => contry.length === 5)
console.log(countryhaveLetter);

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const scoreCheck = scores.filter((score) => score.score > 80)
console.log(scoreCheck);

// reduce
const no = [1, 2, 3, 4, 5];
const sum2 = no.reduce((acc, cur) => acc + cur, 10)
console.log(sum2);
// every
const Allnum = no.every((ele) =>
    typeof ele === 'string'
)
console.log(Allnum);

// find
const ages = [20, 30, 10, 50, 10, 5];
const age = ages.find((ele) => ele < 20)
console.log(age);
// some
// sort
console.log(countries.sort());
console.log(ages.sort());
