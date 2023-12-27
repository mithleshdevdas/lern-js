// click
const btn = document.querySelector('button')
btn?.addEventListener('click', e => {
    console.log('e gives the event lisner object:', e)
    console.log('e.target gives the selected elemt:', e.target);
    console.log('e.target.textcontect give contect of seleected elemet', e.target
    );
})

// onclick
const clickme = () => {
    alert('you are click the btn')
    console.log(clickme,'you click the btn');
}

// mouse enter
const Btn = document.getElementById('btn')
Btn?.addEventListener('mouseenter', e => {
    console.log('wow',e);
    console.log(e.target);
})

// double click

const dbclick = document.getElementById('btn-db')
dbclick?.addEventListener('dblclick', e => {
    console.log(e);
    console.log(e.target);
})
// mouseleave
const outer = document.getElementById('bton')
outer?.addEventListener
    ('mouseleave', e => {
    console.log(e);
    console.log(e.target);
    })

// input value
const mass = document.querySelector('#mass')
const height = document.querySelector("#height")
const button = document.querySelector('button')

let ibm
button?.addEventListener('click', () => {
  
    alert(`your bmi is ${ibm.toFixed(2)}`)
    console.log(ibm);
    
})
    




