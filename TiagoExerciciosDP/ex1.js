//classe base
class Animal {
    constructor(nome) {
        this.nome = nome; //atributo
    }

    fazerSom() {
        console.log("O animal faz um som...");
    }
}

//subclasse
class Cachorro extends Animal {
    fazerSom() {//polimorfismo(sobrescrita de método )
        console.log("O cachorro late: Au Au!"); 
    } 
}

// criar instâncias
const animal = new Animal("Animal genérico");
const cachorro = new Cachorro("Rex");

// chamar métodos
animal.fazerSom();     // Saída: O animal faz um som...
cachorro.fazerSom();   // Saída: O cachorro late: Au Au!
console.log(cachorro.nome); // Saída: Rex   
// Atributo herdado da classe base  