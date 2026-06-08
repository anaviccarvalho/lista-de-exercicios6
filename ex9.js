class Veiculo {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidade = 0;
    }
    acelerar(){
        this.velocidade += 10;
        console.log(`velocidade: ${this.velocidade} km/h`)
    }
    frear(){
        this.velocidade = Math.max(0, this.velocidade - 10);
        console.log(`velocidade: ${this.velocidade} km/h`)
    }
}

class Carro extends Veiculo{
    constructor(marca, modelo, combustivel, litrosNoTanque){
        super(marca,modelo);
        this.combustivel = combustivel;
        this.litrosNoTanque = litrosNoTanque;
        }
}

class CarroEletrico{
    constructor(marca, modelo, bateriaKwh){
        super(marca, modelo);
        this.bateriaKwh = bateriaKwh;
    }
    acelerar(){
        if (this.bateriaKwh > 0){
            this.velocidade +=10;
            this.bateriaKwh -= 1;

            console.log(`velocidade: ${this.velocidade} km/h | bateria: ${this.bateriaKwh} kWh`)
        } else {
            console.log("bateria descarregada");
        }
    }
}

const tesla = new CarroEletrico (
    "Tesla",
    "model 3",
    5
);
tesla.acelerar();
tesla.acelerar();
tesla.acelerar();
tesla.frear();