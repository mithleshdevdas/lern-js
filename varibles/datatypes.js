// data type in javacript

// primitive data type
// string, number , boolan,null, undefined ,symbol,Bigint



// exmple
// string
let study = "college";
console.log(study);
console.log(typeof study);

// number
let mark = 350;
console.log(mark);
console.log(typeof mark);

// boolan
let studyCompelete = true;
console.log(studyCompelete);
console.log(typeof studyCompelete);

// null
let degree = null;
console.log(degree);
console.log(typeof degree);

// undefined
let course;
console.log(course);
console.log(typeof course);

// symbol
let collegeId = Symbol("@123");
console.log(collegeId);
console.log(typeof collegeId);

// bigint
let collegeCode = 511151555415n;
console.log(collegeCode);
console.log(typeof collegeCode);


// non-primitive data type
// Array , object ,functio

// array
let fruitName = ['banna', 'apple', 'orange'];
console.log(fruitName);
console.log(typeof fruitName);

// object
const info = {
    id: 2112,
    pass: 'djd45',
    email: 'mkdas@gmail.com'
}
console.log(info);
console.log(typeof info);


// function

function hello() {
    console.log('hello world!');
}

hello()
console.log(typeof hello);