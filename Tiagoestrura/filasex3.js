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
}

// Função de atendimento intercalado
function atenderClientesComPrioridade(filaIdosos, filaGeral) {
    let tempoTotal = 0;
    const tempoPorCliente = 2;

    while (!filaIdosos.isEmpty() || !filaGeral.isEmpty()) {
        if (!filaIdosos.isEmpty()) {
            const cliente = filaIdosos.dequeue();
            console.log(`(Prioridade) Atendendo: ${cliente.nome} (${cliente.idade} anos)`);
            tempoTotal += tempoPorCliente;
        }

        if (!filaGeral.isEmpty()) {
            const cliente = filaGeral.dequeue();
            console.log(`Atendendo: ${cliente.nome} (${cliente.idade} anos)`);
            tempoTotal += tempoPorCliente;
        }
    }

    console.log(`Tempo total de atendimento: ${tempoTotal} minutos`);
}

// Criando as filas
let filaIdosos = new Fila();
let filaGeral = new Fila();

// Lista de clientes
let clientes = [
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 65 },
    { nome: "Carlos", idade: 70 },
    { nome: "Ana", idade: 25 },
    { nome: "Pedro", idade: 67 },
    { nome: "Lúcia", idade: 45 }
];

// Distribuir clientes entre as filas
for (let cliente of clientes) {
    if (cliente.idade >= 60) {
        filaIdosos.enqueue(cliente);
    } else {
        filaGeral.enqueue(cliente);
    }
}

// Chamar função de atendimento
atenderClientesComPrioridade(filaIdosos, filaGeral);
