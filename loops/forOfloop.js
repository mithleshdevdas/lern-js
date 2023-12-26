// for of

const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
    console.log(num);
}

for (const num of numbers) {
    console.log(num+num);
}

let sum = 0;
for (const num of numbers) {
    sum = sum + num;
    console.log(sum);
}

const webtech = [
    'html','css','javascript'
]
for (const tech of webtech) {
    console.log(tech.toUpperCase());
}
for (const tech of webtech) {
    console.log(tech[0]);
}

const citys = ['gao', 'dehli', 'mumbai'];
const newArr = [];
for (const city of citys) {
    newArr.push(city.toUpperCase())
    console.log(newArr);
}
