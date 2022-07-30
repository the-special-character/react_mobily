
// const login  = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { 
//             resolve({ token: "kjHDfkjdhasfkjdbgsfkjhad" })
//          }, 1000)
//     })
// }

// const getUsers = (token) => {
//     return new Promise((resolve, reject) => {
//         if(!token) {
//             reject("token is not available")
//         } else {
//             setTimeout(() => { 
//                 resolve("user data")
//              }, 1000)
//         }
//     })
// }

const ls = () => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => { reject("ls data") }, 1000)
     })
}

const ms = () => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => { reject("ms data") }, 3000)
     })
}

const rs = () => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => { reject("rs data") }, 2000)
     })
}


const loadData = async () => {
    try {
        console.time("Promise")
        const res = await Promise.any([
            ls(),
            rs(),
            ms(),
        ])
        console.log(res);

        // const lsData = await ls();
        // const rsData = await rs();
        // const msData = await ms();
        // console.log(res[0]);
        // console.log(res[1]);
        // console.log(res[2]);

        console.timeEnd("Promise")
    } catch (error) {
          console.log(error);  
    } finally {

    }
}

loadData();

// login()
// .then(({ token }) => {
//     console.log(token);
//     getUsers()
//     .then(val => {
//         console.log(val);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// })
// .catch(err => {

// })



// document.addEventListener("click", () => {

// })

// setTimeout(() => { first }, 10)

// setInterval(() => {
  
// }, 1000);

// Promises


// const loadData = () => new Promise((resolve, reject) => {
//     // resolve([{ name: "yagnesh"}])
//     reject("api failed")
// })

// loadData()
// .then((val) => {
//     // write a code to display data
//     console.log(val);
// })
// .catch((error) => {
//     console.log(error);
//     //  write a logic to display error message
// })
// .finally(() => {
//     // stop loader mechanism need to write here...
// })

// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(val => {

//     console.log(val);
//     // console.log(val);
//     return val.json()
// })
// .then(val => {
//     // console.log(val);
//     // display data
// })
// .catch(err => {

// })

