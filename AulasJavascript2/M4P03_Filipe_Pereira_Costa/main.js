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
