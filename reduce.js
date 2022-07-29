
const arr = [
    {
        name: "Yagnesh",
        age: 33,
        gender: "male"
    },
    {
        name: "Virat",
        age: 28,
        gender: "male"
    },
    {
        name: "Rohit",
        age: 32,
        gender: "male"
    },
    {
        name: "Alia",
        age: 18,
        gender: "female"
    },
    {
        name: "Dipeeka",
        age: 26,
        gender: "female"
    },
    {
        name: "Priyanka",
        age: 40,
        gender: "female"
    },
    {
        name: "Taimur",
        age: 10,
        gender: "male"
    },
    {
        name: "Amitabh",
        age: 80,
        gender: "male"
    }
]



const maleRecords = arr.reduce((p, c) => {
    if(c.gender === "male") {
        return  [...p, c]
    }
    return p;
}, []);

console.log(maleRecords);

/* 

{
    "10-19": [],
    "20-29": [],
    "30-39": [],
    "40-49": [],
    "80-89": []
}
*/

// const age = 33;

// const ageGroup = Math.floor(33/10);

// const key = `${ageGroup}0-${ageGroup}9`

// console.log(key);


// const obj = {
//     a: 1
// }

// console.log(obj['b']);

// obj['b'] = 2;

// console.log(obj);

// const groupByGender = arr.reduce((p, c) => {
//     const ageGroup = Math.floor(c.age/10);
//     const key = `${ageGroup}0-${ageGroup}9`
//     if(p[key] === undefined) {
//         p[key] = []
//     }
//     p[key].push(c)
//     p[key].sort((a,b) => b.age - a.age);
//     return p;
// }, {})

// console.log(groupByGender);



// const arr = [1,2,3,4,5,6];

// const sum = arr.reduce((p, c) => p + c, 0);

// console.log(sum);

// let result  = 0;

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     result += element;
// }

// console.log(result);

