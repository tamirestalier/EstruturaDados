class Pilha {
    constructor() {
        this.itens = [];
    }

    push(elemento) {
        this.itens.push(elemento);
    }
  //TIRA DO TOPO DA FILA
    pop() {
        return this.itens.pop();
    }

    topo() {
        return this.itens[this.itens.length - 1];
    }

    estaVazia() {
        return this.itens.length === 0;
    }

    tamanho() {
        return this.itens.length;
    }

    imprimir() {
        console.log(this.itens);
    }
}

//  embaralhando e empilhando cartas
let pilhaOriginal = new Pilha();
pilhaOriginal.push("A");
pilhaOriginal.push("B");
pilhaOriginal.push("C");
pilhaOriginal.push("D");
pilhaOriginal.push("E");

console.log(" Pilha original (empilhada):");
pilhaOriginal.imprimir();

//  nova pilha para inverter
let pilhaInvertida = new Pilha();

// desempilha da original e empilha na nova //while =enquanto
while (!pilhaOriginal.estaVazia()) {
    pilhaInvertida.push(pilhaOriginal.pop());
}

console.log(" Pilha invertida:");
pilhaInvertida.imprimir();

// mostra como saem agora (pop da pilha invertida)
console.log(" Ordem de saída (após inversão):");
while (!pilhaInvertida.estaVazia()) {
    console.log(pilhaInvertida.pop());
}
