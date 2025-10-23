const usersDom = document.querySelector("#users")

class User {

    constructor(name, age) {
        this.name = name
        this.age = age
    }


    static #userList = []

    //refresh users array with data from localstorage

    static refreshUsers() {

        const users = localStorage.getItem("users")

        if (!users) {
            this.#userList = []

        } else {
            this.#userList = JSON.parse(users)
        }


        usersDom.innerHTML = ``

        this.#userList.forEach(user => {
            const newUserDom = document.createElement('div')
            newUserDom.innerHTML = ` </div>
                    <div> Name: ${user.name} </div>
                    <div> Age: ${user.age} </div>
                    </div>`
                    usersDom.appendChild(newUserDom)
        })

    }


    //obtain the data from local storage
    static getUsers = () => this.#userList;


    static saveUsers() {
        localStorage.setItem("users", JSON.stringify(this.#userList))
    }


    static addUser(name, age) {
        const newUser = new User(name, age)
        this.#userList.push(newUser)
        this.saveUsers()
        this.refreshUsers()
    }
}


window.onload = () => {

  User.refreshUsers()
}


document.querySelector("#add-user")
    .addEventListener("submit", (e) => {
        e.preventDefault()
        const {name, age} = e.target
        User.addUser(name.value, age.value)
    })