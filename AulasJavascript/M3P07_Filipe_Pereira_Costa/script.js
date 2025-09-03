
//2. Começamos o jogo com 50 moedas.
//variável global como valor inicial.
let gameCredit = 50;

bettingGame = () => {

    // 3. O programa deve escolher um número inteiro entre 1 e 6 (um dado).
    let dieNumber = Math.floor(Math.random() * 6) + 1;
    alert("the random number is: " + dieNumber);
    alert("your credit is: " + gameCredit); // fiz vários console alerts para verificar o codigo

    // 4. O programa irá perguntar ao utilizador em que número quer apostar.
    // usei um do while para correr em loop até inserir o valor certo (entre 1 e 6)
    let userNumber = 0;

    do {
        userNumber = Number(prompt("Choose a number, from 1 to 6"));
    }
    while (userNumber < 1 || userNumber > 6);
    alert("you chose: " + userNumber)

    // 5. O programa irá perguntar ao utilizador quantas moedas quer apostar, 
    // sendo o mínimo 1.
    let bet = 0;

    do {
        bet = Number(prompt("How much are you betting? " + "You have " + gameCredit + " credits."));
    }

    while (bet < 1 || bet > gameCredit);

    if (userNumber === dieNumber) {

        // 6. Se o utilizador adivinhar corretamente, o utilizador ganhará o dobro da 
        //quantia apostada.
        gameCredit += (bet * 2);
        alert("You won! You have " + gameCredit + " you can do this, let's bet some more!");
    } else {
        // Se perder, será subtraído o que apostou.
        gameCredit -= bet;

        // 7. Quando se perde, o programa lançará uma mensagem de alerta indicando o 
        //montante perdido e as restantes moedas.
        alert("You lost, you have " + gameCredit + " credits, try again, next time will be better, we all know this is true!")
        if(gameCredit <= 0){
            alert("You have no money, but out casinos offer very convenient credit alternatives!");
        }
    }
}


while (gameCredit > 0) {
    bettingGame();
}


