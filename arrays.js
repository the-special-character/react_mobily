

// for
// while
// dowhile
// foreach

// forof
// forin

const obj = {
    a: 1, 
    b: 2,
    c: 3
}



for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
}

const arr = [...Array(10).keys()]

for (const iterator of arr) {
    console.log(iterator);
}

console.time("for")
for (let i = 0; i < arr.length; i++) {
}
console.timeEnd("for")

console.time("while")
let j = 0;
while (j < arr.length) {
    j++;
}
console.timeEnd("while")

console.time("dowhile")
let k = 0;
do {
    k++;
} while (k < arr.length);
console.timeEnd("dowhile")

console.time("forEach")
arr.forEach(element => {
});
console.timeEnd("forEach")

// const add = (...params) => {
//     let result = 0;

//     for (let i = 0; i < params.length; i++) {
//         const element = params[i];
//         result += element;
//     }

//     return result;
// }

// console.log(add(1,2));