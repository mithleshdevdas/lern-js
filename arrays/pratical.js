// declare a emty array
let emtyArray = [];
console.log(emtyArray);

// decrare array of 6 number element
let moreArr = ['mk', 'das', 'ni', 'hai', 'udas'];
console.log(moreArr);

// lenght find in array
let findlength = moreArr.length;
console.log(`arry lenght is ${findlength}`);
// find firth item
console.log(moreArr[0]);
// find middle item
console.log(moreArr[3]);
// find last item
let lastitem = moreArr.length - 1;
console.log(moreArr[lastitem]);

//  mix datatypes inarray
let mixArr = ['mk', 25, true, null, undefined,Symbol('@mk'),BigInt('15')];
console.log(mixArr);

// decare comany names in array
let comanys = ['google', 'facebook', 'apple', 'microsoft', 'ibm','mk'];
console.log(comanys);
// print the first company
console.log(comanys[0]);
// print the midddle company
console.log(comanys.length);
console.log(comanys[3]);
// print the last comay
let lastcomany = comanys.length - 1;
console.log(comanys[lastcomany]);
// change comany name to upercash
let uppercase = comanys.toString();
console.log(uppercase.toUpperCase(), uppercase.split(' '));
comanys[0]="GOOGLE"
comanys[1]="FACEBOOK"
comanys[2]="APPLE"
comanys[3]="MICROSOFT"
comanys[4]="IBM"
comanys[5]="MK"
console.log(comanys);
// sort 
console.log(comanys.sort());
// revece
console.log(comanys.reverse());
// slice first 3 array
console.log(comanys.slice(0,3));
// slice last 3 array
console.log(comanys.slice(3));
// slice of middle array
console.log(comanys.slice(0 - 4, 4));

// remove the firt comny in array
console.log(comanys.pop());

// remove last comany

console.log(comanys.shift());

// remove all comany
comanys=Array()
console.log(comanys);

// add remove edit
// add meat to start
let list = ['milk', 'coffe', 'tea', 'honey']

    list.unshift('meat')
console.log(list);
// add sugar end
// list.push('sugar');
// console.log(list);
// remove last
console.log(list.pop());
list[2] = "green tea"
console.log(list);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());


