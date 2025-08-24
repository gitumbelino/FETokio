const text = document.querySelector("h1")
const todosElement = document.querySelector(".todos")


//---------------------------exemplo5----------------------------



const getTodos = () => {

    return new Promise((resolve, reject) => {

        console.log("promise started")

        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => res.json())
            .then((todos) => {
                resolve(todos.slice(20, 31))
            })
    })


}

//com async await 
window.onload = async () => {

    const todos = await getTodos()

    getTodos().then((todos) => {

        text.style.backgroundColor = "aqua"
        todos.innerHTML = "LOL"

        let html = ``
        todos.forEach(todo => html += `<div>${todo.title}</div>`)

        todosElement.innerHTML = html

    }).catch(() => {
        console.error("Aqui há gato")
    }) 


}



//-------------------------------------------------------







//---------------------------exemplo4----------------------------

// const getTodos = () => {

//     return new Promise((resolve, reject) => {

//         console.log("promise started")

//         fetch(`https://jsonplaceholder.typicode.com/todos`)
//             .then(res => res.json())
//             .then((todos) => {
//                 resolve(todos.slice(20, 31))
//             })
//     })


// }

// window.onload = () => {

//     getTodos().then((todos) => {

//         text.style.backgroundColor = "aqua"
//         todos.innerHTML = "LOL"

//         let html = ``
//         todos.forEach(todo => html += `<div>${todo.title}</div>`)

//         todosElement.innerHTML = html

//     }).catch(() => {
//         console.error("Aqui há gato")
//     }) 


// }






//-------------------------------------------------------




//---------------------------exemplo3----------------------------

// const myPromise = () => {

//     return new Promise((resolve, reject) => {

//         console.log("promise started")

//         setTimeout(() => {
//             resolve("variavel value")
//             //reject()

//         }, 2000)

//     })

// }

// myPromise().then((value) => {
//     text.style.backgroundColor = "aqua"
//     console.log("promise concluded " + value)
// }).catch(() => {
//     console.error("Aqui há gato")
// })


//-------------------------------------------------------







//---------------------------exemplo2----------------------------
//  text.style.backgroundColor = "aqua"

// const startTime = Date.now()
// console.log(startTime)


//  fetch(`https://jsonplaceholder.typicode.com/todos`)
//  .then(res => res.json())
//  .then((todos) => {
//     text.style.backgroundColor = "black"

// const endTime = Date.now()
// console.log(endTime - startTime)


//  })

//-------------------------------------------------------




//---------------------------exemplo1----------------------------
// setTimeout (() => {

//     text.innerHTML = "changed!"

// }, 2000)


// setInterval (() => {

//     text.innerHTML += " another change"

// }, 1000)


//-------------------------------------------------------


