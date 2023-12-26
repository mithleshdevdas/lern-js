// loops in javascript

// for loop
// for loop structure

/*
for (initization, condtion, increment / decremet){
    // code goies here
}
*/

// for loop increment
for (let i = 1; i <= 10; i++){
    console.log('incerment',i);
}

// for loop decrement
for (let j = 10; j >= 1; j--){
    console.log('decrement',j);
}
// for loop table

for (let t = 1; t <= 10; t++){
    console.log(`${t} * ${t} = ${t * 2}`);
}

// 
const num = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i < num.length; i++){
    // console.log(i);
    sum = sum += num[i]
    console.log(num);
    console.log(sum);
}

const number = [1, 2, 3, 4, 5];
const newArr = [];
for (let i = 0; i < number.length; i++){
    newArr.push(number[i]*2)
}
console.log(newArr);



