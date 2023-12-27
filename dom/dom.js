// @ts-nocheck
// get element by tag name
const allTitle = document.
getElementsByTagName("h1");

console.log(allTitle);
console.log(allTitle.length);
for (let i = 0; i < allTitle.length; i++) {
  console.log(allTitle[i]);
}

// get element by classname
const alTi = document.getElementsByClassName('title')
console.log(alTi);
for (let i = 0; i < alTi.length; i++) {
  console.log(alTi[i]);
}

// gete element by id
const alTit = document.getElementById('firt-title')
console.log(alTit);

// get element by querysector

let firsttitle = document.querySelector('h1')
console.log(firsttitle);
let second = document.querySelector('#second-title')
console.log(second);
let third = document.querySelector('.title')
console.log(third);

// get element by querysectorAll
const all = document.querySelectorAll('h1')
console.log(all);
all.forEach(title => console.log(title))


// adding atribute
const titles = document.querySelectorAll('h1')




titles.forEach(ele => console.log(ele))

const titless = document.querySelectorAll('h1')
titless.forEach((title, i) => {
    title.style.fontSize = '30px'
    if (i % 2 === 0) {
        title.style.color='green'
    } else {
        title.style.color ='red'
    }
})

const titl = document.querySelectorAll('h1')
titl.forEach((t, i) => {
    t.style.fontFamily = 'arial'
    if (i % 2 === 0) {
        t.style.background= 'orange'
    } else {
        t.style.background = 'blue'
    }
})

