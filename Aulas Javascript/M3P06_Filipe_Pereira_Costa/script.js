promptLetters = () => {

    let letters = "";
    let letter;

    while (true) {

        letter = prompt("insira uma letra, clique cancelar para terminar");

        if (letter === null) {
            break;
        }
        else if (letter.length === 1 && letter.match(/[a-zA-Z]/)) {
            letters = letters + letter + ", ";
            document.getElementById("insertedLetters").innerText = letters;
        }
        else {
            alert("Um letra de cada e de cada vez, por favor")
        }
    }
}

promptLetters();

// array version, just playing around ;)

// promptLetters = () => {

//     let letters = [];
//     let letter;

//     while (true) {

//         letter = prompt("insira uma letra, clique cancelar para terminar");

//         if (letter === null) {
//             break;
//         }
//         else if (letter.length === 1 && letter.match(/[a-zA-Z]/)) {
//             letters.push(letter);
//             document.getElementById("insertedLetters").innerText = letters.join(", ");
//         }
//         else {
//             alert("Um letra de cada e de cada vez, por favor")
//         }
//     }
// }


