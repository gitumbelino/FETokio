// 2. Criar um script que apresente as seguintes informações no ecrã:
// o O número de links contidos na página.



const linkElements = document.querySelectorAll('a[href]');

// for(let i = 0; i < linkElements.length; i++ ){

//     console.log(linkElements[i].href);
// }


const showLinksButton = document.getElementById("nrLinks");
const linksText = document.querySelector("#nrLinksButton");



showLinks = () => {

    nrLinks.innerHTML = `
     There are ${linkElements.length} <br>
     links in this webpage.     
    `
}






nrLinksButton.addEventListener("click", showLinks);





// o O endereço para o qual o penúltimo link está ligado.
// o O número de links que nos direcionam para https://twitter.com
// o O número de links contidos no terceiro parágrafo. 
