// destructuring and spread

// Destructing Arrays
const numbers = [1, 2, 3];
let [numone, numtwo, numtree] = numbers

console.log(numone, numtwo, numtree);


``
const nams = [undefined, 'raj', 'dk'];
let [
    fname = 'mk',
    secondname,
    thirdname,
    forname ='das'
] = nams
console.log(fname, secondname, thirdname, forname);

// spred
const num = [1, 2, 3, 4, 5, 6];
let [num1, num2, num3, ...baki] = num
console.log(num1, num2, num3);
console.log(baki);

// desturong object

const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
let { width, height, area, perimeter } = rectangle
console.log(rectangle);
console.log(width);
console.log(height);
console.log(area);
console.log(perimeter);
console.log(width, height, area, perimeter );

// renaming during structuring
let { width: w, height: h, area: a, perimeter: p=60 } = rectangle
console.log(w, h, a, p=100);

// 
const person = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};

const getPersonInfo = (obj) => {
  const skills = obj.skills;
  const formattedSkills = skills.slice(0, -1).join(", ");
  const languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(", ");

  const personInfo = `${obj.firstName} ${obj.lastName} lives in ${
    obj.country
  }. He is  ${obj.age} years old. He is an ${
    obj.job
  }. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

  return personInfo;
};

console.log(getPersonInfo(person));

// object parameter with destructuring

// ### Destructuring object during iteration


const todoList = [
{
  task:'Prepare JS Test',
  time:'4/1/2020 8:30',
  completed:true
},
{
  task:'Give JS Test',
  time:'4/1/2020 10:00',
  completed:false
},
{
  task:'Assess Test Result',
  time:'4/1/2020 1:00',
  completed:false
}
]
for (const { task, time, completed } of todoList) {
    console.log(task,time,completed);
}

