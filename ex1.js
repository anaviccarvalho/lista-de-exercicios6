class Pessoa {
    constructor(nome, idade, email){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    apresentar(){
        return 'ola, meu nome é ' + this.nome + ', tenho ' + this.idade + ' anos, meu email para contato é ' + this.email
    }

    fazerAniversario(){
        return "Quando eu fizer aniversario terei " + (this.idade + 1) + " anos";
    }
}

const pessoa1 = new Pessoa (
    nome = "Leticia",
    idade = 19,
    email = "lelealves23455432@gmail.com"
);
console.log(pessoa1.apresentar());
console.log(pessoa1.fazerAniversario());