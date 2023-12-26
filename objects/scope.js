// window global object
// console.log();

// let learnscope

 let a = 'ja'
 let b= 10
function letlernscope ()  {
    console.log(a, b);
    if (true) {
        console.log(a,b);
    }
    
}
letlernscope()
console.log(a, b);

// global scope
let c = 'html'
let d = 20
function learnScope() {
    console.log(c, d);
    if (true) {
        let c = 'java'
        let d = 100
        console.log(c,d);
    }
    console.log(c,d);
}
learnScope()
console.log(c, d);
 
// local scope

