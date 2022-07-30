const map = new Map();

map.set("yagnesh", {
    name: "yagnesh",
    age: 30,
    gender: "male"
});

map.set("virat", {
    name: "virat",
    age: 33,
    gender: "male"
});


const weakMap = new WeakMap();


console.log(map.get("yagnesh")); 

for (const [key, value] of map) {
    console.log(key);
    console.log(value);
}


// const arr = [1,2,3,4,5,6,7];

// // primitive data
// const set = new Set(arr);

// set.add(8);
// set.add(5);

// set.delete(5)



// console.log(set);

// console.log(set.has(5)); 

// console.log();

// for (const iterator of set.keys()) {
//     console.log(iterator);
// }

// const weakset = new WeakSet();
// const weakSetData1 = { a: 1}
// weakset.add(weakSetData1)
// weakset.delete(weakSetData1)
// console.log(weakset.has(weakSetData1)); 


const a = 1;
const b = 2

const obj = {
    a,
    b
}

// class Authentication {
//     #login() {
//         console.log("login called");
//     }

//     #logout() {
//         console.log("logout called");
//     }

//     *authGen() {
//         yield this.#login();
//         yield this.#logout()
//     }
// }

// const auth = new Authentication();



// const gen = auth.authGen()

// gen.next()
// gen.next()


 

// function* xyz() {
//     try {
        
    
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     return "hello"
// } catch (error) {
//         console.log(error);
// }
// }

// const gen = xyz();

// console.log(gen.next());
// gen.return()

// const gen1 = xyz();
// console.log(gen1.next());
// console.log(gen1.next());
// console.log(gen1.next());
// console.log(gen1.next());

// for (const iterator of gen) {
//     console.log(iterator);
//     if(iterator === 2) {
//         gen.return();
//     }
// }
