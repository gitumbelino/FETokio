Tabuada = () => {

    let numTabuada = prompt ("Introduza um nr para a tabuada");
    
    for (let i=1; i <= 10; i++) {
        console.log (`${i} x ${numTabuada} = ${i * numTabuada}`);
    }
}