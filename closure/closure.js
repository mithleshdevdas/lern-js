// closure

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }
    return innerFunction
}
const innerFunc = outerFunction()
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());

function outerF() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }
    return {
        plusOne: plusOne(),
        minusOne:minusOne()
    }
    
}
const innerFuncs = outerF()
console.log('i am plus',innerFuncs.plusOne);
console.log('i am minus',innerFuncs.minusOne);

