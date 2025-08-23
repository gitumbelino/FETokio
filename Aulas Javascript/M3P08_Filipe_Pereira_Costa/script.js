

CalculateFactorial = () => {

    // 1. Criar um programa que peça um número inteiro entre 0 e 10. Se for introduzido um número superior a 10 ou inferior a 0, o
    // programa emitirá uma mensagem indicando que o número introduzido não está correto e voltará a perguntar.

    let factorial = 1;
    let userNumber = 0;

    do {
        userNumber = Number(prompt("insira um nr de 0 a 10"))

    } while (userNumber < 0 || userNumber > 10);

    // 2. O programa deve calcular o seu fatorial e indicar-nos no ecrã com uma mensagem.

    if (userNumber != 0) {


        // 3. Recorde-se que o fatorial de um número é calculado da seguinte forma:
        // 5! = 5 x 4 x 3 x 2 x 1 = 120
        for (let i = userNumber; i >= 1; i--) {

            factorial = factorial * i;
        }

        console.log(factorial);

    }else{
        console.log(1);
    }
}
CalculateFactorial();




