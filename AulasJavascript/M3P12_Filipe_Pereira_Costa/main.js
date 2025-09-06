// 3. Criar um script para validar o formulário:

//=================================funcao para verificar o nome=======================================

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

    // console.log(userName);
}

userNameInput.addEventListener("input", userNameField);

//=================================funcao para verificar os req mail=======================================

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

    // console.log(email);

}

emailInput.addEventListener("input", emailField);

//=============================funcao para verificar os req password===========================================

const passwordInput = document.querySelector("#password");

passwordField = () => {

    const password = passwordInput.value;
    const passwordError = document.getElementById("passwordError");

    // • O script deve verificar se a palavra-passe introduzida tem entre 6 e 12 caracteres.
    if (password.length >= 6 && password.length <= 12) {
        passwordError.innerHTML = ``
    } else {
        passwordError.innerHTML = `
         password must have between <br> 6 and 12 characters.
         `
    }

    // console.log(password);
}

passwordInput.addEventListener("input", passwordField);

//=============================funcao para verificar a repeticao da password===========================================

const repeatPasswordInput = document.querySelector("#repeatPassword");

repeatPasswordField = () => {

    const password = passwordInput.value;
    const repeatPassword = repeatPasswordInput.value;
    const repeatPasswordError = document.getElementById("repeatPasswordError");

    // • E finalmente, ambas as palavras-passe devem ser verificadas para garantir que coincidem.

    if (repeatPassword === password) {
        repeatPasswordError.innerHTML = ``
    } else {
        repeatPasswordError.innerHTML = `
     Password does not match
     `
    }

    // console.log(repeatPassword); 
};

repeatPasswordInput.addEventListener("input",repeatPasswordField)

//=====================execução das funcoes===================================================
//dividi por funcoes de maneira a criar componentes 
//reutilizaveis para fácilmente poder chamá-las no codigo 

const signUpForm = document.getElementById("signUp");

signUpForm.addEventListener("submit", function (e) {
    e.preventDefault();
    userNameField();
    emailField();
    passwordField();
    repeatPasswordField();
})





