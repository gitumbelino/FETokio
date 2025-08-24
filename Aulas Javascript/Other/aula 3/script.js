
let pontuacaoDada = 30

function pontuacaoDada() {

    let pontuacao = document.getElementById("input-valor").value

    if (pontuacao <= 2) {
        alert("Muito Fraco")
    }

    else if (pontuacao <= 4) {
        alert("Insuficiente")
    }

    else if (pontuacao <= 6) {
        alert("Suficiente")
    }

    else if (pontuacao <= 8) {
        alert("Bom")
    }

    else if (pontuacao <= 10) {
        alert("Excelente")
    }

    else {
        alert("insira um valor entre 0 a 10")
    }
}


let velocidade = document.getElementById("input-texto").value

function verificarVelocidade() {

    if (velocidade <= 0) {
        alert("o veículo está parado")
    }

    else if (velocidade <= 20) {
        alert("o veículo está parado")
    }
    else if (velocidade <= 50) {
        alert("o veículo está parado")
    }



}

