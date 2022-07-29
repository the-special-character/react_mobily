
const firstName = "Yagnesh";

const lastName = "Modh";


const user = {
    firstName,
    lastName,
    age: 33,
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(user);

console.log(user.fullName());