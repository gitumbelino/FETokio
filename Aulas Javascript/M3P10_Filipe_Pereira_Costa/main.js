
// 1. Criar a classe Persona com os atributos: nome, apelido e idade.
// 2. Os objetos pessoais devem ser armazenados num array.

const apiUrl = `http://localhost:4000/users`;
class User {
    constructor(name, surname, age, items 
    ) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.items = items
    }

}



// 3. Criar no documento HTML um botão "Adicionar" que quando clicado chama a função "Persona()", e um botão "Mostrar" que
// quando clicado exibe todas as pessoas armazenadas no array.

// 4. Criar a função Persona(). Esta função irá pedir para introduzir um nome próprio, pedir para introduzir um apelido e pedir para
// introduzir a idade.


const button = document.getElementById("submit-btn");


async function addUser(e){

    e.preventDefault();

    const userNameInput = document.querySelector("#user-name");
    const userName = userNameInput.value;

    const userSurnameInput = document.querySelector("#user-surname");
    const userSurname = userSurnameInput.value;

    const ageInput = document.querySelector("#user-age");
    const age = ageInput.value;


    const itemsInput = document.querySelector("#user-items");
    const items = itemsInput.value.split(', ');


    if (!userName || !userSurname || !age) return;

    let newUser = new User(userName, userSurname, age, items);


    await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser)
    });


}



button.addEventListener("click", addUser);



// button.addEventListener("click", async function (e) {

//     e.preventDefault();

//     const userNameInput = document.querySelector("#user-name");
//     const userName = userNameInput.value;

//     const userSurnameInput = document.querySelector("#user-surname");
//     const userSurname = userSurnameInput.value;

//     const ageInput = document.querySelector("#user-age");
//     const age = ageInput.value;


//     const itemsInput = document.querySelector("#user-items");
//     const items = itemsInput.value.split(', ');


//     if (!userName || !userSurname || !age) return;

//     let newUser = new User(userName, userSurname, age, items);


//     await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newUser)
//     });

// });






// 5. A função deve repetir este procedimento cinco vezes.