
let loggedUser = document.querySelector("#logged-user");
let loginButton = document.querySelector("#login-button");
let logoutButton = document.querySelector("#logout-button");

// window.onload = () => {

//     setLoggedUser();

// };

setLogin = () => {
    logoutButton.style.display = "initial"
    loginButton.style.display = "none"
}


setLogout = () => {
    logoutButton.style.display = "none"
    loginButton.style.display = "initial"
}


loginButton.onclick = async () => {

    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users/3")
        let loggedInUser = await res.json()
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
        setLoggedUser();
        setLogin()
        console.log("Logged in");
        window.location.reload();

    }
    catch (e) {
        console.log('error -> ' + e)
    }
}


logoutButton.onclick = () => {

    try {

        localStorage.removeItem('loggedInUser')
        setLoggedUser();
        console.log("Logged out");
        setLogout()
 
    }
    catch (e) {
        console.log('error -> ' + e)
    }
}
