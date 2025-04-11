class Fila {
    constructor() {
        this.itens = [];
    }

    enqueue(elemento) {
        this.itens.push(elemento);
    }

    dequeue() {
        return this.itens.shift();
    }

    isEmpty() {
        return this.itens.length === 0;
    }

    size() {
        return this.itens.length;
    }

    print() {
        console.log(this.itens.join(', '));
    }
}

function atenderClientes(fila) {
    let tempoTotal = 0;
    let tempoPorCliente = 2;

    while (!fila.isEmpty()) {
        const cliente = fila.dequeue();
        console.log(`Atendendo: ${cliente}`);
        tempoTotal += tempoPorCliente;
    }

    console.log(`Tempo total de espera: ${tempoTotal} minutos`);
}

let filaDriveThru = new Fila();
filaDriveThru.enqueue("Maria");
filaDriveThru.enqueue("João");
filaDriveThru.enqueue("Ana");

atenderClientes(filaDriveThru);
