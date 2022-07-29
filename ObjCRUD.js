

// primitive type

// number
// boolean
// bigInt
// symbol
// string

// non premitive 
// obj
// array

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
}

console.log(obj);

const {b, c, ...rest} = obj;

console.log(b);
console.log(c);
console.log(rest);


// delete obj.c

// const a = 5;

// const key = "c"

// const {a: objA, b, [key]: objC } = obj;

// console.log(objA);

// console.log(a);
// console.log(b);
// console.log(objC);
// console.log(c);
// console.log(e);


// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);




const neObj = {...obj, b: 10, f: 5};

console.log(obj);
console.log(neObj);






// const newObj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     b: 5
// }


// const newObj = Object.assign({}, obj, { c: {
//     e: 5,
//     f: {
//         g: 5
//     }
// }})

// console.log(obj);

// console.log(newObj);


// console.log(obj.a);

// const key = 'a';

// console.log(obj[key]);