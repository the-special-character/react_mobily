
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