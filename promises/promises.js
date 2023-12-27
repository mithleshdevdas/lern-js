// promises
const dosomething = callback => {
    setTimeout(() => {
        const skill = ['html', 'css', 'js']
        callback('it did not go well',skill)
    },2000)
}
const callback = (err, res) => {
    if (err) {
        return console.log(err);
    }
    return console.log(res);
}

// dosomething()
dosomething(callback)

const dosomething2 = callback => {

    setTimeout(() => {
        const skills = ['js', 'react', 'md']
        callback(false,skills)
    },3000)
        
}
const callback2 = (err, res) => {
    if (err) {
        return console.log(err);
    }
    return console.log(res);
}
dosomething2(callback2)

// promise constuctor


const doPromise = new Promise((resove, reject) => {
    setTimeout(() => {
        const skil = ['expres', 'python']
        if (skil.length > 5) {
            resove(skil)
        } else {
            reject('somithing went wrong')
        }
    },4000)
})
doPromise.then(result => {
    console.log(result);
})
    .catch(error => console.log(error))

    



