
//DOM connectors
const genTableButton = document.getElementById("gen-table-button")
const tableBody = document.querySelector('tbody')



//array de users
const users = [
    { id: 1, name: "joao", age: 30, email: "joao@coiso.com" },
    { id: 2, name: "maria", age: 28, email: "maria@exemplo.pt" },
    { id: 3, name: "carlos", age: 35, email: "carlos@teste.com" },
    { id: 4, name: "ana", age: 24, email: "ana@email.org" },
    { id: 5, name: "pedro", age: 42, email: "pedro@site.net" },
    { id: 6, name: "sofia", age: 29, email: "sofia@web.pt" },
    { id: 7, name: "miguel", age: 33, email: "miguel@demo.com" },
    { id: 8, name: "catarina", age: 27, email: "catarina@sample.pt" },
    { id: 9, name: "ricardo", age: 38, email: "ricardo@test.org" },
    { id: 10, name: "ines", age: 31, email: "ines@exemplo.net" }
];



//ligação ao botão com o event listener e a sua respectiva função
genTableButton.addEventListener('click', () => {

    seedTable() //função criada à parte, por motivos de melhor organização

})

//definição da função e da sua 
const seedTable = () => {

    tableBody.innerHTML = ""

    users.forEach((user, index) => {

        //destructuring, para evitar repetir a variavel mais abaixo:  
        // <td>${id}</td>
        // <td>${user.name}</td>
        // <td>${user.age}</td>
        // <td>${user.email}</td> 

        const { id, name, age, email } = user

        const userRow = document.createElement('tr')
        userRow.innerHTML =
            `
            <td>${id}</td>
            <td>${name}</td>
            <td>${age}</td>
            <td>${email}</td>
            <td>
            <button onclick="addAge (${id})">Increment Age</button>
            </td>  
            <td>
            <button onclick="deleteUser (${id})">Delete User</button>
            </td> 

                  
        `

        tableBody.appendChild(userRow)


    })
}

const addAge = (id) => {

    const user = users.find(user => user.id == id)

    if (!user) {
        alert("user not found")
        return;
    }

    user.age++
    seedTable()
}


const deleteUser = (id) => {

    users.forEach((user, index) => {

        if (user.id == id) {
            users.splice(index, 1)
        }
    })

    seedTable()
}
