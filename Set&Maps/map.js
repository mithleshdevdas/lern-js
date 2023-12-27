// Map


// creting Empty Map
const Emptymap = new Map()
console.log(Emptymap);

// creating an Map from array

let countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
// @ts-ignore
const map = new Map(countries)
console.log(map);
console.log(map.size);

// adding value to the map
const contryMap = new Map()
contryMap.set('india', 'usa')
contryMap.set('canda', 'usa',)
contryMap.set('ramu', 'usa')
console.log(contryMap);

// geting a value from map
console.log(contryMap.get('canda'));

// checking key in map
console.log(contryMap.has('canda'));
console.log(contryMap.has('london'));

// getting all valur from map using loop
for (const conty of contryMap) {
    console.log(conty);
}

for (const [conty, city] of contryMap) {
    console.log(conty,city);
}

