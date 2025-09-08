// 2. Criar um script que apresente as seguintes informações no ecrã:
// o O número de links contidos na página.



const linkElements = document.querySelectorAll('a[href]');

const showLinksButton = document.getElementById("nrLinks");
const linksText = document.querySelector("#nrLinksButton");

showLinks = () => {

    nrLinks.innerHTML = `
        There are ${linkElements.length} <br>
        links in this webpage.     
        `
}

showLinksButton.addEventListener("click", showLinks);



// o O endereço para o qual o penúltimo link está ligado.

const urlAddressText = document.querySelector("#linkAddressUrl");
const linkAddressNameButton = document.getElementById("linkAddressNameButton")

linkAddress = () => {

    let position = linkElements.length - 2;

    urlAddressText.innerHTML = `
        The link is: <br> ${linkElements[position].href} 
            
        `
}

linkAddressNameButton.addEventListener("click", linkAddress);



const twitterLinkText = document.querySelector("#twitterLinks");
const twitterLinksButton = document.getElementById("twitterLinksButton")

twitter = () => {

    let counter = 0;

    for (let i = 0; i < linkElements.length; i++) {

        if (linkElements[i].href.includes("twitter"))
            counter++;

    }

    twitterLinkText.innerHTML = `
        Nr of Twitter links: <br>  ${counter} 
        `
}

twitterLinksButton.addEventListener("click", twitter);



// o O número de links contidos no terceiro parágrafo. 

const paragraphLinksText = document.getElementById("paragraphLinks");
const paragraphLinksButton = document.getElementById("paragraphLinksButton");

const linkElementsThirdP = document.getElementsByTagName("p");

paragraph = () => {

    let thirdParagraph = linkElementsThirdP;

    paragraphLinksText.innerHTML = `
        The  paragraph contains ${linkElementsThirdP.length} links. 
        `
        console.log(thirdParagraph)
}





paragraphLinksButton.addEventListener("click", paragraph);