// 3. Criar um script para validar o formulário:







// PROGRAMAÇÃO FRONT-END:
// HTML5, CSS, JSa

// const signUpForm = document.getElementById("signup");

const userNameInput = document.querySelector("#username");

userNameField = () => {

    const userName = userNameInput.value;

    // • O script deve verificar se o nome do utilizador 
    //tem pelo menos 4 caracteres.

    const userLengthError = document.getElementById("userLengthError");

    if (userName.length < 4) {

        // • O programa desencadeará uma mensagem de aviso para cada campo, caso os requisitos não sejam cumpridos.
        userLengthError.innerHTML = `
        4 characters minumum
`
    } else {
        userLengthError.innerHTML = `
`
    }
}

userNameInput.addEventListener("input", userNameField);



const emailInput = document.querySelector("#email");

emailField = () => {

    const email = emailInput.value;
    const emailError = document.getElementById("emailError");

    //Para tal, utilizaremos uma expressão regular (RegEx Expression)
    // fornecida:
    // /^([a-zA-Z0-9_\ \-])+((([a-zA-Z0-9-])+(([a-zA-Z0-9]{2,4})+$/

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regex.test(email) === true) {
        emailError.innerHTML = ``
    } else {
        emailError.innerHTML = `
         insert a valid email
         `
    }
}

emailInput.addEventListener("input", emailField);



const passwordInput = document.querySelector("#password");

passwordField = () => {

    const password = passwordInput.value;
    const passwordError = document.getElementById("passwordError");

    // • O script deve verificar se a palavra-passe introduzida tem entre 6 e 12 caracteres.
    if (password > 6 && password < 12) {
        passwordError.innerHTML = ``
    } else {
        passwordError.innerHTML = `
         password must have between 6 and 12 characters.
         `
    }
}

passwordInput.addEventListener("input", passwordField);



const repeatPasswordInput = document.querySelector("#password");

repeatPasswordField = () => {


    const repeatPassword = repeatPasswordInput.value;
    const repeatPasswordError = document.getElementById("repeatPasswordError");

    // • E finalmente, ambas as palavras-passe devem ser verificadas para garantir que coincidem.

    if (repeatPassword === passwordInput) {
        repeatPasswordError.innerHTML = ``
    } else {
        repeatPasswordError.innerHTML = `
     Password does not match
     `
    }
};

repeatPasswordInput = document.querySelector("repeatPassword");



const signUpForm = document.getElementById("signUp");

signUpForm.addEventListener("submit", function (e) {

    e.preventDefault();
    userNameField();
    emailField();
    passwordField();
    repeatPasswordField();

})

