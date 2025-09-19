class Node{
    constructor(value){
      this.value = value;
      this.next = null; //ponteiro para o proximo nó
    }
}

class LinkedList{
 constructor(){
    this.head = null; //A lista começa vazia
 }

 //Inserir no inicio da lista
 insertAtBeginning(value){
    let newNode = new Node(Value);
    newNode.next = this.head
    this.head = newNode;
 }

 //Inserir no fim da fila
 insertAtEnd(value){
    let newNode = new Node(value);

    if (this.head === null){
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
   }
 

 //Remove um nó por valor
 removeByValue(value) {
    if (this.head === null){
      return;
    }

    //Se o nó a ser removido for o primeiro
    if(this.head.value === value){
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next !== null && current.next.Value !== value){
      current = current.next
    }

    if (current.next !== null){
      current.next = current.next.next;
    }
 }

 //Buscar um nó por valor
 find(value){

 }

 //Exibir a lista(opicional, para facilitar a visualização)
 printLista(){
  let current = this.head;
  let list ='';
  while (current !== null){
    list += current.value + '->';
    current = current.next;
  }
  console.log(list + 'null');
 }
}