// A partir da documentação da API pública: jsonplaceholder. E desde a criação de um documento HTML básico com a sua estrutura
// correspondente. É-lhe pedido que o faça:
// 1. Inserir o código JavaScript dentro do próprio documento HTML, usando a tag correspondente.
// 2. Obter as primeiras vinte imagens do API.
// 3. Colocar a informação obtida numa tabela que mostra três colunas com as seguintes informações:
// • ID do álbum.
// • Título do álbum.
// • Imagem principal do álbum (url).



const tbody = document.querySelector("tbody");
const apiUrl = "https://jsonplaceholder.typicode.com/photos"
let html = ``
const placeholder = "https://placehold.co/50x50"

const n = 20;

fetch(apiUrl)

    .then(res => res.json())

    .then(photos => {

        const selection = photos.slice(0, n);

        selection.forEach(photo => {

            html += `<tr>
                <th scope="row">${photo.id}</th>
                <td><img src="${placeholder}" alt=""></td>
                <td>${photo.title}</td>
              </tr>`

        });
        tbody.innerHTML = html

    })
