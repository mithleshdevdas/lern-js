// string ko single quote double quorte or backtick se declare kr skte hai

// single quote   ' '

// double quote  " "

// back-tick     `  `

let hobby = 'coding krna';
console.log(hobby);

let fLag = " flovot javascript lag";
console.log(fLag);

let sttus = ` status begginer`; 
console.log(sttus);

// string concatenation

let progiming = hobby + " " + fLag + " " +
    sttus;
console.log(progiming);
    
// -\n for new line
console.log(
    "Lorem ipsum dolor sit, \n amet consectetur adipisicing elit.\n Quo ad obcaecati nobis."
);

// -\t tab menas 8 spaces

console.log(
  "Lorem ipsum dolor sit, \t  amet consectetur adipisicing elit. Quo ad obcaecati nobis."
);

// \\\\ back slash

console.log(
  "Lorem ipsum dolor sit,\\\\ amet consectetur adipisicing elit.\\\\ Quo ad obcaecati nobis."
);

// \\' single quote 
console.log(
  " \' Lorem ipsum dolor sit,  amet consectetur adipisicing elit. Quo ad obcaecati nobis. \'"
);

// \ "  double qute

console.log(
  " \" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ad obcaecati nobis. \" "
);

// template litetral

let a = 2;
let b = 10;
console.log(`the sum of ${a} and ${b} is ${a + b}`);


