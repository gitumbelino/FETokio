// Prática 2.

// Partindo de um documento HTML básico com a sua estrutura correspondente, pede-se:

// 1. Insira o código JavaScript no próprio documento HTML, usando a tag correspondente.

// 2. Adicione um botão que, ao ser clicado, armazena, caso não exista, 
// um novo dado em localStorage.
// • Chave: 🡺 M4_UD02_P02
// • Valor: 🡺 Nome do aluno
// • No caso de existir  já um dado no armazém com a mesma chave, 
// deve-se mostrar um alerta indicando o erro.

// 3. Adicionar um botão que, quando clicado, armazena, 
// no caso de não existir, um novo dado em sessionStorage.
// • Chave: 🡺 Date
// • Valor: 🡺 data em milisegundos
// • A data armazenada deve ser sempre substituída.

// 4. Adicionar um botão para exibir no ecrã a informação armazenada em ambos os armazéns.

// 5. Ao aceder através de diferentes separadores de browser ao ficheiro HTML previamente criado, 
// devemos ver como é mantida a
// informação armazenada em localStorage, mas não a informação armazenada em sessionStorage.


let nameInput = document.querySelector("#name-input");
let errorField = document.querySelector("#error");
let storedData = document.querySelector("#stored-data");
let storedDataCard = document.querySelector("#show-stored-section");

addNameButton = () => {

    let userNameValue = nameInput.value;

    let storedItem = localStorage.getItem("M4_UD02_P02")

    if (storedItem !== null) {
        errorField.innerHTML = "Name already saved in local storage"

    } else {
        localStorage.setItem("M4_UD02_P02", userNameValue);
        storedItem = localStorage.getItem("M4_UD02_P02");
        console.log("stored name: " + storedItem)
    }

};


addDateButton = () => {

    let dateValue = Date.now()

    let storedDate = sessionStorage.getItem("Date")

    if (storedDate !== null) {
        sessionStorage.setItem("Date", dateValue);
        storedDate = sessionStorage.getItem("Date")
        errorField.innerHTML = "New date saved: " + storedDate


    } else {
        sessionStorage.setItem("Date", dateValue);
        console.log("stored date: " + storedDate)
    }

}

getDataButton = () => {

    let storedData1 = localStorage.getItem("M4_UD02_P02");
    let storedData2 = sessionStorage.getItem("Date");

    if (storedData1 !== null && storedData2 !== null) {
        storedDataCard.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                  Stored Data
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"> Name: ${storedData1}</li>
                  <li class="list-group-item">Time: ${storedData2}</li>
                </ul>
              </div>`
    } else {
        console.log("missing fields: " + "name: " + storedData1 + " and time: " + storedData2)
    }

}

