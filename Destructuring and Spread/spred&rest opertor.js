//  Spread operator to get the rest of array elements

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)

// Spread operator to copy array

const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]
console.log(evenNumbers);
console.log(oddNumbers);
console.log(wholeNumbers);

