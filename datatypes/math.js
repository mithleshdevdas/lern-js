// math object

const PI = Math.PI;
console.log(PI);

console.log(Math.round(3.6));
// math.round jo hai .1 se .4 tk km ki value deta hai aur .5 se .9 tk jada ho jata hai

console.log(Math.floor(PI));
// math.floor . me koi bi number ho hata deta hai

console.log(Math.ceil(PI));
// math.ceil . me koi bi number ho pure value ko bada deta hai

console.log(Math.min(10, 20, 30, 5, 80,));
// math.mininmum jo hai minimum value ko ata hai

console.log(Math.max(10, 20, 30, 5, 50, 100, 20, 30));
// math.miximum value ata hai

console.log(Math.random());
// random number create 0 to 0.999 ko print krta hai

console.log(Math.floor(Math.random() * 10));

//  random number genter to 0 to 10;

let randomnum = Math.random();
console.log(randomnum);
let zerototen = randomnum * 11;
console.log(zerototen);

let roundfiger = Math.floor(zerototen);
console.log(roundfiger);