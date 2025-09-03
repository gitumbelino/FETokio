function escolherMenu() {
    const escolhaPrimeiroPrato = prompt("De 1 a 5, escolha o primeiro prato:");
    let primeiroPrato;

    switch (escolhaPrimeiroPrato) {
        case '1':
            primeiroPrato = document.getElementById('primo-a').textContent;
            break;
        case '2':
            primeiroPrato = document.getElementById('primo-b').textContent;
            break;
        case '3':
            primeiroPrato = document.getElementById('primo-c').textContent;
            break;
        case '4':
            primeiroPrato = document.getElementById('primo-d').textContent;
            break;
        case '5':
            primeiroPrato = document.getElementById('primo-e').textContent;
            break;
        default:
            alert("Número inválido");
            return;
    }

    const escolhaSegundoPrato = prompt("De 1 a 5, escolha o segundo prato:");
    let segundoPrato;


    switch (escolhaSegundoPrato) {
        case '1':
            segundoPrato = document.getElementById('secondo-a').textContent;
            break;
        case '2':
            segundoPrato = document.getElementById('secondo-b').textContent;
            break;
        case '3':
            segundoPrato = document.getElementById('secondo-c').textContent;
            break;
        case '4':
            segundoPrato = document.getElementById('secondo-d').textContent;
            break;
        case '5':
            segundoPrato = document.getElementById('secondo-e').textContent;
            break;
        default:
            alert("Número inválido");
            return;
    }

    alert(`As suas escolhas são: ${primeiroPrato} e ${segundoPrato}`);
}