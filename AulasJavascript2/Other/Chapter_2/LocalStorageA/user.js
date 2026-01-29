let loggedInUser;

let userName = document.querySelector(".username");
let name = document.querySelector(".name");
let mail = document.querySelector(".mail");
let phone = document.querySelector(".phone");
let website = document.querySelector(".website");
let message = document.querySelector("#message");


window.onload = () => {
    setLoggedUser();
    setLoggedUserPage();
};


let setLoggedUser = () => {
    loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        loggedUser.innerHTML = `Logged user: ${loggedInUser.name}`
        setLogin()
    }
    else {
        loggedUser.innerHTML = `Not logged in`
        setLogout()
    }
};


let setLoggedUserPage = () => {
    loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        userName.innerHTML = `Username: ${loggedInUser.username}`
        name.innerHTML = `Name: ${loggedInUser.name}`
        mail.innerHTML = `Email: ${loggedInUser.email}`
        phone.innerHTML = `Phone: ${loggedInUser.phone}`
        website.innerHTML = `Website: ${loggedInUser.website}`
   
    }
    else {
        message.innerHTML = `No logged in users`
     
    }

};
