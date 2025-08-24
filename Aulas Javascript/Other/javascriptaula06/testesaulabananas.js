
comerBananas = () => {

    let bananas = prompt("introduza quantas bananas quer comer");
    let bananasRestantes = bananas

    //verificar se o user pôs mais do uma banana
    if (bananas > 0) {

        bananasRestantes--;
        console.log(`comi 1 banana \n Tenho ${bananasRestantes} ainda.`);

    }

    //tratar bananas restantes
    for (let i = 2; i <= bananas; i++) {

        if (bananasRestantes < 3) {
            console.warn("Tenho poucas bananas!");
        }

        bananasRestantes--;
        console.log(`comi ${ i } bananas \n Tenho ${bananasRestantes} ainda.`);


    }

    bananasRestantes--;
    console.log(`Comi ${bananas } bananas`);

   
}
