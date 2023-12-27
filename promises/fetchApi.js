const url = "https://restcountries.com/v2/all";

fetch(url).then(res => res.json())
    .then(data => {
    console.log(data);
    })
    .catch(error => console.error(error))
console.log(url);
