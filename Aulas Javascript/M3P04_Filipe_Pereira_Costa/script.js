function calcularMedia() {
    const value1 = parseFloat(document.getElementById('valor1').value);
    const value2 = parseFloat(document.getElementById('valor2').value);
    const value3 = parseFloat(document.getElementById('valor3').value);
    const value4 = parseFloat(document.getElementById('valor4').value);
    const value5 = parseFloat(document.getElementById('valor5').value);
    const value6 = parseFloat(document.getElementById('valor6').value);

    const soma = value1 + value2 + value3 + value4 + value5 + value6;

    const media = soma / 6;

    document.getElementById('media').textContent = 'A sua média é de: ' + media;
}

function calcularClassificacao() {
    const media = parseFloat(document.getElementById('media').textContent.replace('A sua média é de: ', ''));

    let nota;

    if (media <= 2) {
        nota = 'Muito Fraco';
    } else if (media <= 4) {
        nota = 'Insuficiente';
    } else if (media <= 6) {
        nota = 'Suficiente';
    } else if (media <= 8) {
        nota = 'Bom';
    } else if (media <= 10) {
        nota = 'Excelente';
    }

    document.getElementById('classificacao').textContent = (`O estudante obteu um ${media}`) + (' que corresponde a: ') + nota;
}

