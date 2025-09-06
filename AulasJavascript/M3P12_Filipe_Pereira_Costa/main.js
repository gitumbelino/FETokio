// 3. Criar um script para validar o formulário:



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


const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const repeatPasswordError = document.getElementById("repeatPasswordError");


const userNameInput = document.querySelector("#username");

userNameField = () => {

    const userName = userNameInput.value;

    const userLengthError = document.getElementById("userLengthError");

    // • O script deve verificar se o nome do utilizador 
    //tem pelo menos 4 caracteres.
    if (userName.length < 4) {
        userLengthError.innerHTML = `
        4 characters minumum
`
    } else {
        userLengthError.innerHTML = `
`
    }
}


userNameInput.addEventListener("input", userNameField);






emailField = () => {

    const emailInput = document.querySelector("#email");
    
    const email = emailInput.value;
    const emailError = document.getElementById("emailError");
    const regex = `/^([a-zA-Z0-9_\ \-])+((([a-zA-Z0-9-])+(([a-zA-Z0-9]{2,4})+$/`;



}




// const form = document.querySelector("#form");
// const input = document.querySelector("#phone");
// const output = document.querySelector("#output");

// const re = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;

// function testInfo(phoneInput) {
//     const ok = re.exec(phoneInput.value);

//     output.textContent = ok
//         ? `Thanks, your phone number is ${ok[0]}`
//         : `${phoneInput.value} isn't a phone number with area code!`;

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     testInfo(input);
// });





signUpForm.addEventListener("submit", function (e) {

    e.preventDefault();


    userNameField();




    const passwordInput = document.querySelector("#password");
    const password = passwordInput.value;

    const repeatPasswordInput = document.querySelector("#repeatPassword");
    const repeatPassword = repeatPasswordInput.value;




})





// formValidation = () => {








// }





// signUpForm.onsubmit = () => {




// }


