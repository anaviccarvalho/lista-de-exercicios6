class ContaBancaria {
    constructor(titular, saldo, numeroConta){
        this.titular = titular;
        this.saldo = saldo;
        this.numeroConta = numeroConta;
    }

    depositar(valor){
        return this.saldo += valor;
        console.log(`Deposito de R$${valor} realizado com sucesso.`);
    }

    sacar(valor){
         if (valor <= this.saldo){
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        } else {
            console.log("saldo insuficiente.");
        }
    }

    exibirSaldo(){
        console.log(`saldo atual: R$${this.saldo}`);
    }
}

const conta = new ContaBancaria (
    "Ana",
    3000,
    "09988-2"
);

conta.exibirSaldo();
conta.depositar(300);
conta.exibirSaldo();
conta.sacar(550);
conta.exibirSaldo();
conta.sacar(3400);

