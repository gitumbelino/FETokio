// 1. Criar um botão no documento HTML que chama a função 
//"generateTable()" quando clicado.


generateTable = () => {

    let table = document.getElementById("table");

    // 2. Criar uma função "generateTable()" que cada vez que
    //é chamada, cria uma tabela de 3 x 3 elementos.

    for (let i = 1; i <= 3; i++) {
        let row = document.createElement("tr");
        table.appendChild(row)


        // 3. Em cada elemento da tabela deve ser indicado a que
        //célula e a que coluna corresponde.
        //celula da linha 0, coluna 0

        for (let c = 1; c <= 3; c++) {
            let cell = document.createElement("td");
            cell.innerHTML = `Cell nrº ${c} in row nrº ${i}`;
            row.appendChild(cell);
        }
    }
}












