function pontuacaoDada() {

    let pontuacao = document.getElementById("input-valor").value


    if (pontuacao < 0) {
        alert("insira um valor entre 0 a 10")
    }

    else if (pontuacao <= 2) {
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


