// json
// Converting JSON to JavaScript Object
// json.parse()

const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`;
const userobj = JSON.parse(usersText, undefined, )
console.log(userobj);

// ### Using a reviver function with JSON.parse()

const userobj2 = JSON.parse(usersText, (key, value) => {
    let newvalue = typeof value == 'string' &&  key != 'emil' ? value.toUpperCase() : value
    return newvalue
})
console.log(userobj2);


