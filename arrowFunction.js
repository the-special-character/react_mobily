

const firstName = "Yagnesh"


const user = {
    firstName,
    lastName: "Modh",
    fullName:  () => {

        console.log(user);
        return `${firstName} ${user.lastName}`
    }
}

console.log(user.fullName());



const add = (a, b) => a + b;

const greet = name => `Hello ${name}`;

console.log(greet('yagnesh'));


console.log(add(1,2));

// named function
// function add(a,b) {
//     return a + b;
// }

// function add() {
//     return "hacked..."
// }






