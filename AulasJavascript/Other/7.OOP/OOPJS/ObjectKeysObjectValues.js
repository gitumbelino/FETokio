//checking integrity of the objects =================================

window.onload = () => {

    fetch(`https://jsonplaceholder.typicode.com/albums/`)

        .then(res => res.json())
        .then(allAlbums => {

// eliminar para testar o filtro
//             delete allAlbums[42].userId
//             delete allAlbums[41].userId
//             delete allAlbums[5].userId

          

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