// @ts-nocheck
// ### Exercises: Level 1

// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = 'mithlesh';
let lastName = null;
let country = 'india';
let city;
let age = 25;
let isMarried = false;
console.log(firstName ,lastName,country,city,age,isMarried);
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof isMarried);

// 2. Check if type of '10' is equal to 10

let strnum = '10';
let ognum = 10;
console.log(strnum,ognum);
console.log(strnum==ognum);
console.log(typeof strnum, typeof ognum);
console.log(strnum === ognum);

// 3. Check if parseInt('9.8') is equal to 10

let float = parseInt('9.8');
let num = 10;

console.log( float==num);
console.log(float === num);

// 4. Boolean value is either true or false.
//    1. Write three JavaScript statement which provide truthy value.
[true, 1,'(all number)' , 'sting(all sting)']

//    2. Write three JavaScript statement which provide falsy value.
[null, 'undefined', 'nan', '0', 'emty sting']

// 5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
   1.[ 4 > 3 ] ,'true'
   2. [4 >= 3], 'ture'
   3. [4 < 3], 'false'
 
   4. [4 <= 3], 'false'
   5. [4 == 4], 'true'
   6. [4 === 4], 'true'
   7. [4 != 4],'flase'
   8. [4 !== 4],'false'
   9. [4 != '4'],'flase'
   10. [4 == '4'], 'true'
11.[4 === '4'], 'false'
   
//    12. Find the length of python and jargon and make a falsy comparison statement.

let py = 'python', jar = 'jargon';
console.log(py, jar);
console.log((py.length) == (jar.length));



// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
   1. [4 > 3 && 10 < 12] ,'true'
   2. [4 > 3 && 10 > 12] ,'false'
   
   3. [4 > 3 || 10 < 12], 'true'
   4. [4 > 3 || 10 > 12],'true'
   5. [!(4 > 3)], 'false'
   6. [!(4 < 3)], 'true'
   7. [!(false)],'true'
   8.[ !(4 > 3 && 10 < 12)],'false'
   9. [!(4 > 3 && 10 > 12)],'true'
10.[!(4 === '4')], 'true'
//    11. There is no 'on' in both dragon and python

console.log(('python','dragon').includes('on'));


// 7. Use the Date object to do the following activities
//    1. What is the year today?
let find = new Date();
console.log(find.toLocaleString(),find.getFullYear());
//    2. What is the month today as a number?
console.log(find.toLocaleString(),find.getMonth() +1 );
//    3. What is the date today?
console.log(find.toLocaleString(),find.getDate()  );
//    4. What is the day today as a number?
console.log(find.toDateString(),find.getDay()  );

//    5. What is the hours now?
console.log(find.toLocaleString(),find.getHours() );

//    6. What is the minutes now?
console.log(find.toLocaleString(),find.getMinutes() );



