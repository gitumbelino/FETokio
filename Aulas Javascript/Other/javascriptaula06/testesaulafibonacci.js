calcularNrFibonacci =() => {

    let numAnterior = 0;
    let numActual = 1;
    let numSeguinte = 1;

    for (let i=0; i<20; i++)
    {
        console.log(numAnterior);
        numSeguinte = numAnterior + numActual;
        numAnterior = numActual;
        numActual = numSeguinte;
    }

}