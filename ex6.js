class Pilha {
    #itens;

    constructor(){
        this.#itens = [];
    }

    empilhar(item){
        this.#itens.push(item);
    }
    desempilhar(){
        if (this.estaVazia()){
            return "a pilha esta vazia";
        }
        return this.#itens.pop();
    }
    topo(){
        if (this.estaVazia()){
            return null;
        }
        return this.#itens[this.#itens.length - 1];
    }
    estaVazia(){
        return this.#itens.length === 0;
    }
    get tamanho(){
        return this.#itens.length;
    }
}

const pilha = new Pilha();

pilha.empilhar("A");
pilha.empilhar("B");
pilha.empilhar("C");

console.log("topo:", pilha.topo())
console.log("tamanho:", pilha.tamanho);
console.log("removido", pilha.desempilhar());

console.log("topo:", pilha.topo());
console.log("tamanho:", pilha.tamanho);
console.log("esta vazia?",pilha.estaVazia());

