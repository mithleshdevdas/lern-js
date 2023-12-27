// creating a pattern with regExp Constructor

let pattern = 'mith'
let regEx = new RegExp(pattern)
console.log(regEx
);

// 
let flag = 'gi'
let regExf = new RegExp (pattern, flag);
console.log(regExf);

//  Creating a pattern without RegExp Constructor

let rex = /love/gi
console.log(rex);

// RegExpp Object Methods

// Testing for  a match

const str = ' i love javascript '
const ptn = /love/g
const res = ptn.test(str)
console.log(res);

// Array containing all of the match

const res1 = str.match(ptn)
console.log(res1);

// serch
const res2 = str.search(ptn)
console.log(res2);

// Replacing a substring
const txt =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";

const matchreplaced = txt.replace(/Python|python/g, 'javascript')
console.log(matchreplaced);

const txt2 =
  "%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";

const matches = txt2.replace(/%/g, '')
console.log(matches);

// squre bracket
const ptn1 = '[Aa]pple'
const txt3 = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '

const mach = txt3.match(ptn1)
console.log(mach);

const ptn2 = /[Aa]pple/g
const mach2 = txt3.match(ptn2)
console.log(mach2);

const ptn3 = /[Aa]pple|[Bb]anna/g
const mach3 = txt3.match(ptn3)
console.log(mach3);

// Escape character(\\) in RegExp
const ptn4 = /\d/g
const txt4 = "This regular expression example was made in January 12,  2020.";
const mach4 = txt4.match(ptn4)
console.log(mach4);

// one more TimeRanges(+)
const ptn5 = /\d+/g
const mach5 = txt4.match(ptn5)
console.log(mach5);

// period
const ptn6 = /[a]./g
const txt5 = 'Apple and banna are fruit'
const mach6 = txt5.match(ptn6)
console.log(mach6);

const ptn7 = /[a].+/g
const mach7 = txt5.match(ptn7)
console.log(mach7);

const ptn8 = /[a].*/g
const mach8 = txt5.match(ptn8)
console.log(mach8);


const txt9 =
  "I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.";

const ptn9 = /[Ee]-?mail/g
const mach9 = txt9.match(ptn9)
console.log(mach9);


// Quantifier in RegExp
