class Player {

    #nome
    #hp
    #attackPoints


    constructor(nome, hp, attackPoints) {

        this.#nome = nome;
        this.#hp = hp;
        this.#attackPoints = attackPoints
    }

    getNome() { return this.#nome }
    getHp() { return this.#hp }
    getAttackPoints() { return this.#attackPoints }

    setNome(nome) {
        this.#nome = nome
    }

    setHp(hp) {
        this.#hp = hp >= 0 ? hp : 0
    }

    setAttackPoints(attackPoints) {
        this.#attackPoints = attackPoints
    }

    receiveDamage(damage) {
        this.setHp(this.getHp() - damage)
    }


    printData() {
        console.log(`${this.#nome}, with ${this.#hp} hp and ${this.#attackPoints} attack. `)
    }






    attack(target) {



        target.receiveDamage(this.getAttackPoints());



        console.log(`${this.getNome()} attacked ${target.getNome()}.`,
            `${target.getNome()} was left with ${target.getHp()} hp.`)
    }

}


class Paladin extends Player {

    #healingPoints

    constructor(nome, hp, attackPoints) {

        super(nome, hp, attackPoints);
        this.#healingPoints = 3;
    }


    heal() {
        this.setHp(this.getHp() + this.#healingPoints);
        console.log(`${this.getNome()} foi curado com ${this.#healingPoints} pontos`);
        console.log(`${this.getNome()} tem agora ${this.getHp()} pontos de vida`)

    }

}


const playerA = new Player("joaquim", 60, 4);
const playerB = new Paladin("Alberto", 30, 7);
const playerC = new Player("Maria", 70, 2);

playerA.attack(playerB);
playerB.attack(playerC);
playerC.attack(playerA);

playerB.heal()


 
