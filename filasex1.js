class Fila {
    constructor() {
        this.items = {};
        this.inicio = 0;
        this.fim = 0;
    }

    enqueue(elemento) {
        this.items[this.fim] = elemento;
        this.fim++;
    }

    dequeue() {
        if (this.isEmpty()) return undefined;

        const item = this.items[this.inicio];
        delete this.items[this.inicio];
        this.inicio++;

        if (this.inicio === this.fim) {
            this.inicio = 0;
            this.fim = 0;
        }

        return item;
    }

    front() {
        if (this.isEmpty()) return undefined;
        return this.items[this.inicio];
    }

    isEmpty() {
        return this.fim === this.inicio;
    }

    size() {
        return this.fim - this.inicio;
    }

    clear() {
        this.items = {};
        this.inicio = 0;
        this.fim = 0;
    }
}


let filaMontanhaRussa = new Fila();


filaMontanhaRussa.enqueue({ nome: "Ana", tempo: 5 });
filaMontanhaRussa.enqueue({ nome: "Bruno", tempo: 3 });
filaMontanhaRussa.enqueue({ nome: "Carla", tempo: 4 });

console.log("=== Início da brincadeira ===");

while (!filaMontanhaRussa.isEmpty()) {
    let crianca = filaMontanhaRussa.dequeue();
    console.log(` ${crianca.nome} está brincando por ${crianca.tempo} segundos...`);

    
    for (let i = crianca.tempo; i >= 1; i--) {
        console.log(` Tempo restante para ${crianca.nome}: ${i}s`);
    }

    console.log(` ${crianca.nome} terminou de brincar!\n`);
}
