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

const n = 3;

fetch(apiUrl)
    .then(res => res.json())
    .then(photos => {

        const selection = photos.slice(0, n);

        selection.forEach(photo => {

            html += `<tr>
                <th scope="row">${photo.id}</th>
                <td><img src="${placeholder}" alt=""></td>
                <td>${photo.title}</td>
                 <td><button onclick="deleteAlbum(${photo.id})" type="button" class="delete-btn btn btn-danger">Delete</button></td>
              </tr>`

        });
        tbody.innerHTML = html

    })


async function deleteAlbum(id) {
    await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
        method: 'DELETE'
    });
    console.log(`Album ${id} deleted successfully`);
}



let newEntry =
{
    "albumId": 1,
    "title": "Filipe Costa",
    "url": "https://cursos.com/wp-content/uploads/2021/04/academia-tokio-school.jpg",
    "thumbnailUrl": null
}

async function addAlbum() {

    await fetch(apiUrl, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry)
    });

    console.log(`Student ${newEntry.title} added successfully`);

}

