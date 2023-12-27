// console object methods
console.log('30 days ', 'color:red');

console.warn('this is warnig');

console.error('this is erro')
const nams = ['mith', 'das', 'dev'];
console.table(nams)

console.time('Regular for loop')
for (let i = 0; i < nams.length; i++){
    console.log(nams[i][0],nams[i][1]);
}
console.timeEnd('Regular for loop');


console.info('wow is wow');

console.assert(4>3,'3 is grether than')
