class Forma {
    calcularArea(){
        return 0;
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }
    calcularArea(){
        return Math.PI * this.raio ** 2;
    }
}

class Retangulo extends Forma {
    constructor(largura, altura){
        super();
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea(){
        return this.altura * this.largura;
    }
}

class Triangulo extends Forma {
    constructor(base,altura){
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea(){
        return (this.base * this.altura)/2;
     }
}

const listarFormas = [
    new Circulo(8),
    new Retangulo(5,2),
    new Triangulo(10,4)
];

for (let i = 0; i < listarFormas.length; i++){
    console.log(listarFormas[i].calcularArea());
}