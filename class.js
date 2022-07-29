

// const user1 = {
//     firstName: "yagnesh",
//     lastName: "modh",
//     age: 33,
//     gender: "male",
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }


// const user2 = {
//     firstName: "rohit",
//     lastName: "sharma",
//     age: 30,
//     gender: "male",
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

class User {
    age = 0;

    constructor(firstName, lastName, age, gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
    }

    set firstName(value) {
        this.xyz = User.firstCharUpperCase(value)
    }

    get firstName() {
        return this.xyz;
    }

    set lastName(value) {
        this._lastName = User.firstCharUpperCase(value)
    }

    get lastName() {
        return this._lastName;
    }

    static firstCharUpperCase(value) {
        return value ? `${value[0].toUpperCase()}${value.slice(1)}` : ''
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getUser() {
        return {
            firstName: this.firstName,
            age: this.#getAge()
        }
    }

    #getAge() {
        return this.age;
    }
}

class SuperUser extends User {
    constructor() {
        // super("Mahindara", "Dhoni", 40, "male")
    }

    getUser() {
        const data = super.getUser();
        return {...data, admin: true }
    }
}

console.log(User.firstCharUpperCase("virat"));

const user1 = new User("yagnesh", "modh", 33, "male");
console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.getUser());
const user2 = new User("rohit", "sharma", 30, "male");

const su = new SuperUser();

console.log(su.getUser());

console.log(su);


console.log(user1);


