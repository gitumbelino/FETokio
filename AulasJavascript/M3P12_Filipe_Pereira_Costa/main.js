// 3. Criar um script para validar o formulário:
// • O script deve verificar se o nome do utilizador 
//tem pelo menos 4 caracteres.
// • O script deve verificar se o e-mail introduzido é válido. 

//Para tal, utilizaremos uma expressão regular (RegEx Expression)
// fornecida:
// /^([a-zA-Z0-9_\ \-])+((([a-zA-Z0-9-])+(([a-zA-Z0-9]{2,4})+$/
// • O script deve verificar se a palavra-passe introduzida tem entre 6 e 12 caracteres.
// • E finalmente, ambas as palavras-passe devem ser verificadas para garantir que coincidem.
// • O programa desencadeará uma mensagem de aviso para cada campo, caso os requisitos não sejam cumpridos.
// PROGRAMAÇÃO FRONT-END:
// HTML5, CSS, JSa

// const signUpForm = document.getElementById("signup");

const signUpForm = document.getElementById("signUp");

const userLengthError = document.getElementById("userLengthError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const repeatPasswordError = document.getElementById("repeatPasswordError");






signUpForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const userNameInput = document.querySelector("#username");
    const userName = userNameInput.value;


    const emailInput = document.querySelector("#email");
    const email = emailInput.value;

    const passwordInput = document.querySelector("#password");
    const password = passwordInput.value;

    const repeatPasswordInput = document.querySelector("#repeatPassword");
    const repeatPassword = repeatPasswordInput.value;

    if (userName.length < 4) {
        userLengthError.innerHTML = `
        4 characters minumum
`
    }



})





// formValidation = () => {








// }





// signUpForm.onsubmit = () => {




// }


