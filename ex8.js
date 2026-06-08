class Funcionario {
    constructor(nome, salario, cargo){
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }
}

class Gerente extends Funcionario {

    constructor(nome, salario, cargo, bonus){
        super(nome, salario, cargo);
        this.equipe = [];
        this.bonus = bonus;
    }

    adicionarMembro(membro){
        this.equipe.push(membro);
    }

    calcularSalarioTotal(){
        return this.salario + this.bonus;
    }
}

const membro1 = new Funcionario (
    "sophia",
    3000, 
    "Desenvolvedora de software"
);
const membro2 = new Funcionario (
    "Bruno",
    2700,
    "designer"
);

const gerente = new Gerente (
    "Prado",
    7500,
    "Gerente de TI",
    500
);

gerente.adicionarMembro(membro1);
gerente.adicionarMembro(membro2);

console.log ("Gerente:", gerente.nome);
console.log ("Quantidade de membros:", gerente.equipe.length);
console.log ("Salario total:", gerente.calcularSalarioTotal());