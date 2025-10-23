let loggedInUser;
let userInfo = document.querySelector("#user-info");

let setUserInfo = () => {
    loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        userInfo.innerHTML = `Logged user: ${loggedInUser.name}`
    }
    else {
        userInfo.innerHTML = `Not logged in`
    }

}

window.onload = () => {

    setUserInfo();

}


document.querySelector("#login-button").onclick = async () => {

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







// document.querySelector("logout-button").onclick = async () => {
//     // let res = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     // let json = await removeEventListener.json()
//     // console.log(json)
// }