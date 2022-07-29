
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

const isRohitExist = arr.some(x => x.name === "Rohit");


const isEveryAdult = arr.every(x => x.age > 18);

console.log(isEveryAdult);

console.log(isRohitExist);

// const maleRecords = arr.filter(x => x.gender ===  "male");

// console.log(maleRecords);

// const updatedArr = arr.map(item => {
//     if(item.name === "Rohit") {
//         return {...item, age: 35 }
//     }
//     return item;
// })

// console.log(updatedArr);

// 0(N)
// O(logN)
// O(1)

// console.log(arr[2].name);

for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if(arr[i].name === "Rohit") {
        break;
    }
}


// O(logN)
const index = arr.findIndex(item => {
    console.log(item.name);
    return item.name === "shikhar"
});

const rohitInfo = arr.find(item => {
    console.log(item.name);
    return item.name === "Rohit"
});

console.log(rohitInfo);

console.log(index);

// const newArr = [
//     ...arr.slice(0, index),
//     {...arr[index], age: 35},
//     ...arr.slice(index + 1)
// ]

// console.log(newArr);

// console.log(index);
