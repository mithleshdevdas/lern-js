// set

// creating empty set
const Emtyset = new Set()
console.log(Emtyset);

// creting set  from array
const lang = ['english', 'hindi', 'french', 'rassin', 'sankit'];
const setoflangs = new Set(lang)
console.log(setoflangs);

// adding an element to a set
const companies = new Set()
companies.add(['goggle','microsoft','apple']);
companies.add('facebook')
companies.add('amazon')
console.log(companies);


// add set

for (const company of companies) {
    Emtyset.add(company)
}
console.log(Emtyset);

// deleting an element a set

console.log(companies.delete('facebook'));
console.log(companies);

// checking an element in the set
console.log(companies.has('amazon'));

// clering the set
companies.clear()
console.log(companies);

// union of sets
let a = [10, 20, 30,];
let b = [40, 50, 60,];
let c = [...a, ...b];

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C);

// intersection of sets

// difference of sets
let aa = [1, 2, 3, 4, 5];
let bb = [3, 4, 5, 6];

let AA = new Set(aa)
let BB = new Set(bb)

let cc = aa.filter((num) => !BB.has(num))
let CC = new Set(cc)
console.log(CC);