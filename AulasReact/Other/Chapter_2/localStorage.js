let loggedInUser;
let userInfo = document.querySelector("#user-info");
let loginButton = document.querySelector("#login-button");
let logoutButton = document.querySelector("#logout-button");

window.onload = () => {

    setUserInfo();

};
 



let setUserInfo = () => {
    loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        userInfo.innerHTML = `Logged user: ${loggedInUser.name}`
    }
    else {
        userInfo.innerHTML = `Not logged in`
    }

};


loginButton.onclick = async () => {

    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users/1")
        let loggedInUser = await res.json()
        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
        setUserInfo();
        console.log("Logged in");

    }
    catch (e) {
        console.log('error -> ' + e)
    }
}


logoutButton.onclick = () => {

    try {

        localStorage.removeItem('loggedInUser')
        setUserInfo();
        console.log("Logged out");

    }
    catch (e) {
        console.log('error -> ' + e)
    }
}
