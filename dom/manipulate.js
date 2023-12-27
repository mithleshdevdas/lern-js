// @ts-nocheck
let title = document.createElement('h1')
title.className = 'title'
title.style.fontSize = '30px'
title.textContent = 'create day 2'
title.innerHTML = 'helo'
console.log(title);

let titles
for (let i = 1; i < 3; i++){
    titles = document.createElement('h2')
    titles.id = 'second'
    titles.style.background = 'blue'
    // @ts-ignore
    titles.innerText = i
  document.body.appendChild(titles)
}

// const ul = document.querySelector('ul')
// const lists = document.querySelectorAll('li')
// for (const list of lists) {
//     ul?.removeChild(list)
// }

const ul = document.querySelector('ul')
ul.innerHTML= ' '


