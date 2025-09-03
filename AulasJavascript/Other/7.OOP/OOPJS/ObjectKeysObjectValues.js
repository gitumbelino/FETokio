//checking object values =================================


window.onload = () => {

    const gerevasio =  {

        nome: "Gerevásio",
        sobrenome: "reciclatudo",
        idade: 37

    }

    console.log(Object.keys(gerevasio))

}



//checking integrity of the objects =================================

window.onload = () => {

    fetch(`https://jsonplaceholder.typicode.com/albums/`)

        .then(res => res.json())
        .then(allAlbums => {

            allAlbums.forEach(album => {

                const properties = Object.keys(album)

                if (properties.includes("userId")
                    && properties.includes("id")
                    && properties.includes("title")) {
                    console.log("válido")
                } else {
                    console.error("O albúm com id " + album.id + " não tem todas as keys, falta o userId")
                }                
            });
        })
}




//exemplo 1, checking object structure (keys) ======================================================================


// window.onload = () => {

//     fetch(`https://jsonplaceholder.typicode.com/albums/`)

//         .then(res => res.json())
//         .then(album => {
//             const properties = Object.keys(album)
//             console.log(properties)
//         })

// }