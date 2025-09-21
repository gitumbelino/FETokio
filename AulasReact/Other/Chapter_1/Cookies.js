function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/ Secure;";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function eraseCookie(name) {

    document.cookie = name + '=; Max-Age=-99999999;';
}

let openArticle = (article) => {

    let favouritesCookie = getCookie("favourites");
    let favouritesArray = [];

    articles[article - 1].categories.forEach((category, index) => {

        //add new category if it does not exist already 
        if (!favouritesArray.includes(category))
            favouritesArray.push(category)
    })

    favouritesCookie.split(",").forEach((category, index) => {

        if (!favouritesArray.includes(category))
            favouritesArray.push(category)
    })

    let newCookies = favouritesArray.join(",")
    // console.log(newCookies)


    if (newCookies[newCookies.length - 1] == ",")
        newCookies = newCookies.substring(0, newCookies.length - 1)

    newCookies = newCookies.substring(0, newCookies.length - 2)
    console.warn(newCookies)

    setCookie("favourites", newCookies, 365)
    // console.log(getCookie("favourites"))

    window.location = "/article.html"
}

let loadAd = () => {

    let favourites = getCookie("favourites").split(',');

    let favouritesAds = [];

    let adsDOM = document.getElementById("ads")

    ads.filter((ad) => {

        favourites.forEach(favourite => {
            console.log(ad.categories.includes(favourite))

            if (ad.categories.includes(favourite)) {
                if (!favouritesAds.includes(ad)) {
                    favouritesAds.push(ad)
                }
            }

        })

    })

    favouritesAds.forEach(ad => {

        let ad = document.createElement("div")
        ad.innerHTML = `Title: ${ad.title} Content:${ad.text} Categories: ${ad.categories}`
    })

    // let favouritesAds = ads.filter((ad) => {

    //     favourites.forEach(favourite => {

    //         if (ad.categories.includes(favourite)) {
    //             return ad
    //         }
    //     })
    // })

    console.log(favouritesAds)

}



let article = () => {

    let favourites = getCookie("favourites")

    console.log(favourites)

    // setCookie = ("favourites", "cosmetics", 365)

}


let ads = [
    {
        title: "ad A",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut aperiam earum expedita non tempore est voluptas nostrum labore ratione temporibus architecto praesentium quisquam recusandae fuga aliquid, doloremque, reprehenderit beatae?",
        categories: ["cosmetics", "news"]
    },
    {
        title: "ad B",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut aperiam earum expedita non tempore est voluptas nostrum labore ratione temporibus architecto praesentium quisquam recusandae fuga aliquid, doloremque, reprehenderit beatae?",
        categories: ["recipes", "footbal"]
    },
    {
        title: "ad C",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut aperiam earum expedita non tempore est voluptas nostrum labore ratione temporibus architecto praesentium quisquam recusandae fuga aliquid, doloremque, reprehenderit beatae?",
        categories: ["cars", "nature"]
    },
    {
        title: "ad  D",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut aperiam earum expedita non tempore est voluptas nostrum labore ratione temporibus architecto praesentium quisquam recusandae fuga aliquid, doloremque, reprehenderit beatae?",
        categories: ["desserts", "swimsuits"]
    },
    {
        title: "ad E",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut aperiam earum expedita non tempore est voluptas nostrum labore ratione temporibus architecto praesentium quisquam recusandae fuga aliquid, doloremque, reprehenderit beatae?",
        categories: ["poo", "sausages"]
    },

]



let articles = [
    {
        title: "article A",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut aperiam earum expedita non tempore est voluptas nostrum labore ratione temporibus architecto praesentium quisquam recusandae fuga aliquid, doloremque, reprehenderit beatae?",
        categories: ["cosmetics", "news"]
    },
    {
        title: "article B",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut aperiam earum expedita non tempore est voluptas nostrum labore ratione temporibus architecto praesentium quisquam recusandae fuga aliquid, doloremque, reprehenderit beatae?",
        categories: ["recipes", "footbal"]
    },
    {
        title: "article C",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut aperiam earum expedita non tempore est voluptas nostrum labore ratione temporibus architecto praesentium quisquam recusandae fuga aliquid, doloremque, reprehenderit beatae?",
        categories: ["cars", "nature"]
    },
    {
        title: "article D",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut aperiam earum expedita non tempore est voluptas nostrum labore ratione temporibus architecto praesentium quisquam recusandae fuga aliquid, doloremque, reprehenderit beatae?",
        categories: ["desserts", "swimsuits"]
    },
    {
        title: "article E",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aut aperiam earum expedita non tempore est voluptas nostrum labore ratione temporibus architecto praesentium quisquam recusandae fuga aliquid, doloremque, reprehenderit beatae?",
        categories: ["poo", "sausages"]
    },

]