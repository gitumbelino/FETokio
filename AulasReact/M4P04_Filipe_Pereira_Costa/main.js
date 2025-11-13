const tbody = document.querySelector("tbody");
const apiUrl = "https://jsonplaceholder.typicode.com/photos"
let html = ``

const placeholder = "https://placehold.co/80x80"
const tokioThumbnail = "https://cursos.com/wp-content/uploads/2021/04/academia-tokio-school.jpg"

const n = 20;

fetch(apiUrl)
    .then(res => res.json())
    .then(photos => {

        const selection = photos.slice(0, n);

        selection.forEach(photo => {

            // 1. Adicionar uma nova coluna à tabela com um botão que apague o álbum.

            html += `<tr id="${photo.id}">
                <th scope="row">${photo.id}</th>
                <td><img src="${placeholder}" alt=""></td>
                <td>${photo.title}</td>
                 <td><button onclick="deleteAlbum(${photo.id})" type="button" class="delete-btn btn btn-danger">Delete</button></td>
              </tr>`
        });
        tbody.innerHTML = html

    })


async function deleteAlbum(id) {
    await fetch(`${apiUrl}/${id}`, {
        // • Será apagado do API
        method: 'DELETE'
    });

    const row = document.getElementById(`${id}`);
    // • Será retirado da vista
    row.remove();

    // • Mostrar por consola o resultado da eliminação.
    console.log(`Album ${id} deleted successfully!`);
}


let newEntry =


    // • Os dados a adicionar serão:
    // • albumId 🡺 1,
    // • thumbnail 🡺 null,
    // • title 🡺 nome do aluno
    // • url 🡺 https://cursos.com/wp-content/uploads/2021/04/academia-tokio-school.jpg
{
    "albumId": 1,
    "title": "Filipe Costa",
    "url": tokioThumbnail,
    "thumbnailUrl": null
}

async function addAlbum() {

    await fetch(apiUrl, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry)
    });

    // • Mostrar por consola o resultado da inserção.
    console.log(`Student ${newEntry.title} added successfully`);
    console.log(JSON.stringify(newEntry))

}

