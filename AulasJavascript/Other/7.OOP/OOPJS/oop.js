console.log("test")

let words = ["acabrunhado", "arar", "alho", "voo" ];

let newWords = words.map(letra => letra [letra.length -1]);

console.log(words)
console.log(newWords) 

let newWords2 = words.map(letra => letra.substring (1,3));
console.log(newWords2)



class Monstro {

    constructor(nome, vida){
      this.nome = nome
      this.vida = vida
    }
  
    curar(){
      console.log("curou vida.")
      this.vida  = 20
    }
  
    regenerar(){
      console.log(`${this.nome} regenerou vida.`)
      this.vida  = 2
    }
      
  }
  
  class Boss extends Monstro {
  
    constructor(nome, vida, feitiço){
  
      super(nome, vida)
      this.feitiço = feitiço
      
    }
  
    regenerar(){
  
      console.log(`${this.nome} regenerou muita vida.`)
      this.vida  = 5
      
    }
    
  }
  
  let monstro = new Monstro("Diogo", 20)
  let monstrozão = new Boss("Diogozão", 200, function(){
    console.log("Feitiço curazona: O boss curou-se infinitamente")
    this.vida  = 100
  })
  
  
  console.log(monstrozão)
  
  monstro.regenerar()
  monstrozão.regenerar()
  monstrozão.feitiço()
  
  console.log(monstrozão)


 