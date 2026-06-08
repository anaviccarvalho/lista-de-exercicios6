class Usuario {
    #senha;
    constructor(nome, senha){
        this.nome = nome;
        this.#senha = senha;
    }

    autenticar(senha){
        return this.#senha === senha;
    }
    alterarSenha(senhaAtual, novaSenha){
        if (this.#senha === senhaAtual){
            this.#senha = novaSenha;
            console.log("senha alterada com sucesso!");
        } else {
            console.log("senha atual incorreta.")
        }
    }
}

const usuario = new Usuario (
    "Clara",
    "678954",
);

console.log (usuario.autenticar("678954"));
console.log (usuario.autenticar("gudsa"));

usuario.alterarSenha("678954", "124578");

console.log (usuario.autenticar("124578"));