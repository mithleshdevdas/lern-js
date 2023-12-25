// date ojbejt

// creting a time object

const now = new Date();
console.log(now);

// getting fullyear
console.log(now.getFullYear());

// geting moth
console.log(now.getMonth());

// geting date
console.log(now.getDate());

// geting day
console.log(now.getDay());

// geting hours

console.log(now.getHours());

// geting minus
console.log(now.getMinutes());

// geting second
console.log(now.getSeconds());

// geting time
console.log(now.getTime());


// date now

const allSecond = Date.now();
console.log(allSecond);

// all method in one
let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();
let day = now.getDay();
let hours = now.getHours();
let minus = now.getMinutes();

console.table([year,month,date,day,hours,minus]);
console.table(`${year},${month},${date},${day},${hours},${minus}`);

