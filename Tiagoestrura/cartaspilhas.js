class Pilha {
    constructor() {
        this.itens = [];
    }

    push(elemento) {
        this.itens.push(elemento);
    }

    pop() {
        return this.itens.pop();
    }

    topo() {
        return this.itens[this.itens.length - 1];
    }

    estaVazia() {
        return this.itens.length === 0;
    }

    imprimir(nome) {
        console.log(`${nome}: [${this.itens.join(", ")}]`);
    }
}


let acoesFeitas = new Pilha();
let acoesDesfeitas = new Pilha();


acoesFeitas.push("A");
acoesFeitas.push("B");
acoesFeitas.push("C");
console.log("apos digitar A, B, C:");
acoesFeitas.imprimir("Feitas");
acoesDesfeitas.imprimir("Desfeitas");

acoesDesfeitas.push(acoesFeitas.pop());
acoesDesfeitas.push(acoesFeitas.pop());
console.log("\n apos desfazer duas vezes:");
acoesFeitas.imprimir("Feitas");
acoesDesfeitas.imprimir("Desfeitas");


acoesFeitas.push(acoesDesfeitas.pop());
console.log("\n apos refazer uma vez:");
acoesFeitas.imprimir("Feitas");
acoesDesfeitas.imprimir("Desfeitas");
