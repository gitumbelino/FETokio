// comer laranjas enquanto houver laranjas para comer

let laranjas = prompt('Introduza quantas laranjas tem');


//enquanto houver laranjas

ComerLaranjas = () => {
    laranjas -= 10;
    alert(`Comi 10 laranjas, ainda tenho ${laranjas}.`);    

}

while (laranjas >= 0) 
    {
        ComerLaranjas()

}

