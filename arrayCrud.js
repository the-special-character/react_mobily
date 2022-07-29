const arr = [1,2,3,4,5,6];


const [,, ...rest] = arr;


console.log(rest);


// const newArr = [0, ...arr, 7];

const index = 3;

// const arr1 = arr.slice(0, index);
// const arr2 = arr.slice(index)

// console.log(arr1);

// console.log(arr2);

// console.log(arr);

const newArr = [
    ...arr.slice(0, index),
    ...arr.slice(index + 1)
]

console.log(newArr);





// console.log(arr);
// console.log(newArr);

// arr.splice(2,1);

// console.log(arr);


// arr.push(7);

// console.log(arr);

// arr.pop()

// console.log(arr);

// arr.unshift(0);

// console.log(arr);

// arr.shift();

// console.log(arr);