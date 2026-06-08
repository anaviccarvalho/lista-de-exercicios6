class Animal {
    constructor(nome, som){
        this.nome = nome;
        this.som = som;
    }

    emitirSom(){
        console.log(`${this.nome} faz ${this.som}`);
    }
}

class Cachorro extends Animal {
    constructor(nome, som, raca){
        super(nome, som);
        this.raca = raca;
    }

    emitirSom(){
        console.log(`${this.nome}, da raca ${this.raca}, faz ${this.som}`);
    }
}

const animal = new Animal ("Vaca", "Muu");
animal.emitirSom();

const cachorro = new Cachorro ("thor", "au au", "pastor alemao");
cachorro.emitirSom();