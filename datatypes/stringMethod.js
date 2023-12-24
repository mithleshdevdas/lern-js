// string method
//  length
// string me jitne bi character or emty space rahte hai usee total krke btta hai

let js = 'javascript';
console.log(js.length);

// index
// string me charater 0 se start hota hai aur last ka -1 pr kalta hai

let lastindex = js.length - 1;
console.log(js[0]);
console.log(js.length[9]);
console.log(js[lastindex]);


// touppercase
// name se hi pata chal raha hai uppercase me badl dega

console.log(js.toUpperCase());

// tolowercase
let upper = "MITHLESH";

console.log(upper.toLowerCase());

// substr
console.log(js.substr(0, 4));

// kuch samajh ni aaa raah
// substring
console.log(js.substring(4,10));
console.log(js.substring(4));


// split
// split kr deta hai string to array
let what = 'what is the baby';
console.log(what.split("*"));

// trim
// space ko remove krta hai
let space = "           mithlesh      "
console.log(space);
console.log(space.trim());


// includes
// check krta hai vo value hai ki ni

console.log('mith'.includes('m'));
console.log('das'.includes('m'));

// replace
// replace krke dusri value rakh deta hai

let ogvalue = "my name is javascript";
console.log(ogvalue);
console.log(ogvalue.replace('javascript', 'mithlesh'));

// charAt
let last_index = ogvalue.length - 1;
console.log(ogvalue.charAt(0));
console.log(ogvalue.charAt(last_index));
// charCodeAt
console.log(ogvalue.charCodeAt(4));
console.log(ogvalue.charCodeAt(last_index));

// indexof

console.log(ogvalue.indexOf('m'));
console.log(ogvalue.indexOf('name'));
console.log(ogvalue.indexOf('Name'));
console.log(ogvalue.indexOf('javascript'));

// lastIndexof

let lindex = 'I love JavaScript. If you do not mk JavaScript what else can you love.';
console.log(lindex.lastIndexOf('love'));
console.log(lindex.lastIndexOf('mk'));
console.log(lindex.lastIndexOf('javascript'));


// concat

console.log(ogvalue.concat(' devdas'));

// startwith
// endwith

// search

console.log('my name is my name is'.search('is'));

// string to number
let strnum = '10';
console.log(strnum);
console.log(typeof strnum);

let strnum1 = '20';
console.log(strnum1);
console.log(typeof strnum1);

let strnum2 = '30';
console.log(strnum2);
console.log(typeof strnum2);

let num = +strnum;
console.log(num);
console.log(typeof num);
let num1 = parseInt(strnum1);
console.log(num1);
console.log(typeof num1);

let num2 = Number(strnum2);
console.log(num2);
console.log(typeof num2);