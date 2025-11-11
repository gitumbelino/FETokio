// Prática 4.
// Com base no resultado do exercício M4_UD03
// 1. Adicionar uma nova coluna à tabela com um botão que apague o álbum.
// • Será retirado da vista
// • Será apagado do API
// • Mostrar por consola o resultado da eliminação.
// 2. Adicionar um botão que gera uma nova entrada API
// • Não será necessário atualizar a vista (tabela)
// • Os dados a adicionar serão:
// • albumId 🡺 1,
// • thumbnail 🡺 null,
// • title 🡺 nome do aluno
// • url 🡺 https://cursos.com/wp-content/uploads/2021/04/academia-tokio-school.jpg
// • Mostrar por consola o resultado da inserção.


const tbody = document.querySelector("tbody");
const apiUrl = "https://jsonplaceholder.typicode.com/photos"
let html = ``
const placeholder = "https://placehold.co/80x80"

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
                 <td><button type="button" class="btn btn-danger">Delete</button></td>
              </tr>`

        });
        tbody.innerHTML = html

    })
