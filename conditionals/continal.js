 

// if



let num = 3;
if (num > 0) {
    console.log(`${num} is a positive number`);
}
let israin = true
if (israin) {
     console.log('keep the rain coat');
}
 
// if else

num = -3;
if (num > 0) {
    console.log(`${num} is a positive number`);
} else {
    console.log(`${num} is a negitive number`);
}

// if else if else
let a = 0
if (a > 0) {
    console.log(`${a} is a positive num`);
} else if (a<0){
    console.log(`${a} is a negitive num`);
} else if (a==0){
console.log(`${a} is qual num`);
} else {
    console.log(`${a} is not a num`);
}




 
let weather = 'sunny';
if (weather === 'sunny') {
    console.log('go to freely');
} else if (weather === 'rain') {
    console.log('keep the rain coat');
} else if (weather === 'cold') {
    console.log('keep the suther');
} else {
    console.log('no info');
}

// switch

let day = '';
switch (day) {
    case 'mon':
        console.log("today is mon");
        break
    case 'magal':
        console.log('today is mangal');
        break
    case 'bud':
        console.log('today is bud');
        break
    default:
        console.log("please enter today day ");
}

// ternary oper

let ismarrid = false
ismarrid ? console.log('wife name') : console.log('any gf')





