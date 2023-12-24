// check the typeof '10' aual to 10 are qual
// @ts-nocheck
let mystring = '10';
let mynum = 10;
console.log(mystring);
console.log(typeof mystring);

console.log(mynum);
console.log(typeof mynum);
// by value
console.log(mystring == mynum);
// by type of value
console.log(mynum === mystring);



// genter a roamdom number to 0 to 100

// console.log(Math.floor(Math.random() * 100));
// genter a random number to 0 to 255

let num = 100;
let newnum = num - 50;
console.log(Math.floor(Math.random() * 255));

// genter a random num 50 to 100
console.log('javascript',Math.floor(Math.random()*(100-50)+ 50));

// print the
console.log(1, 1, 1, 1, 1,);
console.log(2, 1, 2, 4, 8,);
console.log(3, 1, 3, 9, 27,);

// Count the number of word __love__ in this sentence.

let count = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(count.split(' '));
count.length;
// console.log(count.length);

  const sentence =
    "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
  console.log(sentence.replaceAll(/@/,/%/,/#/,/&/all," "));
//   console.log(sentence.replaceAll('%'," "));

let permonthsalary = 5000;
let perMothCourse = 15000;
let bonus = 10000;
let totalincome = permonthsalary + perMothCourse ;
console.log(totalincome *12 +bonus);




