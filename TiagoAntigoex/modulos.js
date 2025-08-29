class MinhaPilha {
    constructor(){
        this.items={};
        this.tamanho =0;
    }
    adicionar(elemento){
        this.items[this.tamanho] = elemento;
        this.tamanho++;
    }
  remover(){
    if(this.tamanho ===0) {
        return undefined;
    }
    const ultimoItem = this.items[this.tamanho -1];
    delete this.items[this.tamanho -1];
    this.tamanho--;
    return ultimoItem;
  } 

  topo() {
    if (this.tamanho ===0) {
        return undefined;
    }
    return this.items[this.tamanho -1];
  }
  estaVazia() {
    return this.tamanho ===0;
  }

  tamanhoPilha() {
    return this.tamanho;
  }

  limpar(){
    this.items={};
    this.tamanho =0;
  }
}

let moduloEspacial = new MinhaPilha();

  moduloEspacial.adicionar("Módulo A");
  moduloEspacial.adicionar("Módulo B");
  moduloEspacial.adicionar("Módulo C");

  console.log("Ordem de retorno");
  while(!moduloEspacial.estaVazia()){
    console.log(moduloEspacial.remover());
  }