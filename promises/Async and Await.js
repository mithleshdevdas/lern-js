// async and await

const url = "https://restcountries.com/v2/all";

fetch(url).then(res => res.json())
    .then(data => {
    console.log(data);
})
    .catch(err => console.error(err))

const fetchData = async () => {
    try {
        const respones = await fetch(url)
        const conty = await respones.json()
        console.log(conty)
    } catch (err) {
        console.error(err);
        }
} 
console.log('=== ansync await');
fetchData()
    
        
    
