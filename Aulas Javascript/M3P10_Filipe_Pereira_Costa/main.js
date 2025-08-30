
// 1. Criar a classe Persona com os atributos: nome, apelido e idade.
// 2. Os objetos pessoais devem ser armazenados num array.
//fiz ligeiramente diferente dos videos da tokio, porque já aprendi java e 
//tentei aplicar os mesmos conceitos de oop que aprendi, com o objectivo de criar um objecto vazio e poder usá-lo
// de forma repetida.

class User {
    constructor(name, surname, age, items) {
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

const apiUrl = `http://localhost:4000/users`;
const button = document.getElementById("submit-btn");


let counter = 0

async function addUser(e) {
    // 5. A função deve repetir este procedimento cinco vezes.

    //adicionei um try catch para poder validar se objecto foi gravado com sucesso no array.
    //desta forma posso confirmar cada tentativa

    try {

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

        document.getElementById("new-user-form").reset();

        counter++
        return true;

    } catch {
        return false;
    }

}

button.addEventListener("click", addUser);

if (counter < 5) {
    addUser()
} else {
    alert("you have successfully added 5 user profiles");
}



